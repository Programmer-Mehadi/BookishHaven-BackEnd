import { Types } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { IUser } from "./user.interface";
import { User } from "./user.model";
// get all last 10 books
const signIn = async (data: object): Promise<IUser | null> => {
  
  const result = await User.findOne({
    ...data,
  });
  const token1 = uuidv4().split("-").join("");
  const token2 = uuidv4().split("-").join("");
  const token3 = uuidv4().split("-").join("");
  if (result) {
    const updateResult = await User.updateOne(
      {
        _id: result._id,
      },
      {
        token: {
          tokenText: token1 + token2 + token3,
          validateTime: new Date(),
        },
      }
    );
    if (updateResult) {
      let finalResult = await User.findOne({
        ...data,
      });
      return finalResult;
    }
  }
  return result;
};
const signUp = async (data: IUser): Promise<IUser | null> => {
  const token1 = uuidv4().split("-").join("");
  const token2 = uuidv4().split("-").join("");
  const token3 = uuidv4().split("-").join("");
  data.token = {
    tokenText: token1 + token2 + token3,
    validateTime: new Date(),
  };
  const result = await User.create(data);
  return result;
};
const checkSignIn = async (token: {
  token: string;
}): Promise<{
  _id: Types.ObjectId;
  name: string;
  email: string;
} | null> => {

  const result = await User.findOne({
    "token.tokenText": token.token,
  });
  if (result) {
    const r = {
      _id: result._id,
      name: result.name,
      email: result.email,
    };
    return r;
  }
  return result;
};

export const UserService = {
  signIn,
  signUp,
  checkSignIn,
};
