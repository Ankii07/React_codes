// shift ctrl l se wh word jha bhi aaya pure code mai wh select ho jayega

import React, { useEffect, useState } from 'react'
import './CountryDetail.css'

export default function CountryDetail() {
  const countryName = new URLSearchParams(location.search).get('name')
// setting an empty object as a initial state
  const [countryData, setCountryData] = useState(null)
  console.log(countryName);
  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then(res => res.json())
    .then(([data]) =>{
      console.log(data)
      setCountryData({
        name: data.name.common,
        nativeName: Object.values(data.name.nativeName)[0].common,
        population: data.population,
        region: data.region,
        Sub_Region:data.subregion,
        Capital: data.capital,
        Top_Level_Domain: data.tld,
        Currencies:Object.values(data.currencies)
        .map((currency)=> currency.name)
        .join(', '),
        Languages:Object.values(data.languages).join(', '),
        flag: data.flags.svg,
        // Border_Countries:
      })
    })

  },[])
  return (
  //  country data aane ke baad run ho
  // shimmer effect
   countryData === null ? (
    'loading....'
   ) :(  
    <main>
  <div className="country-details-container">
    <span className="back-button">
      <i className="fa-solid fa-arrow-left" />
      &nbsp; Back
    </span>
    <div className="country-details">
      <img src={countryData.flag} alt={`${countryData.name} flag`} />
      <div className="details-text-container">
        <h1>{countryData.name}</h1>
        <div className="details-text">
          <p>
            <b>Native Name: {countryData.nativeName} </b>
            <span className="native-name" />
          </p>
          <p>
            <b>Population: {(countryData.population).toLocaleString('en-IN')}</b>
            <span className="population" />
          </p>
          <p>
            <b>Region: {countryData.region} </b>
            <span className="region" />
          </p>
          <p>
            <b>Sub Region: {countryData.Sub_Region} </b>
            <span className="sub-region" />
          </p>
          <p>
            <b>Capital: {countryData.Capital.join(' ')} </b>
            <span className="capital" />
          </p>
          <p>
            <b>Top Level Domain: {countryData.Top_Level_Domain}  </b>
            <span className="top-level-domain" />
          </p>
          <p>
            <b>Currencies: {countryData.Currencies}  </b>
            <span className="currencies" />
          </p>
          <p>
            <b>Languages: {countryData.Languages} </b>
            <span className="languages" />
          </p>
        </div>
        <div className="border-countries">
          <b>Border Countries: </b>&nbsp;
        </div>
      </div>
    </div>
  </div>
</main>)

  )
}
