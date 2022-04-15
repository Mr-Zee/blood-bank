import React, { useEffect, useContext, useRef } from "react";
import Dash from './Dashboard';
import Profiles from './Profiles';
import Registration from './RegForm';
import ProfView from './ProfView';
import Login from './Login';
import Landing from '../landing';
import { UserContext } from "../context/userContext"

import {
    Routes,
    Route
} from "react-router-dom";

const PrivateRouter = () => {

    const [, , isLoggedIn] = useContext(UserContext);
    const routesRef = useRef([]);
    
    // const [routes, setRoutes] = [];

    useEffect(() => {
        if (isLoggedIn) {
            setTimeout(() => {
                
                routesRef.curret = [
                    { id: "1", path: "/", element: <Landing /> },
                    { id: "2", path: "/dashboard", element: <Dash /> },
                    { id: "3", path: "/profiles", element: <Profiles /> },
                    { id: "4", path: "/registration", element: <Registration /> },
                    { id: "5", path: "/profile/:id", element: <ProfView /> },
                ]
            },5000);

        }
        else {
            setTimeout(() => {
                
                routesRef.curret = [
                    { id: "1", path: "/", element: <Landing /> },
                    { id: "6", path: "/login", element: <Login /> },
                ]
            }, 5000);
        }


    }, [isLoggedIn])

    return (
        <>

            <Routes>{
                routesRef.current.map(item => {
                    return (
                        <Route path={item.path} element={item.element} />

                    )
                })
            }
            </Routes>
        </>
    )
}

export default PrivateRouter;