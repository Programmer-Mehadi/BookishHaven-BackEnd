import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { IBook } from "./book.interface";
import { BookService } from "./book.service";

const editSingleBook = async (req: Request, res: Response) => {
  const data = req.body.bookData;
  const result = await BookService.editSingleBook(data);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: result === null ? "No Book found !" : "Books edited successfully",
    data: result,
  });
};
const getSingleBook = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookService.getSingleBook(id);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message:
      result === null ? "No Book found !" : "Books retrieved successfully",
    data: result,
  });
};
const deleteSingleBook = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { data } = req.body;
  console.log(req.params, data);
  const result = await BookService.deleteSingleBook(data, id);
  sendResponse<IBook | null | object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message:
      result === null ? "Cannot delete Book !" : "Books deleted successfully",
    data: result,
  });
};
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
const getAllBooks = async (req: Request, res: Response) => {
  const resQuery = req.query;
  const andConditions = [];
  if (resQuery?.genre !== "" && resQuery?.genre !== "All") {
    andConditions.push({
      genre: resQuery?.genre,
    });
  }

  if (resQuery?.year !== "" && resQuery?.year !== "All") {
    andConditions.push({
      publicationDate: { $regex: `^${resQuery?.year}-` },
    });
  }
  if (resQuery?.name !== "") {
    const newConditions = {
      $or: [
        {
          author: {
            $regex: `^${resQuery?.name}`,
            $options : 'i'
          },
        },
        {
          title: {
            $regex: `^${resQuery?.name}`,
            $options : 'i'
          },
        },
        {
          genre: {
            $regex: `^${resQuery?.name}`,
            $options : 'i'
          },
        },
      ],
    };
    andConditions.push(newConditions);
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};
  const result = await BookService.getAllBooks(whereConditions);
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
  getAllBooks,
  getSingleBook,
  editSingleBook,
  deleteSingleBook,
};
