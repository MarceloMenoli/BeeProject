import React, { useLayoutEffect, useState } from 'react';

import CardPokemon from '~/components/CardPokemon';

import { Pokeball } from '~/assets/patterns';

import { Container, LinkButton, Pokemons, TitleWrapper } from './styles';

interface PokemonProps {
  id: string;
  specie: string;
}

const FavoritePage: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  // Carrega a lista de pokemons favoritos inicial de pokémons
  const getFavoritePokemons = () => {
    const storedFavoritesString = localStorage.getItem('favorites');
    const storedFavorites =
      storedFavoritesString !== null ? JSON.parse(storedFavoritesString) : [];
    setPokemons(storedFavorites);
  };

  useLayoutEffect(() => {
    getFavoritePokemons();
  }, []);

  return (
    <Container>
      <Pokeball />
      <TitleWrapper>
        <h1>Pokédex</h1>
        <LinkButton to={"/"}>Home</LinkButton>
      </TitleWrapper>

      <Pokemons>
        {pokemons?.map(pokemon => (
          <CardPokemon key={pokemon.id} name={pokemon.specie} />
        ))}
      </Pokemons>
    </Container>
  );
};

export default FavoritePage;
