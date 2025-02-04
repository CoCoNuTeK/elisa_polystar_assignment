import axios from "axios";
import { User } from "@/types/user";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(API_URL);

    // Manually ensure only defined fields are stored
    const filteredUsers: User[] = response.data.map(user => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      website: user.website
    }));

    console.log("✅ Fetched and filtered attributes:", filteredUsers);
    return filteredUsers;
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    return [];
  }
};
