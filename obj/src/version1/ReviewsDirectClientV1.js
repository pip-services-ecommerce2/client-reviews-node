"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class ReviewsDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_2.Descriptor('service-reviews', 'controller', '*', '*', '*'));
        if (config)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getReviews(correlationId, filter, paging, sorting) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'reviews.get_reviews');
            try {
                return yield this._controller.getReviews(correlationId, filter, paging, sorting);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getReviewById(correlationId, reviewId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'reviews.get_review_by_id');
            try {
                return yield this._controller.getReviewById(correlationId, reviewId);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getPartyReview(correlationId, partyId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'reviews.get_party_review');
            try {
                return yield this._controller.getPartyReview(correlationId, partyId, productId);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getProductRating(correlationId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'reviews.get_product_rating');
            try {
                return yield this._controller.getProductRating(correlationId, productId);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    submitReview(correlationId, review) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'reviews.submit_review');
            try {
                return yield this._controller.submitReview(correlationId, review);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateReview(correlationId, review) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'reviews.update_review');
            try {
                return yield this._controller.updateReview(correlationId, review);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    reportHelpful(correlationId, reviewId, partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'reviews.report_helpful');
            try {
                return yield this._controller.reportHelpful(correlationId, reviewId, partyId);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    reportAbuse(correlationId, reviewId, partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'reviews.report_abuse');
            try {
                return yield this._controller.reportAbuse(correlationId, reviewId, partyId);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteReviewById(correlationId, reviewId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'reviews.delete_review_by_id');
            try {
                return yield this._controller.deleteReviewById(correlationId, reviewId);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.ReviewsDirectClientV1 = ReviewsDirectClientV1;
//# sourceMappingURL=ReviewsDirectClientV1.js.map