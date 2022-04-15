import React from 'react';
import './App.css';
import './login.css';
import Login from './Components/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./Components/Navbar";
import Landing from './Components/landing';
import Dash from './Components/login/Dashboard';
import Profiles from './Components/login/Profiles';
import Registration from './Components/login/RegForm';
import ProfView from './Components/login/ProfView';
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
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dash />} />
            <Route path="profiles" element={<Profiles />} />
            <Route path="registration" element={<Registration />} />
            <Route path="profile/:id" element={<ProfView />} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
