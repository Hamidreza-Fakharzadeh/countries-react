import React from 'react';
import './App.css';
import './grid.css';
import countriesAll from'./countriesAll.json'

function App() {
  return (
    <div className="App container">
      <div className="row">
    
      {countriesAll.map((obj,index)=>{
        return(
          <div key={index} className="card lg-col-2">
      
            <img src={obj.flag}/>
            
            <ul>
            <li className="country-name">{obj.name}</li>
            <li>population: {obj.population}</li>
            <li>Region: {obj.region}</li>
            <li>Capital: {obj.capital}</li>
            </ul>
          </div>
        )
      })}
      
      </div>
     
    </div>
  );
}

export default App;
