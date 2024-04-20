import { FC, useCallback, useEffect } from 'react';
import { CamperDetailsModalStyled } from './CamperDetailsModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setCamperSelectedForModal } from '../../../store/catalogPageSlice';
import { selectCamperSelectedForModal } from '../../../store/selectors';
import { Reviews } from '../../../components/Reviews/Reviews';
import { Location } from '../../../components/Location/Location';
import { Price } from '../../../components/Price/Price';
import { CamperPhoto } from '../../../components/CamperPhoto/CamperPhoto';
import { CamperModalTabs } from '../camper-modal-tabs/CamperModalTabs';

export const CamperDetailsModal: FC = () => {
  const dispatch = useDispatch();
  const camper = useSelector(selectCamperSelectedForModal)!;

  const closeModal = useCallback(() => {
    dispatch(setCamperSelectedForModal(null));
  }, [dispatch]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [dispatch, closeModal]);

  return (
    <CamperDetailsModalStyled
      id="modal-backdrop"
      onClick={e => {
        if ((e.target as HTMLElement).id === 'modal-backdrop') {
          closeModal();
        }
      }}
    >
      <div className="camper-details-modal">
        <div className="modal-header">
          <div className="modal-header-top">
            <div className="name">{camper.name}</div>
            <div
              className="close-icon-wrap"
              onClick={() => {
                closeModal();
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 8L8 24"
                  stroke="#101828"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 8L24 24"
                  stroke="#101828"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="modal-header-bottom">
            <div className="reviews-location">
              <Reviews reviews={camper.reviews} />
              <Location location={camper.location} />
            </div>
            <Price price={camper.price} />
          </div>
        </div>
        <div className="modal-gallery">
          {camper.gallery &&
            camper.gallery.length > 0 &&
            camper.gallery
              .slice(0, 3)
              .map(src => <CamperPhoto key={src} src={src} />)}
        </div>
        <div className="modal-description-features-reviews">
          {/* TODO: remove slice?? */}
          <div className="modal-description">
            {camper.description.slice(0, 100)}
          </div>
          <CamperModalTabs />
        </div>
      </div>
    </CamperDetailsModalStyled>
  );
};
