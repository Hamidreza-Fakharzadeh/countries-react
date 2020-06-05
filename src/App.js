import React from 'react';
import './App.css';
import './grid.css';
import countriesAll from'./countriesAll.json'
import Search from './Search';

function App() {
  return (
    <div className="App container">
      <div className="row">
        <nav className="nav-country lg-col-12">
          <div className="title">Where in the world</div>
          <div>Dark mode</div>
        </nav>
        <Search results={countriesAll}/>
        
      
      </div>
     
    </div>
  );
}

export default App;
