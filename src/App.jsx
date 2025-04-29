import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import React from 'react'
import PokemonList from './components/PokemonList'
import SearchBar from './components/SearchBar'
import TypeFilter from './components/TypeFilter'
import Header from './components/Header'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')
        const results = response.data.results

        const pokemonData = await Promise.all(
          results.map(async (pokemon) => {
            const detailResponse = await axios.get(pokemon.url)
            return {
              id: detailResponse.data.id,
              name: detailResponse.data.name,
              image: detailResponse.data.sprites.front_default,
              types: detailResponse.data.types.map(type => type.type.name)
            }
          })
        )

        setPokemon(pokemonData)
        setFilteredPokemon(pokemonData)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch Pokémon data. Please try again later.')
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [])

  useEffect(() => {
    if (pokemon.length > 0) {
      let results = pokemon

      // Filter by search term
      if (searchTerm) {
        results = results.filter(p => 
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }

      // Filter by type
      if (selectedType) {
        results = results.filter(p => 
          p.types.includes(selectedType.toLowerCase())
        )
      }

      setFilteredPokemon(results)
    }
  }, [searchTerm, selectedType, pokemon])

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const handleTypeChange = (type) => {
    setSelectedType(type)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <SearchBar onSearch={handleSearch} />
          <TypeFilter onTypeChange={handleTypeChange} />
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-2xl font-bold text-gray-500">Loading Pokémon...</div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        ) : filteredPokemon.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No Pokémon found matching your criteria.
          </div>
        ) : (
          <PokemonList pokemon={filteredPokemon} />
        )}
      </main>
    </div>
  )
}

export default App
