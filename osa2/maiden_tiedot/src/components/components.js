const Search = ( {value, handleChange} ) => {
    return(
        <div>
            Find countries: <input
            value={value}
            onChange={handleChange}
            />
        </div>
    )
}

const Single = ( props ) => {
    const filter = props.filter
    const name = filter[0].name.common
    const capital = filter[0].capital
    const area = filter[0].area
    const languages = filter[0].languages
    const image = filter[0].flags.png
    return(
    <>
    <h1>{name}</h1>
    <h3>capital {capital}</h3>
    <h3>area {area}</h3>
    <h3>Languages</h3>
    <ul>
        {Object.values(languages).map((value, index) => (
        <li key={index}>{value}</li>
        ))}
    </ul>
    <img className="flag" src={image} alt=''/>
    <h3>Weather in {capital}</h3>
  
    </>
    )
}

const Filter = ( {value, countries, weather, handleButton} ) => {
    const filter = countries.filter((country) =>
    country.name.common.toLocaleLowerCase().includes(value.toLocaleLowerCase()
    ))
    if (filter.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
    else if (filter.length === 1 ) {
        return Single({filter, weather})
    }
    return (
        <ul>
            {filter.map((country) => (
            <li key={country.name.common}>{country.name.common}
            <button onClick={() => handleButton(country) }>show</button>
            </li>
            ))}
        </ul>
    )
}

const objects = {
    Search,
    Filter,
    Single
}

export default objects