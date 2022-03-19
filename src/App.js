import React from 'react';
import './App.css';
import './login.css';
import Login from './Components/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Landing from './Components/landing';
import Dash from './Components/login/Dashboard';
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
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dash />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
