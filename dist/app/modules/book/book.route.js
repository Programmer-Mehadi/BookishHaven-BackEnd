"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.get("/last-ten-books", book_controller_1.BookController.getTenBooks);
router.post("/add-book", book_controller_1.BookController.addBook);
router.get("/all-books", book_controller_1.BookController.getAllBooks);
router.get("/single-book/:id", book_controller_1.BookController.getSingleBook);
router.post("/edit-book", book_controller_1.BookController.editSingleBook);
router.delete("/delete-book/:id", book_controller_1.BookController.deleteSingleBook);
exports.BookRoutes = router;
