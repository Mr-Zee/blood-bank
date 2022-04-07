import React from 'react';
import './App.css';
import './login.css';
import Login from './Components/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Landing from './Components/landing';
import Dash from './Components/login/Dashboard';
import Profiles from './Components/login/Profiles';
import Registration from './Components/login/RegForm';
import ProfView from './Components/login/ProfView';
import { userContext } from './Components/context/userContext';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <CustomNavbar />
        <userContext.Provider value={{}}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dash />} />
            <Route path="profiles" element={<Profiles />} />
            <Route path="registration" element={<Registration />} />
            <Route path="profile/:id" element={<ProfView />} />
          </Routes>
        </userContext.Provider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
