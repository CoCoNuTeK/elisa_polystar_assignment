import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser, deleteUser } from "@/store/slices/userSlice";
import { User } from "@/types/user";
import styles from "./UserCard.module.scss";

const UserCard: React.FC<User> = ({ id, name, username, email, phone, website }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ name, username, email, phone, website });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(updateUser({ id, ...editedUser }));
    setIsEditing(false);
  };

  return (
    <div className={styles.userCard}>
      {isEditing ? (
        <>
          <input type="text" name="name" value={editedUser.name} onChange={handleChange} />
          <input type="text" name="username" value={editedUser.username} onChange={handleChange} />
          <input type="email" name="email" value={editedUser.email} onChange={handleChange} />
          <input type="text" name="phone" value={editedUser.phone} onChange={handleChange} />
          <input type="text" name="website" value={editedUser.website} onChange={handleChange} />
        </>
      ) : (
        <>
          <h3>{name} ({username})</h3>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Website:</strong> {website}</p>
        </>
      )}

      <div className={styles.buttons}>
        <button 
          onClick={isEditing ? handleSave : () => setIsEditing(true)} 
          className={isEditing ? styles.saveButton : styles.editButton}
        >
          {isEditing ? "Save" : "Edit"}
        </button>

        <button 
          onClick={() => dispatch(deleteUser(id))} 
          className={styles.deleteButton}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
