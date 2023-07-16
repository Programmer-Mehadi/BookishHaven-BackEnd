import { Schema, model } from "mongoose";

import { IWishList, WishListModel } from "./wishList.interface";

const wishListSchema = new Schema<IWishList>(
  {
    text: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    bookId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Book",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
export const WishList = model<IWishList, WishListModel>(
  "WishList",
  wishListSchema
);
