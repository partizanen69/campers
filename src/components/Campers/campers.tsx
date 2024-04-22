import { FC, useEffect } from 'react';
import { CamperList } from './camper-list/CamperList';
import { CamperDetailsModal } from './camper-details-modal/CamperDetailsModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectCamperSelectedForModal } from '../../store/selectors';
import { setCampersStateToInitial } from '../../store/campersSlice';
import { CampersStyled } from './campers.styled';

const Campers: FC<{
  fetchInitialCampersFunc: () => void;
  fetchMoreCampersFunc: (params: { page: number }) => void;
}> = ({ fetchInitialCampersFunc, fetchMoreCampersFunc }) => {
  const camperSelectedForModal = useSelector(selectCamperSelectedForModal);

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setCampersStateToInitial());
    };
  }, [dispatch]);

  return (
    <CampersStyled className="catalog-styled">
      <div className="sidebar">
        This is a placeholder for filtering functionality which some day will be
        here...
      </div>
      <CamperList
        fetchInitialCampersFunc={fetchInitialCampersFunc}
        fetchMoreCampersFunc={fetchMoreCampersFunc}
      />
      {camperSelectedForModal && <CamperDetailsModal />}
    </CampersStyled>
  );
};

export default Campers;
