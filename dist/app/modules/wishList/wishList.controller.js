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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const wishList_service_1 = require("./wishList.service");
const createWishList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = req.body;
    const result = yield wishList_service_1.WishListService.createWishList(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: result === null ? "No WishLIst Added !" : "WishList Changed Successfully",
        data: result,
    });
});
const getAllWishList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const result = yield wishList_service_1.WishListService.getAllWishList(id === null || id === void 0 ? void 0 : id.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: result === null ? "No WishLIst Found !" : "WishList Found Successfully",
        data: result,
    });
});
exports.WishListController = {
    createWishList,
    getAllWishList,
};
