import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

export const UserContext = createContext();

const UserProvider = (props) => {
  
  const { loading, data } = useQuery(QUERY_ME);


  const userData = data?.me || [];

  console.log(userData);


  return (
    <UserContext.Provider  value={{ currentUser: "currentUser" }} {...props} />
  );
};

export default UserProvider;
