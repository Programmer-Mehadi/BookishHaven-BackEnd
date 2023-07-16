import { Types, UpdateWriteOpResult } from "mongoose";
import { WishList } from "./wishList.model";
const createWishList = async (data: {
  text: string;
  userId: Types.ObjectId;
  bookId: Types.ObjectId;
}): Promise<
  | {
      _id: Types.ObjectId;
      text: string;
      userId: Types.ObjectId;
      bookId: Types.ObjectId;
    }
  | null
  | object
> => {
  if (data?.text === "") {
    const result = await WishList.deleteOne({
      bookId: data.bookId,
      userId: data.userId,
    });
    return result;
  } else {
    const result = await WishList.findOneAndUpdate(
      {
        bookId: data.bookId,
        userId: data.userId,
      },
      {
        $set: {
          text: data.text,
        },
      },
      {
        upsert: true,
        new: true,
      }
    );
    return result;
  }
};

const getAllWishList = async (id: string): Promise<object[] | null> => {
  const result = await WishList.find({
    userId: id,
  });
  return result;
};

export const WishListService = {
  createWishList,
  getAllWishList,
};
