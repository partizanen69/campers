import { FC } from 'react';
import { Camper } from '../../../../store/campersSlice';
import { CamperCardStyled } from './CamperCard.styled';
import { useDispatch } from 'react-redux';
import { setCamperSelectedForModal } from '../../../../store/catalogPageSlice';
import { Reviews } from '../../../../components/Reviews/Reviews';
import { Location } from '../../../../components/Location/Location';
import { Price } from '../../../../components/Price/Price';
import { CamperPhoto } from '../../../../components/CamperPhoto/CamperPhoto';
import { CamperFeatures } from '../../../../components/CamperFeatures/CamperFeatures';

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
            <div className="camper-add-favorite">
              {/* TODO: move it somewhere */}
              <svg
                width="25"
                height="22"
                viewBox="0 0 25 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3401 3.60999C20.8294 3.099 20.2229 2.69364 19.5555 2.41708C18.888 2.14052 18.1726 1.99817 17.4501 1.99817C16.7276 1.99817 16.0122 2.14052 15.3448 2.41708C14.6773 2.69364 14.0709 3.099 13.5601 3.60999L12.5001 4.66999L11.4401 3.60999C10.4084 2.5783 9.00915 1.9987 7.55012 1.9987C6.09108 1.9987 4.69181 2.5783 3.66012 3.60999C2.62843 4.64169 2.04883 6.04096 2.04883 7.49999C2.04883 8.95903 2.62843 10.3583 3.66012 11.39L4.72012 12.45L12.5001 20.23L20.2801 12.45L21.3401 11.39C21.8511 10.8792 22.2565 10.2728 22.533 9.60535C22.8096 8.93789 22.9519 8.22248 22.9519 7.49999C22.9519 6.77751 22.8096 6.0621 22.533 5.39464C22.2565 4.72718 21.8511 4.12075 21.3401 3.60999Z"
                  stroke="#101828"
                  stroke-width="2.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
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
