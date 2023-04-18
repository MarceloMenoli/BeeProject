import { useState } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<any[]>([]);

  function addFavorite(favPokemon: any) {
    const storedFavoritesString = localStorage.getItem('favorites');
    const storedFavorites =
      storedFavoritesString !== null ? JSON.parse(storedFavoritesString) : [];

    localStorage.setItem(
      'favorites',
      JSON.stringify([...storedFavorites, favPokemon]),
    );
    setFavorites([...storedFavorites, favPokemon]);
  }

  function removeFavorite(id: string | number) {
    const newFavorites = favorites.filter(favorite => favorite.id !== id);

    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  function isFavorite(id: string | number) {
    const storedFavoritesString = localStorage.getItem('favorites');
    const storedFavorites =
      storedFavoritesString !== null ? JSON.parse(storedFavoritesString) : [];
    return storedFavorites.some((favorite: any) => favorite.id === id);
  }

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
