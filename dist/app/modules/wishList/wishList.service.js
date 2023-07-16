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
exports.WishListService = void 0;
const wishList_model_1 = require("./wishList.model");
const createWishList = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if ((data === null || data === void 0 ? void 0 : data.text) === "") {
        const result = yield wishList_model_1.WishList.deleteOne({
            bookId: data.bookId,
            userId: data.userId,
        });
        return result;
    }
    else {
        const result = yield wishList_model_1.WishList.findOneAndUpdate({
            bookId: data.bookId,
            userId: data.userId,
        }, {
            $set: {
                text: data.text,
            },
        }, {
            upsert: true,
            new: true,
        });
        return result;
    }
});
const getAllWishList = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishList_model_1.WishList.find({
        userId: id,
    });
    return result;
});
exports.WishListService = {
    createWishList,
    getAllWishList,
};
