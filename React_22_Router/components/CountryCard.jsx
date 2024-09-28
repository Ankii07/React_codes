import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard({ name, flag, population, region, capital }) {
  return (
    // to have sigle page loading using link tag offered by react-router- dom
    <Link className="country-card" to={`/Country?name=${name}`}>
      <img src={flag} alt={name + ' Flag'} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
      </div>
    </Link>
  )
}