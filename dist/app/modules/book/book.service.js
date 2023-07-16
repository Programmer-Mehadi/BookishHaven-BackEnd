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
exports.BookService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const user_model_1 = require("../user/user.model");
const book_model_1 = require("./book.model");
const editSingleBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const token = data.token;
    const userData = yield user_model_1.User.findOne({
        "token.tokenText": token,
    });
    if ((userData === null || userData === void 0 ? void 0 : userData._id.toString()) === data.authorId) {
        const updateData = {
            genre: data.genre,
            publicationDate: data.publicationDate,
            title: data.title,
            author: data.author,
            image: data.image,
        };
        const result = yield book_model_1.Book.findOneAndUpdate({
            _id: data._id,
        }, {
            $set: updateData,
        });
        return result;
    }
    return null;
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findOne({
        _id: id,
    });
    return result;
});
const deleteSingleBook = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield user_model_1.User.findOne({
        "token.tokenText": data.token,
    });
    if (find) {
        if ((find === null || find === void 0 ? void 0 : find._id.toString()) === (data === null || data === void 0 ? void 0 : data.uid)) {
            const result = yield book_model_1.Book.findByIdAndDelete(id);
            console.log(find, data, id);
            return result;
        }
        else {
            new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "No Authorized");
        }
    }
    else {
        return null;
    }
});
// get all last 10 books
const getTenBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.find({}).sort({ createdAt: -1 }).limit(10);
    return result;
});
// get all books
const getAllBooks = (whereConditions) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.find(whereConditions).sort({ createdAt: -1 });
    return result;
});
const addBookToDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.create(data);
    return result;
});
exports.BookService = {
    getTenBooks,
    addBookToDB,
    getAllBooks,
    getSingleBook,
    editSingleBook,
    deleteSingleBook,
};
