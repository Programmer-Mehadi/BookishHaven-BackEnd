import { Model, Types } from "mongoose";

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  authorId: Types.ObjectId;
  image: string;
};

export type BookModel = Model<IBook, Record<string, undefined>>;
