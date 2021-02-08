import Weather from "./Weather"

const Country = ({country}) =>{
  
    const {name, capital, population, languages, flag} = country

    return(
        <section>
            <h2>{name}</h2>
            <p>capital {capital}</p>
            <p>population {population}</p>
            <h3>languages</h3>
            
            <ul>
                {                
                    languages.map(lang =>{                        
                        return <li key={lang.name}>{lang.name}</li>
                    })
                }
            </ul>
            <img src={flag} alt={`Flag of ${name}`}/>            
        </section>
    )
}

const Countries = ({countriesToShow, setFilterCountries}) => {

    const handleClick = (country) =>{ 
        setFilterCountries(country.toLowerCase())
    }

    if(countriesToShow.length > 10){        
        return <p>Too many matches, specify another filter</p>
    }

    if(countriesToShow.length === 1){
        return (
            <>
                <Country country={countriesToShow[0]} />
                <Weather city={countriesToShow[0].capital}/>
            </>
        )
    }

    return(
        <>
            {                   
                countriesToShow.map(country => {
                    return (
                        <div key={country.name}>
                            {country.name}
                            <button 
                                onClick={() => handleClick(country.name)}
                            >show</button>
                        </div>
                    )
                })                
            }     
        </>
    )

}

export default Countries
