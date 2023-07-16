import express from "express";
import { BookRoutes } from "../modules/book/book.route";
import { UserRoutes } from "../modules/user/user.route";
import { ReviewsRoutes } from "../modules/review/review.route";
import { WishListRoutes } from "../modules/wishList/wishList.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/book",
    route: BookRoutes,
  },
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/review",
    route: ReviewsRoutes,
  },
  {
    path: "/wish-list",
    route: WishListRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
