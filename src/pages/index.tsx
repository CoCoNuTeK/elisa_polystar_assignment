import React from "react";
import Head from "next/head";
import UserList from "@/components/UserList/UserList";
import UserForm from "@/components/UserForm/UserForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>User List</title>
        <meta name="description" content="A list of users fetched from API" />
      </Head>
      <div className="container">
        <h1 className="title">User Management</h1> 
        <UserForm />
        <UserList />
      </div>
    </>
  );
}
