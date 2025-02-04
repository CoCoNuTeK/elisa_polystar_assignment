import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/utils/api";
import { RootState, AppDispatch } from "@/store/store";
import { setUsers } from "@/store/slices/userSlice";
import UserCard from "../UserCard/UserCard";
import styles from "./UserList.module.scss";

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.userList); // Get users from Redux

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      dispatch(setUsers(data)); // Store users in Redux
    };
    getUsers();
  }, [dispatch]);

  return (
    <div className={styles.userList}> 
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UserList;
