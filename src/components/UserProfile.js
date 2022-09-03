import { useContext } from "react";
import React from "react";
import { UserContext } from "./App";

const UserProfile = ({ name }) => {
  const channelName = useContext(UserContext);
  return (
    <div>
      <h1 id="name">Name:- {channelName.name}</h1>
      <h1 id="age">Age:- {channelName.age}</h1>
    </div>
  );
};

export { UserProfile };
