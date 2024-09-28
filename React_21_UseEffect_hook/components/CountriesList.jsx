import { useEffect, useState } from 'react';
// import data from '../data'
import CountryCard from './CountryCard';

export default function CountriesList({query}) {
  const [data, setCounteriesData] = useState([])
  const [count, setCount] = useState(0)
  // fetch('https://restcountries.com/v3.1/all')
  // .then((res)=>res.json())
  // .then((countriesData)=>{ 
  //   //  data = countriesData;
  //   // console.log(data);
  //  yha pe ek dikkat yh hai ki ek baar normally render to hota hai hi pr jb set hota hai
  // ya update hota hai to ek baar phir render ho jata hai ek cycle sa bn jata hai jiske wajh se baar request jaati rhti hai
  //   setCounteriesData(countriesData)
  // })
  
  // useeffect ke andr wala code sirf ek hi baar run krega usme jb hum ek empty array pass kre
  // agr empty array naah pass kre to baar baar run hoga
  // use effect ka mainly use to yh hota hai ki fetch request ek hi baar ho jb empty array pass krte hai as a dependency array
  // aur dusra use useeffect ka hota hai humare state variable ke changes ho dekhne ke liye
  // aur teesra yh hota hai hum request krwana chahte ho jo koi element humare page se nikl rha ho
  // useEffect(()=>{
  //   fetch('https://restcountries.com/v3.1/all')
  //   .then((res)=>res.json())
  //   .then((countriesData)=>{ 
  //     //  data = countriesData;
  //     // console.log(data);
  //     setCounteriesData(countriesData)
  //   })  
  // }, [])
  
  // agr humari value previous state pe depend hoti hai to call back function ka use krke update krna chahiye
  
  // if(data.length === 0){
  //    fetch('https://restcountries.com/v3.1/all')
  // .then((res)=>res.json())
  // .then((countriesData)=>{ 
  //   //  data = countriesData;
  //   // console.log(data);
  //   setCounteriesData(countriesData)
  // })  
  // }
   
  // hum chahe to 2 2 useeffect likh skte hai
  // ab yha pe yh bol rhe hai ki jb jb count ya data change ho tb tb request jaye
  //
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((res)=>res.json())
    .then((countriesData)=>{ 
      //  data = countriesData;
      // console.log(data);
      setCounteriesData(countriesData)
    })  
    
    // unmounting example
    // agr humara component jb bhi unmount ho to usse related sara code chala jaye
    const intervalId = setInterval(()=>{
       console.log('running countriesList component');
    }, [1000])
     
    // console.log(intervalId);

    return()=>{
      clearInterval(intervalId)
    }
  }, [count,data])

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
     <h1>{count}</h1>
     <button onClick={()=>setCount(count+1)}>Increase Count</button>
    <div className='countries-container'>
       {/* varible ko curly braces mai likhkr return krte hai */}
      {array}
    </div>
    </>
  )
}
