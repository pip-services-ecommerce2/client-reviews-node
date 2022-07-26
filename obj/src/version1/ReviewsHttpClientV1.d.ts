import { SortParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { IReviewsClientV1 } from './IReviewsClientV1';
import { ReviewV1 } from 'service-reviews-node';
import { RatingV1 } from 'service-reviews-node';
export declare class ReviewsHttpClientV1 extends CommandableHttpClient implements IReviewsClientV1 {
    constructor(config?: any);
    getReviews(correlationId: string, filter: FilterParams, paging: PagingParams, sorting: SortParams): Promise<DataPage<ReviewV1>>;
    getReviewById(correlationId: string, reviewId: string): Promise<ReviewV1>;
    getPartyReview(correlationId: string, partyId: string, productId: string): Promise<ReviewV1>;
    getProductRating(correlationId: string, productId: string): Promise<RatingV1>;
    submitReview(correlationId: string, review: ReviewV1): Promise<RatingV1>;
    updateReview(correlationId: string, review: ReviewV1): Promise<RatingV1>;
    reportHelpful(correlationId: string, reviewId: string, partyId: string): Promise<ReviewV1>;
    reportAbuse(correlationId: string, reviewId: string, partyId: string): Promise<ReviewV1>;
    deleteReviewById(correlationId: string, reviewId: string): Promise<RatingV1>;
}
