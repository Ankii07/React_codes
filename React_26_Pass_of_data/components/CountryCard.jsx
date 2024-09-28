import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard({ name, flag, population, region, capital,data }) {
  return (
    // jo bhi data pass krne ki jgh hoti hai hum link pe lgate hai
    // jb hum link pr khuch bhi krke pass krte hai to jis page pr jata hai us page ke upr data ko acess kr skte hai
    // jiske liye ract router ek hook pass krta hai jiska naam hai uselocation

    // state mai hum khuch bhi pass kr skte hai chahe to data pass kr skte hai ya pura ka pura object
    // jb object pass krna ho to simply ek braces use krke nhi send kr skte balki phla braces to javascript code ke liye hoga
    // aur dusra braces hoga object ke liye

    // state mai hum wh sari values pass krwa skte hai jo ki humne courtry card mai as a prop pass krwaya hua hai na to direct pura pura data jo fetch kiya hai
    // wh bhi pass krwa skte hai

  //  yha pe ek case yh hai ki jb user home page se jayega tabhi data yha se wha jayega due to link
  // yhi age direct chla gya using the url data pass nhi hoga us case mai hume fetch hi krna hoga
    <Link className="country-card" to={`/${name}`} state={data}>
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
