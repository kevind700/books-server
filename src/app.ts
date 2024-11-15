import express, { Request, Response } from "express";
import { UserService } from "./services/userService";
import { BookService } from "./services/bookService";

const app = express();
const port = 4000;

const userService = new UserService();
const bookService = new BookService();

app.get("/api/users", async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/users/:id", async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});

app.get("/api/books", async (_req: Request, res: Response) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/books/:id", async (req: Request, res: Response) => {
  try {
    const book = await bookService.getBookById(Number(req.params.id));
    res.json(book);
  } catch (error) {
    res.status(404).json({ error: "Book not found" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
