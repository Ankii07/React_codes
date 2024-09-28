import { useContext, useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Home() {
  const [query, setQuery] = useState('')
  // const [isDark] = useOutletContext()
  // yha pe themeContext ko import krke use kr rhe hai
  // aur yha pe basically ek object aayega jisme ki bhut si properties hogi
  // Themecontext ka use krne ke ek hook provided hai jiska naam hi useContext

  // createContext mai likh kr jo pass krenge whi yha aayega aur console log ho jayega
  // ThemeContext provider mai jo value pass kiye hai ab wh pass hoga createContext mai jo likh rkha hai wh override ho jayega
  // const a = useContext(ThemeContext)
  const [isDark] = useContext(ThemeContext)
  console.log(isDark);
  return (
    <main className={`${isDark? 'dark': ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {query === 'unmount' ? '' : <CountriesList query={query} />}
    </main>
  )
}
