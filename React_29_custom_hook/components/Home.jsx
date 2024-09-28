import { useContext, useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { ThemeContext } from '../contexts/ThemeContext'
import { useWindowSize } from '../hooks/useWindowSize'
import { useTheme } from '../hooks/useTheme'

export default function Home() {
  const [query, setQuery] = useState('')
  // hum chahte hai useContext ka bhi ek hook bnakr use kre 
  // const [isDark] = useContext(ThemeContext)
  const [isDark]= useTheme()

  // ek state variable create kr lete hai jisme winderinnerwidth
  // agr width ke saath height bhi set krni ho to as state varible to ek object pass krwa skte hai
  // const [windowSize, setWindowSize] = useState({Width: window.innerWidth, Height: window.innerHeight})
  //hook create kiya hai jisse ki hume pata chle ki window ki innerwidth milti rhi
  // useEffect(()=>{
  //   window.addEventListener('resize',()=>{
  //     setwidth(window.innerWidth);
  //   })
  // },[])

  // ab yhi agr hum dimension wali feature countryDetail wale pe mageai dikhana chahe to pura ka pura code us file mai copy krna hoga 
  // jo ki bilkul shi nhi hai
  // iske liye hum ek hook bnayenge jo ki hum wha directly use kr skte hai

  // useEffect(()=>{
  //   window.addEventListener('resize',()=>{
  //     setWindowSize({Width: window.innerWidth, Height: window.innerHeight});
  //   })
  // },[])
  // yha pe function ko import krke use kr rhe hai
  // const windowSize = useWindowSize()
  // console.log(windowSize);
  return (
    <main className={`${isDark? 'dark': ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {/* <h1 style={{textAlign: 'center'}}>{`${windowSize.Width} X ${windowSize.Height} dimension`}</h1> */}
      {query === 'unmount' ? '' : <CountriesList query={query} />}
    </main>
  )
}
