import { Types } from "mongoose";
import { IBookFilter } from "../../../interfaces/comon";
import { IBook } from "./book.interface";
import { Book } from "./book.model";
import { User } from "../user/user.model";

const editSingleBook = async (data: object): Promise<IBook | null> => {

  const token = data.token as string;

  const userData = await User.findOne({
    "token.tokenText": token,
  });

  if (userData?._id.toString() === data.authorId) {
    const updateData = {
      genre: data.genre,
      publicationDate: data.publicationDate,
      title: data.title,
      author: data.author,
      image: data.image,
    };
    const result = await Book.findOneAndUpdate(
      {
        _id: data._id,
      },
      {
        $set: updateData,
      }
    );
    return result;
  }

  return null;
};
const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findOne({
    _id: id,
  });
  return result;
};
// get all last 10 books
const getTenBooks = async (): Promise<IBook[] | null> => {
  const result = await Book.find({}).sort({ createdAt: -1 }).limit(10);
  return result;
};
// get all books
const getAllBooks = async (
  whereConditions: IBookFilter | {}
): Promise<IBook[] | null> => {
  const result = await Book.find(whereConditions).sort({ createdAt: -1 });
  return result;
};
const addBookToDB = async (data: IBook): Promise<IBook | null> => {
  const result = await Book.create(data);
  return result;
};

export const BookService = {
  getTenBooks,
  addBookToDB,
  getAllBooks,
  getSingleBook,
  editSingleBook,
};
