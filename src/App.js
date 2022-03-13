import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./Components/Navbar";
// import MainComponent from "./Components/Main";
import Footer from "./Components/Footer";
import HeroComponent from './Components/Hero';
import MainBody from './Components/MainBody';
import Statistics from './Components/Statistics';

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <HeroComponent/>
      <MainBody/>
      <Statistics/>
      <Footer/>
    </div>
  );
}

export default App;
