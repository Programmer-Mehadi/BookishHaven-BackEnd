import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { IBook } from "./book.interface";
import { BookService } from "./book.service";

const getTenBooks = async (req: Request, res: Response) => {
  const result = await BookService.getTenBooks();
  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message:
      result === null ? "No Book found !" : "Books retrieved successfully",
    data: result,
  });
};
const addBook = async (req: Request, res: Response) => {
  const { bookData } = req.body;
  const result = await BookService.addBookToDB(bookData);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: result === null ? "No Book Added !" : "Books Added successfully !",
    data: result,
  });
};

export const BookController = {
  getTenBooks,
  addBook,
};
