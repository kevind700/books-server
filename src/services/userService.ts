import axios from "axios";
import { User } from "../types/models";

const API_URL = "http://localhost:3000";

export class UserService {
  async getAllUsers(): Promise<User[]> {
    try {
      const response = await axios.get<User[]>(`${API_URL}/users`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching users");
    }
  }

  async getUserById(id: string): Promise<User> {
    try {
      const response = await axios.get<User>(`${API_URL}/users/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("User not found");
    }
  }

  async createUser(user: Omit<User, "id">): Promise<User> {
    try {
      const response = await axios.post<User>(`${API_URL}/users`, user);
      return response.data;
    } catch (error) {
      throw new Error("Error creating user");
    }
  }

  async updateUser(id: string, user: Partial<User>): Promise<User> {
    try {
      const response = await axios.patch<User>(`${API_URL}/users/${id}`, user);
      return response.data;
    } catch (error) {
      throw new Error("Error updating user");
    }
  }

  async deleteUser(id: string): Promise<void> {
    try {
      await axios.delete(`${API_URL}/users/${id}`);
    } catch (error) {
      throw new Error("Error deleting user");
    }
  }
}
