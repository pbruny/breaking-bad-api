import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './components/Header'
import Character from './components/Character'
import Search from './components/Search'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState((true))
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(response)
      setIsLoading(false)
    }

    fetchData()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(query) => setQuery(query)} />
      <Character isLoading={isLoading} items={items.data} />
    </div>
  );
}

export default App;
