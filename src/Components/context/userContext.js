import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext({})

export const UserProvider = props => {
  const [user, setUser] = useState({ userName: "", password: "" })

  const [isLoggedIn, setIsLoggedIn ] = useState( false )

  useEffect(() => {
    if (user.userName !== "" && user.password !== "") {
      let apiResponse = (user.userName === "ziad" && user.password === "123");
      if (apiResponse === true) {
        setIsLoggedIn(true);
      }
      else {
        setIsLoggedIn(false);
      }
    }
  }, [user,isLoggedIn])


  return (
    <UserContext.Provider value={[user, setUser, isLoggedIn, setIsLoggedIn ]}>
      {props.children}
    </UserContext.Provider>
  )
}
