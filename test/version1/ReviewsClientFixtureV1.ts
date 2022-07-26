const assert = require('chai').assert;

import { IReviewsClientV1 } from '../../src/version1/IReviewsClientV1';
import { TestModel } from '../data/TestModel';
import { ReviewV1 } from 'service-reviews-node';

let REVIEW1: ReviewV1 = TestModel.createReview1();
let REVIEW2: ReviewV1 = TestModel.createReview2();

export class ReviewsClientFixtureV1 {
    private _client: IReviewsClientV1;

    constructor(client: IReviewsClientV1) {
        this._client = client;
    }

    public async testCrudOperations() {
        let review1:ReviewV1;

        // Create one Review
        let rating = await this._client.submitReview(null, REVIEW1);

        assert.isObject(rating);

        // Create another Review
        rating = await this._client.submitReview(null, REVIEW2);

        assert.isObject(rating);

        // Get all Reviews
        let page = await this._client.getReviews(null, null, null, null);

        assert.isObject(page);
        assert.lengthOf(page.data, 2);
        review1 = Object.assign({}, page.data[0]);

        // Get Review by id
        let review = await this._client.getReviewById(null, REVIEW1.id);

        assert.isObject(review);
        TestModel.assertEqualReviewV1(review, REVIEW1);

        // Get party Review
        review = await this._client.getPartyReview(null, REVIEW1.party_id, REVIEW1.product_id);

        assert.isObject(review);
        TestModel.assertEqualReviewV1(review, REVIEW1);

        // Get product rating
        rating = await this._client.getProductRating(null, REVIEW1.product_id);

        assert.isObject(rating);
        assert.equal(rating.rating_0_count, 1);
        assert.isUndefined(rating.rating_1_count);
        assert.isUndefined(rating.rating_2_count);
        assert.equal(rating.rating_3_count, 1);
        assert.isUndefined(rating.rating_4_count);
        assert.isUndefined(rating.rating_5_count);
        assert.equal(rating.total_count, 2);

        // Update review
        review1.rating = 5;
        review1.testimonial = "Update Test msg";

        rating = await this._client.updateReview(null, review1);

        assert.isObject(rating);
        assert.equal(rating.rating_0_count, 0);
        assert.isUndefined(rating.rating_1_count);
        assert.isUndefined(rating.rating_2_count);
        assert.equal(rating.rating_3_count, 1);
        assert.isUndefined(rating.rating_4_count);
        assert.equal(rating.rating_5_count, 1);
        assert.equal(rating.total_count, 2);

        // Get Review by id
        review = await this._client.getReviewById(null, review1.id);

        assert.isObject(review);
        TestModel.assertEqualReviewV1(review, review1);

        // Report Review helpful
        review = await this._client.reportHelpful(null, REVIEW1.id, REVIEW1.party_id);

        assert.isObject(review);
        assert.equal(review.helpful_count, 1);

        // Report Review abuse
        review = await this._client.reportAbuse(null, REVIEW2.id, REVIEW2.party_id);

        assert.isObject(review);
        assert.equal(review.abuse_count, 1);

        // Delete Review
        let result = await this._client.deleteReviewById(null, REVIEW1.id);

        // assert.isNull(result);

        // Try to get delete Review
        result = await this._client.getReviewById(null, REVIEW1.id);

        // assert.isNull(result);
    }
}
