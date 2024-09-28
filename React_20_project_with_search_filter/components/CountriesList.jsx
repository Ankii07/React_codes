import { useState } from 'react';
import data from '../data'
import CountryCard from './CountryCard';

export default function CountriesList({query}) {
  // console.log(data);
  // 
  //yh ek function hai jo ki ek array return krega un sab country name ke sath jo ki india naam ko include krta hai
  const filteredCounteries = data.filter((country)=> country.name.common.toLowerCase().includes('india'))
  console.log(filteredCounteries)
   
  // hum kisi bhi string ke andr yh check krenge ki wh empty string include krta hai ki nhi to humesa true rhega
  // 'ankit'.includes('') //true rhega
  const array = data.filter((country)=> country.name.common.toLowerCase().includes(query)).map((country)=>{
    // console.log(country)
    return <CountryCard 
    key = {country.name.common}
    name={country.name.common} 
    flag = {country.flags.svg} 
    population = {country.population} 
    region = {country.region}
    capital = {country.capital?.[0]}
    />
  })
  // console.log(array);
  return (
    <>
    <div className='countries-container'>
    {
      array
    }
    </div>
    </>
  )
}
