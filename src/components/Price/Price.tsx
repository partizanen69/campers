import { FC } from 'react';
import { Camper } from '../../store/campersSlice';
import { PriceStyled } from './Price.styled';

export const Price: FC<{ price: Camper['price'] }> = ({ price }) => {
  return (
    <PriceStyled>
      {'\u20AC'}
      {price ? price : 'no price'}
    </PriceStyled>
  );
};
