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
exports.BookController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const book_service_1 = require("./book.service");
const editSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body.bookData;
    const result = yield book_service_1.BookService.editSingleBook(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: result === null ? "No Book found !" : "Books edited successfully",
        data: result,
    });
});
const getSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield book_service_1.BookService.getSingleBook(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: result === null ? "No Book found !" : "Books retrieved successfully",
        data: result,
    });
});
const deleteSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { data } = req.body;
    console.log(req.params, data);
    const result = yield book_service_1.BookService.deleteSingleBook(data, id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: result === null ? "Cannot delete Book !" : "Books deleted successfully",
        data: result,
    });
});
const getTenBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.getTenBooks();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: result === null ? "No Book found !" : "Books retrieved successfully",
        data: result,
    });
});
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resQuery = req.query;
    const andConditions = [];
    if ((resQuery === null || resQuery === void 0 ? void 0 : resQuery.genre) !== "" && (resQuery === null || resQuery === void 0 ? void 0 : resQuery.genre) !== "All") {
        andConditions.push({
            genre: resQuery === null || resQuery === void 0 ? void 0 : resQuery.genre,
        });
    }
    if ((resQuery === null || resQuery === void 0 ? void 0 : resQuery.year) !== "" && (resQuery === null || resQuery === void 0 ? void 0 : resQuery.year) !== "All") {
        andConditions.push({
            publicationDate: { $regex: `^${resQuery === null || resQuery === void 0 ? void 0 : resQuery.year}-` },
        });
    }
    if ((resQuery === null || resQuery === void 0 ? void 0 : resQuery.name) !== "") {
        const newConditions = {
            $or: [
                {
                    author: {
                        $regex: `^${resQuery === null || resQuery === void 0 ? void 0 : resQuery.name}`,
                        $options: 'i'
                    },
                },
                {
                    title: {
                        $regex: `^${resQuery === null || resQuery === void 0 ? void 0 : resQuery.name}`,
                        $options: 'i'
                    },
                },
                {
                    genre: {
                        $regex: `^${resQuery === null || resQuery === void 0 ? void 0 : resQuery.name}`,
                        $options: 'i'
                    },
                },
            ],
        };
        andConditions.push(newConditions);
    }
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield book_service_1.BookService.getAllBooks(whereConditions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: result === null ? "No Book found !" : "Books retrieved successfully",
        data: result,
    });
});
const addBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookData } = req.body;
    const result = yield book_service_1.BookService.addBookToDB(bookData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: result === null ? "No Book Added !" : "Books Added successfully !",
        data: result,
    });
});
exports.BookController = {
    getTenBooks,
    addBook,
    getAllBooks,
    getSingleBook,
    editSingleBook,
    deleteSingleBook,
};
