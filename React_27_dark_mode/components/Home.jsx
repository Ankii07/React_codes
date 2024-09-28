import { useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { useOutletContext } from 'react-router-dom'

export default function Home() {
  const [query, setQuery] = useState('')
  // useOutletcontext ek hook hai jo react router se provided hai aur call krenge to theme ka access mil jayega
  const [isDark] = useOutletContext()
  return (
    <main className={`${isDark ? 'dark':''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {query === 'unmount' ? '' : <CountriesList query={query}/>}
    </main>
  )
}
