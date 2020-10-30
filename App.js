import React, { useEffect, useState } from 'react'
import { SafeAreView, FlatList, View, Image, Text } from 'react-native'

export default function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('http://pokeapi.co/api/v2/pokemon', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setPokemons(data.results)
    })
  }, [])
 
  return (
    <SafeAreView>
      <FlatList
      data={pokemons}
      keyExtractor={ (pokemon) => pokemon.name}
      contentContainerStyle={{ flexGrom: 1}}
      renderItem={PokemonShow}
      />

    </SafeAreView>
  )
}

function PokemonShow(item){
  const { name, url} = item.item
  const pokemonNumber = url.replace('http://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
  const imageUrl = 'http://pokeres.bationbot.org/images/pokemon/'+pokemonNumber+'.png'

  return(
    <View style ={{flexDirection: 'row'}}>
      <Image/>
  <Text>{name}</Text>
    </View>
  )
}