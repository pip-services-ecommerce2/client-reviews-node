import { IReviewsClientV1 } from './IReviewsClientV1';

import { FilterParams } from 'pip-services3-commons-nodex';
import { SortParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { ReviewV1 } from 'service-reviews-node';
import { RatingV1 } from 'service-reviews-node';

export class ReviewsNullClientV1 implements IReviewsClientV1 {
    public async getReviews(correlationId: string, filter: FilterParams, paging: PagingParams, sorting: SortParams): Promise<DataPage<ReviewV1>> {
        return null;
    }

    public async getReviewById(correlationId: string, reviewId: string): Promise<ReviewV1> {
        return null;
    }

    public async getPartyReview(correlationId: string, partyId: string, productId: string): Promise<ReviewV1> {
        return null;
    }

    public async getProductRating(correlationId: string, productId: string): Promise<RatingV1> {
        return null;
    }

    public async submitReview(correlationId: string, review: ReviewV1): Promise<RatingV1> {
        return null;
    }

    public async updateReview(correlationId: string, review: ReviewV1): Promise<RatingV1> {
        return null;
    }

    public async reportHelpful(correlationId: string, reviewId: string, partyId: string): Promise<ReviewV1> {
        return null;
    }

    public async reportAbuse(correlationId: string, reviewId: string, partyId: string): Promise<ReviewV1> {
        return null;
    }

    public async deleteReviewById(correlationId: string, reviewId: string): Promise<RatingV1> {
        return null;
    }
    
}
