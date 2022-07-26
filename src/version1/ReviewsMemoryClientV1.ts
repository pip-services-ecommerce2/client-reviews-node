import { IReviewsClientV1 } from './IReviewsClientV1';

import { SortParams, ConfigParams, References, Descriptor, IOpenable } from "pip-services3-commons-nodex";

import { FilterParams } from "pip-services3-commons-nodex";
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { ReviewV1, RatingV1 } from "service-reviews-node";
import { ReviewsMemoryPersistence } from "service-reviews-node";
import { RatingsMemoryPersistence } from "service-reviews-node";
import { ReviewsController } from "service-reviews-node";

export class ReviewsMemoryClientV1 implements IReviewsClientV1, IOpenable {
    private _controller = new ReviewsController();
    private _reviews: ReviewV1[];

    private _reviewsPersistence: ReviewsMemoryPersistence;
    private _ratingsPersistence: RatingsMemoryPersistence;

    public constructor(...reviews: ReviewV1[]) {
        this._reviews = reviews;
    }

    public isOpen(): boolean {
        return this._reviewsPersistence.isOpen() && this._ratingsPersistence.isOpen(); 
    }

    public async open(correlationId: string): Promise<void> {
        let configParams = new ConfigParams();
        this._reviewsPersistence = new ReviewsMemoryPersistence();
        this._ratingsPersistence = new RatingsMemoryPersistence();

        this._reviewsPersistence.configure(configParams);
        this._reviewsPersistence.configure(configParams);

        this._controller.configure(configParams);

        let references = References.fromTuples(
            new Descriptor('service-reviews', 'persistence', 'memory', 'reviews', '1.0'), this._reviewsPersistence,
            new Descriptor('service-reviews', 'persistence', 'memory', 'ratings', '1.0'), this._ratingsPersistence,
            new Descriptor('service-reviews', 'controller', 'default', 'default', '1.0'), this._controller
        );

        this._controller.setReferences(references);

        await this._reviewsPersistence.open(null);
        await this._ratingsPersistence.open(null);

        this._reviews.forEach(async review => await this._controller.submitReview(null, review));
    }
    public async close(correlationId: string): Promise<void> {
        await this._reviewsPersistence.close(null);
        await this._ratingsPersistence.close(null);
    }

    public async getReviews(correlationId: string, filter: FilterParams, paging: PagingParams, sorting: SortParams): Promise<DataPage<ReviewV1>> {
        return await this._controller.getReviews(correlationId, filter, paging, sorting);
    }

    public async getReviewById(correlationId: string, reviewId: string): Promise<ReviewV1> {
        return await this._controller.getReviewById(correlationId, reviewId);
    }

    public async getPartyReview(correlationId: string, partyId: string, productId: string): Promise<ReviewV1> {
        return await this._controller.getPartyReview(correlationId, partyId, productId);
    }

    public async getProductRating(correlationId: string, productId: string): Promise<RatingV1> {
        return await this._controller.getProductRating(correlationId, productId);
    }

    public async submitReview(correlationId: string, review: ReviewV1): Promise<RatingV1> {
        return await this._controller.submitReview(correlationId, review);
    }

    public async updateReview(correlationId: string, review: ReviewV1): Promise<RatingV1> {
        return await this._controller.updateReview(correlationId, review);
    }

    public async reportHelpful(correlationId: string, reviewId: string, partyId: string): Promise<ReviewV1> {
        return await this._controller.reportHelpful(correlationId, reviewId, partyId);
    }

    public async reportAbuse(correlationId: string, reviewId: string, partyId: string): Promise<ReviewV1> {
        return await this._controller.reportAbuse(correlationId, reviewId, partyId);
    }

    public async deleteReviewById(correlationId: string, reviewId: string): Promise<RatingV1> {
        return await this._controller.deleteReviewById(correlationId, reviewId);
    }
}