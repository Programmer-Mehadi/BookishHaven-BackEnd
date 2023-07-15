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

export const BookController = {
  getTenBooks,
}