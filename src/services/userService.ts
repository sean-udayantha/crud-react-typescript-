import axios from "axios";
import { User } from "../types/user";

const API_URL = "https://jsonplaceholder.typicode.com/posts"; // Example API

export const userService = {
  getUsers: async (): Promise<User[]> => {
    const response = await axios.get(API_URL);
    console.log("🚀 ~ getUsers: ~ response:", response)
    return response.data;
  },

  createUser: async (user: Omit<User, "id">): Promise<User> => {
    const response = await axios.post(API_URL, user);
    console.log("🚀 ~ createUser: ~ response:", response)
    return response.data;
  },

  updateUser: async (id: number, user: Omit<User, "id">): Promise<User> => {
    const response = await axios.put(`${API_URL}/${id}`, user);
    console.log("🚀 ~ updateUser: ~ response:", response)
    return response.data;
  },

  deleteUser: async (id: number): Promise<void> => {
    const response = await axios.delete(`${API_URL}/${id}`);
    console.log("🚀 ~ deleteUser: ~ response:", response)
  },
};
