import React from 'react'

const TypeFilter = ({ onTypeChange }) => {
  const pokemonTypes = [
    'Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting',
    'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost',
    'Dragon', 'Dark', 'Steel', 'Fairy'
  ]

  const handleChange = (e) => {
    onTypeChange(e.target.value)
  }

  // Define color classes for each type
  const typeColors = {
    normal: 'bg-gray-300',
    fire: 'bg-red-500 text-white',
    water: 'bg-blue-500 text-white',
    electric: 'bg-yellow-400',
    grass: 'bg-green-500 text-white',
    ice: 'bg-blue-200',
    fighting: 'bg-red-700 text-white',
    poison: 'bg-purple-500 text-white',
    ground: 'bg-yellow-600 text-white',
    flying: 'bg-indigo-300',
    psychic: 'bg-pink-500 text-white',
    bug: 'bg-green-400',
    rock: 'bg-yellow-800 text-white',
    ghost: 'bg-purple-700 text-white',
    dragon: 'bg-indigo-700 text-white',
    dark: 'bg-gray-800 text-white',
    steel: 'bg-gray-400',
    fairy: 'bg-pink-300'
  }

  return (
    <div className="w-full md:w-1/4">
      <select
        className="w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
        onChange={handleChange}
        defaultValue=""
      >
        <option value="">All Types</option>
        {pokemonTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TypeFilter 