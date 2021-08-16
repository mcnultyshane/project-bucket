// import React, { useState, useEffect, useContext } from "react";
// import { createContext } from "react";
// import { useQuery } from "@apollo/client";
// import { QUERY_ME } from "./queries";

// // import { useAccountReducer } from './reducers';

// export const UserContext = createContext();
// const { Provider } = UserContext;

// const UserProvider = (props) => {
  
//   const { loading, data } = useQuery(QUERY_ME);


//   const userData = data?.me || [];

//   console.log(userData);
//   // const [state, dispatch] = useAccountReducer({
//   //   isLoggedIn: false,
//   //   userName: 'admin',
//   // });

//   return (
//     // <Provider  value={{ currentUser: "currentUser" }} {...props} />
//     <Provider  value={{ ...userData }} {...props} />
//     // <Provider  value={{...userData}} />

    
    
//   );
// };
// const useUserContext = () => useContext(UserContext);
// export { UserProvider, useUserContext };
