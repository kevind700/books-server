import axios from "axios";
import { Book } from "../types/models";

const API_URL = "http://localhost:3000";

export class BookService {
  async getAllBooks(): Promise<Book[]> {
    try {
      const response = await axios.get<Book[]>(`${API_URL}/books`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching books");
    }
  }

  async getBookById(id: number): Promise<Book> {
    try {
      const response = await axios.get<Book>(`${API_URL}/books/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Book not found");
    }
  }

  async createBook(book: Omit<Book, "id">): Promise<Book> {
    try {
      const response = await axios.post<Book>(`${API_URL}/books`, book);
      return response.data;
    } catch (error) {
      throw new Error("Error creating book");
    }
  }

  async updateBook(id: number, book: Partial<Book>): Promise<Book> {
    try {
      const response = await axios.patch<Book>(`${API_URL}/books/${id}`, book);
      return response.data;
    } catch (error) {
      throw new Error("Error updating book");
    }
  }

  async deleteBook(id: number): Promise<void> {
    try {
      await axios.delete(`${API_URL}/books/${id}`);
    } catch (error) {
      throw new Error("Error deleting book");
    }
  }
}
