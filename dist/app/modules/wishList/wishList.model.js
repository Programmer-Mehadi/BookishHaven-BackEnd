"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishList = void 0;
const mongoose_1 = require("mongoose");
const wishListSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    bookId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Book",
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.WishList = (0, mongoose_1.model)("WishList", wishListSchema);
