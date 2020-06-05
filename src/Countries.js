import React from 'react';

function Countries(props) {
    return(

        props.results.map((obj,index)=> {
            return(
                <div key={index} className="card lg-col-3">
                    <img src={obj.flag} alt="non"/>
                    <ul>
                    <li className="country-name">{obj.name}</li>
                    <li>population: {obj.population}</li>
                    <li>Region: {obj.region}</li>
                    <li>Capital: {obj.capital}</li>
                    </ul>
                </div>
            )}
        )
    
    )
}

export default Countries;