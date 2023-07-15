import { Request, Response } from "express";
import httpStatus from "http-status";
import { Types } from "mongoose";
import sendResponse from "../../../shared/sendResponse";
import { IUser } from "./user.interface";
import { UserService } from "./user.service";

const signIn = async (req: Request, res: Response) => {
  const { userData } = req.body.user;
  console.log("userData", userData);
  const result = await UserService.signIn(userData);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: result === null ? "No User Found !" : "User Found Successfully",
    data: result,
  });
};
const signUp = async (req: Request, res: Response) => {
  const { userData } = req.body.user;

  const result = await UserService.signUp(userData);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message:
      result === null ? "No User Created !" : "User Created Successfully",
    data: result,
  });
};
const checkSignIn = async (req: Request, res: Response) => {
  const token = req.body.token;
  const result = await UserService.checkSignIn(token);
  sendResponse<{
    _id: Types.ObjectId;
    name: string;
    email: string;
  }>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: result === null ? "No User Found !" : "User Found Successfully",
    data: result,
  });
};

export const UserController = {
  signIn,
  signUp,
  checkSignIn,
};
