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
exports.ReviewsMemoryClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const service_reviews_node_1 = require("service-reviews-node");
const service_reviews_node_2 = require("service-reviews-node");
const service_reviews_node_3 = require("service-reviews-node");
class ReviewsMemoryClientV1 {
    constructor(...reviews) {
        this._controller = new service_reviews_node_3.ReviewsController();
        this._reviews = reviews;
    }
    isOpen() {
        return this._reviewsPersistence.isOpen() && this._ratingsPersistence.isOpen();
    }
    open(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let configParams = new pip_services3_commons_nodex_1.ConfigParams();
            this._reviewsPersistence = new service_reviews_node_1.ReviewsMemoryPersistence();
            this._ratingsPersistence = new service_reviews_node_2.RatingsMemoryPersistence();
            this._reviewsPersistence.configure(configParams);
            this._reviewsPersistence.configure(configParams);
            this._controller.configure(configParams);
            let references = pip_services3_commons_nodex_1.References.fromTuples(new pip_services3_commons_nodex_1.Descriptor('service-reviews', 'persistence', 'memory', 'reviews', '1.0'), this._reviewsPersistence, new pip_services3_commons_nodex_1.Descriptor('service-reviews', 'persistence', 'memory', 'ratings', '1.0'), this._ratingsPersistence, new pip_services3_commons_nodex_1.Descriptor('service-reviews', 'controller', 'default', 'default', '1.0'), this._controller);
            this._controller.setReferences(references);
            yield this._reviewsPersistence.open(null);
            yield this._ratingsPersistence.open(null);
            this._reviews.forEach((review) => __awaiter(this, void 0, void 0, function* () { return yield this._controller.submitReview(null, review); }));
        });
    }
    close(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._reviewsPersistence.close(null);
            yield this._ratingsPersistence.close(null);
        });
    }
    getReviews(correlationId, filter, paging, sorting) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._controller.getReviews(correlationId, filter, paging, sorting);
        });
    }
    getReviewById(correlationId, reviewId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._controller.getReviewById(correlationId, reviewId);
        });
    }
    getPartyReview(correlationId, partyId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._controller.getPartyReview(correlationId, partyId, productId);
        });
    }
    getProductRating(correlationId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._controller.getProductRating(correlationId, productId);
        });
    }
    submitReview(correlationId, review) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._controller.submitReview(correlationId, review);
        });
    }
    updateReview(correlationId, review) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._controller.updateReview(correlationId, review);
        });
    }
    reportHelpful(correlationId, reviewId, partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._controller.reportHelpful(correlationId, reviewId, partyId);
        });
    }
    reportAbuse(correlationId, reviewId, partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._controller.reportAbuse(correlationId, reviewId, partyId);
        });
    }
    deleteReviewById(correlationId, reviewId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._controller.deleteReviewById(correlationId, reviewId);
        });
    }
}
exports.ReviewsMemoryClientV1 = ReviewsMemoryClientV1;
//# sourceMappingURL=ReviewsMemoryClientV1.js.map