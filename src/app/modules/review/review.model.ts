import { Schema, model } from "mongoose";

import { IReview, ReviewModel } from "./review.interface";

const reviewSchema = new Schema<IReview>(
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
export const Review = model<IReview, ReviewModel>("Review", reviewSchema);
