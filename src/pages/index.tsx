import React, { useEffect, useState } from "react";
import Head from "next/head";
import { fetchUsers } from "@/utils/api";
import UserCard from "@/components/UserCard";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <>
      <Head>
        <title>User List</title>
        <meta name="description" content="A list of users fetched from API" />
      </Head>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </>
  );
}
