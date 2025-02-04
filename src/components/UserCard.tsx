import React from "react";
import { User } from "@/utils/api";

const UserCard: React.FC<Omit<User, "id">> = ({ name, username, email, phone, website }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <h3>{name} ({username})</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Website:</strong> {website}</p>
    </div>
  );
};

export default UserCard;
