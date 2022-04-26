import React from "react";
import { getUser } from "../services/auth";

const Profile: React.FC = () => {
  return (
    <div>
      <title>Profile</title>
      <header>Header Profile</header>
      <main>
        <h1>Your profile</h1>
        <ul>
          <li>Name: {getUser().name}</li>
          <li>E-mail: {getUser().email}</li>
        </ul>
      </main>
    </div>
  );
};

export default Profile;
