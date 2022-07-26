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
exports.ReviewsNullClientV1 = void 0;
class ReviewsNullClientV1 {
    getReviews(correlationId, filter, paging, sorting) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    getReviewById(correlationId, reviewId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    getPartyReview(correlationId, partyId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    getProductRating(correlationId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    submitReview(correlationId, review) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    updateReview(correlationId, review) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    reportHelpful(correlationId, reviewId, partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    reportAbuse(correlationId, reviewId, partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    deleteReviewById(correlationId, reviewId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
}
exports.ReviewsNullClientV1 = ReviewsNullClientV1;
//# sourceMappingURL=ReviewsNullClientV1.js.map