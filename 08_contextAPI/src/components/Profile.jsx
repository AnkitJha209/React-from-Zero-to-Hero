import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if(!user){
    return <h2>Please Login</h2>
  }
  return <div>Name : {user.input}</div>;
};

export default Profile;
