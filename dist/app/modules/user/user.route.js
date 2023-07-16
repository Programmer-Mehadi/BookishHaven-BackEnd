"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post("/sign-in", user_controller_1.UserController.signIn);
router.post("/sign-up", user_controller_1.UserController.signUp);
router.post("/check-sign-in", user_controller_1.UserController.checkSignIn);
exports.UserRoutes = router;
