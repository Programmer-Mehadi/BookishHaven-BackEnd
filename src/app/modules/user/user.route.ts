import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router.post("/sign-in", UserController.signIn);
router.post("/sign-up", UserController.signUp);
router.post("/check-sign-in", UserController.checkSignIn);
export const UserRoutes = router;
