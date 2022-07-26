import { ConfigParams, SortParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { IReviewsClientV1 } from './IReviewsClientV1';
import { ReviewV1 } from 'service-reviews-node';
import { RatingV1 } from 'service-reviews-node';

export class ReviewsHttpClientV1 extends CommandableHttpClient implements IReviewsClientV1 {

    constructor(config?: any) {
        super('v1/reviews');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getReviews(correlationId: string, filter: FilterParams, paging: PagingParams, sorting: SortParams): Promise<DataPage<ReviewV1>> {
        let timing = this.instrument(correlationId, 'reviews.get_reviews');

        try {
            return await this.callCommand(
                'get_reviews',
                correlationId,
                {
                    filter: filter,
                    paging: paging,
                    sorting: sorting
                }
            );

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getReviewById(correlationId: string, reviewId: string): Promise<ReviewV1> {
        let timing = this.instrument(correlationId, 'reviews.get_review_by_id');

        try {
            return await this.callCommand(
                'get_review_by_id',
                correlationId,
                {
                    review_id: reviewId,
                }
            );

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getPartyReview(correlationId: string, partyId: string, productId: string): Promise<ReviewV1> {
        let timing = this.instrument(correlationId, 'reviews.get_party_review');

        try {
            return await this.callCommand(
                'get_party_review',
                correlationId,
                {
                    party_id: partyId,
                    product_id: productId
                }
            );

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getProductRating(correlationId: string, productId: string): Promise<RatingV1> {
        let timing = this.instrument(correlationId, 'reviews.get_product_rating');

        try {
            return await this.callCommand(
                'get_product_rating',
                correlationId,
                {
                    product_id: productId,
                }
            );

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async submitReview(correlationId: string, review: ReviewV1): Promise<RatingV1> {
        let timing = this.instrument(correlationId, 'reviews.submit_review');

        try {
            return await this.callCommand(
                'submit_review',
                correlationId,
                {
                    review: review,
                }
            );

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateReview(correlationId: string, review: ReviewV1): Promise<RatingV1> {
        let timing = this.instrument(correlationId, 'reviews.update_review');

        try {
            return await this.callCommand(
                'update_review',
                correlationId,
                {
                    review: review,
                }
            );

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async reportHelpful(correlationId: string, reviewId: string, partyId: string): Promise<ReviewV1> {
        let timing = this.instrument(correlationId, 'reviews.report_helpful');

        try {
            return await this.callCommand(
                'report_helpful',
                correlationId,
                {
                    review_id: reviewId,
                    party_id: partyId
                }
            );

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async reportAbuse(correlationId: string, reviewId: string, partyId: string): Promise<ReviewV1> {
        let timing = this.instrument(correlationId, 'reviews.report_abuse');

        try {
            return await this.callCommand(
                'report_abuse',
                correlationId,
                {
                    review_id: reviewId,
                    party_id: partyId
                }
        );

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteReviewById(correlationId: string, reviewId: string): Promise<RatingV1> {
        let timing = this.instrument(correlationId, 'reviews.delete_review_by_id');

        try {
            return await this.callCommand(
                'delete_review_by_id',
                correlationId,
                {
                    review_id: reviewId,
                }
            );

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}
