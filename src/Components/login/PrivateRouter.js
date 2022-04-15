import React from "react";
import Dash from './Dashboard';
import Profiles from './Profiles';
import Registration from './RegForm';
import ProfView from './ProfView';
import Login from './Login';
import Landing from '../landing';
import { UserContext } from "../context/userContext"
import { useContext } from "react";


import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

const PrivateRouter = () => {

    const [, , isLoggedIn] = useContext(UserContext);

    return (
        <>

            <Routes>
                <Route path="/" element={<Landing />} />
                
                {
                    isLoggedIn ?
                        <>
                            <Route path="dashboard" element={<Dash />} />
                            <Route path="profiles" element={<Profiles />} />
                            <Route path="registration" element={<Registration />} />
                            <Route path="profile/:id" element={<ProfView />} />
                        </> : <Route path="login" element={<Login />} />
                }
                <Route path="*" element={<Landing />} />
            </Routes>
        </>
    )
}

export default PrivateRouter;