import { Types } from "mongoose";
import { Review } from "./review.model";

const createReview = async (data: {
  text: string;
  userId: Types.ObjectId;
  bookId: Types.ObjectId;
}): Promise<{
  _id: Types.ObjectId;
  text: string;
  userId: Types.ObjectId;
  bookId: Types.ObjectId;
} | null> => {
  const result = await Review.create(data);
  return result;
};

const getAllReviews = async (id: string): Promise<object | null> => {
  const result = await Review.find({
    bookId: id,
  }).populate('userId');
  return result;
};

export const ReviewService = {
  createReview,
  getAllReviews,
};
