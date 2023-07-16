import { Model, Types } from "mongoose";

export type IReview = {
  text: string;
  userId: Types.ObjectId;
  bookId: Types.ObjectId;
};

export type ReviewModel = Model<IReview, Record<string, undefined>>;
