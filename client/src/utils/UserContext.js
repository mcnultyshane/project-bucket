import React, { useState, useContext } from "react";
import { createContext } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "./queries";


export const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "", email: "" , active: true});

  const { loading, data } = useQuery(QUERY_ME);

  const userData = data?.me || [];
  return (

    // <Provider  value={{ ...userData }} >
    // {children}
    // </ Provider>

    <Provider value={{ ...userData}}>{children}</Provider>
  );
};
const useUserContext = () => useContext(UserContext);
export { UserProvider, useUserContext };
