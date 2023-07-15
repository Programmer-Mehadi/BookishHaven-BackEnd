import { IBook } from "./book.interface";
import { Book } from "./book.model";

// get all last 10 books
const getTenBooks = async (): Promise<IBook[] | null> => {
  const result = await Book.find({}).limit(10);
  return result;
};
const addBookToDB = async (data: IBook): Promise<IBook | null> => {

  const result = await Book.create(data);

  return result;
};

export const BookService = {
  getTenBooks,
  addBookToDB,
};
