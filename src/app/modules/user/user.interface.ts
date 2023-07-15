import { Model } from "mongoose";

export type IUser = {
  name: string;
  email: string;
  password: string;
  token: {
    tokenText: string;
    validateTime: Date;
  };
};

export type UserModel = Model<IUser, Record<string, undefined>>;
