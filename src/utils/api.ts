import axios from "axios";

// API Endpoint
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Type for User Data
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

// Function to fetch users
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
