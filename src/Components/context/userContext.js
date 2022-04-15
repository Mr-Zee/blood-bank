import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext({})

export const UserProvider = props => {
  const [user, setUser] = useState({ userName: "", password: "" })

  const [isLoggedIn, setIsLoggedIn ] = useState( false )

  useEffect(() => {
    if (user.userName !== "" && user.password !== "") {
      console.log("authenticating user API");
      let apiResponse = (user.userName === "ziad" && user.password === "123");
      console.log(apiResponse);
      if (apiResponse === true) {
        console.log("Login success");
        setIsLoggedIn(true);
      }
      else {
        console.log("Login failed");
        setIsLoggedIn(false);
      }
    }
  }, [user,isLoggedIn])


  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  )
}
