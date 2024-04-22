import { FC } from 'react';
import {
  Camper,
  setCamperSelectedForModal,
} from '../../../../store/campersSlice';
import { CamperCardStyled } from './CamperCard.styled';
import { useDispatch } from 'react-redux';
import { AddFavoriteBtn } from '../add-favorite-btn/AddFavoriteBtn';
import { CamperPhoto } from '../../../CamperPhoto/CamperPhoto';
import { Price } from '../../../Price/Price';
import { Reviews } from '../../../Reviews/Reviews';
import { Location } from '../../../Location/Location';
import { CamperFeatures } from '../../../CamperFeatures/CamperFeatures';

export const CamperCard: FC<{
  camper: Camper;
}> = ({ camper }) => {
  const dispatch = useDispatch();

  return (
    <CamperCardStyled>
      <CamperPhoto src={camper.gallery[0]} />
      <div className="camper-details">
        <div className="camper-details-header">
          <div className="top">
            <div className="camper-name">{camper.name}</div>
            <Price price={camper.price} />
            <AddFavoriteBtn camper={camper} />
          </div>
          <div className="bottom">
            <Reviews reviews={camper.reviews} />
            <Location location={camper.location} />
          </div>
        </div>
        <div className="camper-details-description">
          {camper.description.slice(0, 60)}...
        </div>
        <CamperFeatures camper={camper} />
        <div className="camper-details-showmore">
          <button
            type="button"
            onClick={() => dispatch(setCamperSelectedForModal(camper))}
          >
            Show more
          </button>
        </div>
      </div>
    </CamperCardStyled>
  );
};
