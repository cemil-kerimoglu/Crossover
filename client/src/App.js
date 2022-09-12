import './App.css';
import axios from "axios";
import React,{useState , useEffect} from "react";
import Country from "./components/Country"
function App() {

  const [countries, setCountries] = useState();
  setCountries(3);
  /*test*/

  axios.get()
  .then((response) => {
    console.log(response);
  setCountries(response.team.country)

  .catch((err)=> console.log(err))
  return (
   

    <div className="App">
      {countries.map((country)=>{
        <Country country={countries} key={id}/> {/*id so far undifined*/}
      })}

    </div>
  );
}

export default App;
