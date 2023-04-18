import React from 'react';
import { Button, HeartFilled, HeartOutlined } from './styles';



interface Props {
  isFavorite: boolean;
  onClick?: () => void;
}

export const FavoriteButton = ({ isFavorite, onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      {isFavorite ? <HeartFilled /> : <HeartOutlined />}
    </Button>
  );
};

