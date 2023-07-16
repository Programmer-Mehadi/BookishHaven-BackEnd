import express from "express";
import { ReviewController } from "./review.controller";
const router = express.Router();

router.post("/create-review", ReviewController.createReview);
router.get("/all-reviews/:id", ReviewController.getAllReviews);
export const ReviewsRoutes = router;
