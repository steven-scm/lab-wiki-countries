// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import countries from "./countries.json";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} >
          <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />
        </Route>
      </Routes>

    </div >
  );
}

export default App;
