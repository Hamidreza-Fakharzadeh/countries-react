import React from 'react'
import Countries from './Countries'

function Search(props) {
    const[searchTerm, setSearchTerm] = React.useState(props.results);
    const handlerEve = (e) => {
        const holderEve = 
            props.results.filter(eachCountry => 
            eachCountry.name.toLowerCase().includes(e.target.value.toLowerCase()) || 
            eachCountry.capital.toLowerCase().includes(e.target.value.toLowerCase())
                )
            
             setSearchTerm(holderEve);
        }
    return(
        <div className="row">
            <div className="lg-col-12">
                <input className="search-box lg-col-4" onChange={handlerEve} placeholder="search...">
                </input>
            </div>
            <Countries results={searchTerm}/>
        </div>
    )
}

export default Search;