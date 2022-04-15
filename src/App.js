import './App.css';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./Components/Navbar";
import PrivateRouter from "./Components/login/PrivateRouter"
import { UserProvider } from './Components/context/userContext';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <UserProvider>
        <Router>
          <CustomNavbar />
          <PrivateRouter />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
