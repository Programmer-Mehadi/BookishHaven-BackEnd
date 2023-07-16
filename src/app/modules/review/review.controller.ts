import { Request, Response } from "express";
import httpStatus from "http-status";
import { Types } from "mongoose";
import sendResponse from "../../../shared/sendResponse";
import { ReviewService } from "./review.service";
import { IReview } from "./review.interface";

const createReview = async (req: Request, res: Response) => {
  const { review } = req.body;
  console.log("reviewData", review);
  const result = await ReviewService.createReview(review);
  sendResponse<IReview>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message:
      result === null ? "No Review Added !" : "Review Added Successfully",
    data: result,
  });
};

export const ReviewController = {
  createReview,
};
