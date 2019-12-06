import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Dux",
      image:
        "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
