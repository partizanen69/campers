import { FC } from 'react';
import { CatalogStyled } from './Catalog.styled';
import { CamperList } from './camper-list/CamperList';
import { CamperDetailsModal } from './camper-details-modal/CamperDetailsModal';
import { useSelector } from 'react-redux';
import { selectCamperSelectedForModal } from '../../store/selectors';

const Catalog: FC = () => {
  const camperSelectedForModal = useSelector(selectCamperSelectedForModal);

  return (
    <CatalogStyled>
      <div className="sidebar"></div>
      <CamperList />
      {camperSelectedForModal && <CamperDetailsModal />}
    </CatalogStyled>
  );
};

export default Catalog;
