import { createContext, useContext, useState } from "react";

export const userContext = createContext({
  user: null,
  userlogIn: () => {},
  logOut: () => {},
});

// const USER = { name: "Guest", isGuestUser: true };

export function UserContextProvider({ children }) {
//   const [setUser] = useState(USER);
  function userlogIn() {
      console.log("abc");
    // setUser({ isGuestUser: false, name: username });
  }
  function logOut() {
    // setUser(USER);
  }
  return (
    <userContext.Provider value={{ userlogIn, logOut }}>
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  const { user, userlogIn, logOut } = useContext(userContext);

  return { user, userlogIn, logOut };
}