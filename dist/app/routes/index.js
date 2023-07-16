"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = require("../modules/book/book.route");
const user_route_1 = require("../modules/user/user.route");
const review_route_1 = require("../modules/review/review.route");
const wishList_route_1 = require("../modules/wishList/wishList.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/book",
        route: book_route_1.BookRoutes,
    },
    {
        path: "/user",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/review",
        route: review_route_1.ReviewsRoutes,
    },
    {
        path: "/wish-list",
        route: wishList_route_1.WishListRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
