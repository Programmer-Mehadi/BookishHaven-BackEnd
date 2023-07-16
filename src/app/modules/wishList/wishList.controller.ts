import { Request, Response } from "express";
import httpStatus from "http-status";
import { Types } from "mongoose";
import sendResponse from "../../../shared/sendResponse";
import { WishListService } from "./wishList.service";
import { IWishList } from "./wishList.interface";

const createWishList = async (req: Request, res: Response) => {
  const { data } = req.body;
  const result = await WishListService.createWishList(data);
  sendResponse<IWishList | object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message:
      result === null ? "No WishLIst Added !" : "WishList Changed Successfully",
    data: result,
  });
};
const getAllWishList = async (req: Request, res: Response) => {
  const { id } = req.body;
  console.log(id);
  const result = await WishListService.getAllWishList(id?.id as string);
  sendResponse<object | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message:
      result === null ? "No WishLIst Found !" : "WishList Found Successfully",
    data: result,
  });
};

export const WishListController = {
  createWishList,
  getAllWishList,
};
