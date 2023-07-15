import express from "express";
import { BookController } from "./book.controller";
const router = express.Router();

router.get("/last-ten-books", BookController.getTenBooks);
router.post("/add-book", BookController.addBook);

export const BookRoutes = router;
