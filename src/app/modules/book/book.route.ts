import express from "express";
import { BookController } from "./book.controller";
const router = express.Router();

router.get("/last-ten-books", BookController.getTenBooks);

export const BookRoutes = router;
