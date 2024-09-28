import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData) {
  const [data, setData] = useState(initialData)
  // console.log(data);
  //hum chahte hai ki initially jo value set hai wh bhi dikhe localestorage
  //yh krne se locale storage mai dikhega initial value
   //hum chahte hai ki first time hi set ho initial data baar baar na ho iske liye ek check laga skte hai. 
  //  const existingData = localStorage.getItem(key)
   //agr existing data hai to data ko set kr do exisiting data se yh check lgaya
    //pr isse bhi dikkat hi ho jayegi aur infinite render chal jayega
    // kyuki existing data ki value rhegi hi aur yh condition humesa true hi rhegi aur data set humesa hota hi rhega
    //jiske wajah se rendering hoti rhegi  

    // yh check condition bs ek hi baar chle isiliye hum use krenge useeffect [] dependcy ke saath..
    useEffect(()=>{
      // hum ek function ko stringify nhi kr skte hai agr ek function hai to function ko call krna pdega..
      const existingData = JSON.parse(localStorage.getItem(key))
      if(existingData){
        setData(existingData)
       }
       else
      localStorage.setItem(key, JSON.stringify(initialData))
    },[])
  

  const updateLocalStorage = (newData) => {
    // kyuki hum yha pe mynum ko new data se set kr diye hai to mynum 456 se set ho gya hai to wh locale
    // storage mai whi dikhna bhi chahiye pre nhi dikhega kyuki yh hone ke baad newData set ho rha rha hai aur kyuki
    // newdata set ho rha hai to phir se yh pura component render hoga aur mynum initial data se set ho jayega kyuki wh phle is set se
    // agr chahte hai ki new data jo set kiye hai wh rhe uske liye khuch krna pdega

    // JSON.stringify((prevState) => [...prevState,4,5,6]) //output undefined jo ki error dega
    // JSON.parse('undefined') // error undefined is not valid json
    // agr function hai to use alg trah se set krna hoga normal data ki trah nhi kr skte..
    // ek call back function ki trah set krna hoga..
    if(typeof newData === 'function'){
      localStorage.setItem(key,JSON.stringify(newData(data)))
    }else{
      localStorage.setItem(key, JSON.stringify(newData))
    }
    // debugger pogram ko yhi rok dega
    // debugger
    // ek function ko stringify kr skte hai using this method
    // const myFunction = () =>{}
      // myFunction.toString() //ho gya function stringify
    setData(newData)
  }
  return [data, updateLocalStorage]
}
