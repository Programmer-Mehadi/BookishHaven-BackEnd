"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListRoutes = void 0;
const express_1 = __importDefault(require("express"));
const wishList_controller_1 = require("./wishList.controller");
const router = express_1.default.Router();
router.post("/create-wish-list", wishList_controller_1.WishListController.createWishList);
router.post("/all-wish-lists", wishList_controller_1.WishListController.getAllWishList);
exports.WishListRoutes = router;
