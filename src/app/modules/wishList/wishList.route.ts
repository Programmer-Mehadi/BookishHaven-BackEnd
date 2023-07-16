import express from "express";
import { WishListController } from "./wishList.controller";
const router = express.Router();

router.post("/create-wish-list", WishListController.createWishList);
router.post("/all-wish-lists", WishListController.getAllWishList);
export const WishListRoutes = router;
