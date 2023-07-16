import express from "express";
import { BookRoutes } from "../modules/book/book.route";
import { UserRoutes } from "../modules/user/user.route";
import { ReviewsRoutes } from "../modules/review/review.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
