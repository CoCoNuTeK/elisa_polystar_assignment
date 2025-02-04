import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "@/store/slices/userSlice";
import { User } from "@/types/user";
import styles from "./UserForm.module.scss";

const UserForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Omit<User, "id">>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    if (!formData.name || !formData.email) {
      alert("Name and Email are required!");
      return;
    }

    const newUser: User = {
      id: Math.floor(Math.random() * 10000),
      ...formData
    };

    dispatch(addUser(newUser));
    setFormData({ name: "", username: "", email: "", phone: "", website: "" });
  };

  return (
    <div className={styles.userForm}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Website" />

      <button onClick={handleAddUser} className={styles.addButton}>
        Add User
      </button>
    </div>
  );
};

export default UserForm;
