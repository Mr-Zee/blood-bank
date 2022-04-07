import { createContext, useContext, useState } from "react";

export const userContext = createContext({
    user: null,
    logIn: () => { },
    logout: () => { },
})

const USER = { name: "Guest", isGuestUser: true };

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(USER);
    function logIn(username){
        setUser({ isGuestUser:false, name: username });
    }
    function logOut(){
        setUser(USER);
    }

    return (
        <userContext.Provider value={{ user, logIn, logOut }}>
            {children}
        </userContext.Provider>
    )
}

export function useUserContext() {
    const { user, logIn, logout } = useContext(userContext);

    return (user, logIn, logout);
}
