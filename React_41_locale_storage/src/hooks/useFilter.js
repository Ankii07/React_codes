import { useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export function useFilter(dataList, callback) {
  const [query, setQuery] = useLocalStorage('query','')

  const filteredData = dataList.filter((data) =>
    callback(data).toLowerCase().includes(query)
  )

  return [filteredData, setQuery]
}
