import express from "express";
import { ReviewController } from "./review.controller";
const router = express.Router();

router.post("/create-review", ReviewController.createReview);
// router.post("/get-all-reviews/:id", UserController.signUp);
export const ReviewsRoutes = router;
