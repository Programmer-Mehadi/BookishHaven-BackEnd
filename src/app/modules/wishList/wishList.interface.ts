import { Model, Types } from "mongoose";

export type IWishList = {
  text: string;
  userId: Types.ObjectId;
  bookId: Types.ObjectId;
};

export type WishListModel = Model<IWishList, Record<string, undefined>>;
