import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./Components/Navbar";
import MainComponent from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <MainComponent/>
      <Footer/>
    </div>
  );
}

export default App;
