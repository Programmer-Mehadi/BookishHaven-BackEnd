import express from "express";
import { BookController } from "./book.controller";
const router = express.Router();

router.get("/last-ten-books", BookController.getTenBooks);
router.post("/add-book", BookController.addBook);
router.get("/all-books", BookController.getAllBooks);
router.get("/single-book/:id", BookController.getSingleBook);
router.post("/edit-book", BookController.editSingleBook);
router.delete("/delete-book/:id", BookController.deleteSingleBook);

export const BookRoutes = router;
