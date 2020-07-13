import React from 'react'
import CharacterItem from '../CharacterItem'
import spinner from '../../img/spinner.gif'

const Character = ({ items, isLoading }) => {
  return isLoading ? (<img className="spinner" src={spinner} alt="waiting spinner" />) : (<section className="cards" >{items.map(character => <CharacterItem key={character.char_id} item={character}></CharacterItem>)}</section>)
}

export default Character