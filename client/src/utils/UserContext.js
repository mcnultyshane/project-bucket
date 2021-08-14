import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";

export const UserContext = createContext();

const UserProvider = (props) => {
  
  const { loading, data } = useQuery(GET_ME);
//     // ,
//     //   {
//     //   variables: { userId: userId },
//     // }
//     );

  const userData = data?.me || [];
// //   const [currentUser, setCurrentUser] = useState({
// //     email: "",
// //   });
  console.log(userData);

// useEffect(() => {
//     console.log(this);
//     setCurrentUser({
// //         email: userData.email.value,

//     })
//   },[1])
// if (userData = {}){
//     setCurrentUser(...userData);
// }

  // const getCurrentUser = async function (userData) {

  //     setCurrentUser(userData);

  //   };

  //   getCurrentUser(userData)
  return (
    <UserContext.Provider  value={{ currentUser: "currentUser" }} {...props} />
  );
};

export default UserProvider;
