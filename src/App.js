import React, { useEffect, useContext } from 'react';
import './App.css';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./Components/Navbar";
import PrivateRouter from "./Components/login/PrivateRouter"
import { UserProvider } from './Components/context/userContext';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <UserProvider>
          <CustomNavbar />
          <PrivateRouter />
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
