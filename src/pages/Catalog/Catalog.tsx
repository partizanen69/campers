import { FC } from 'react';
import { CatalogStyled } from './Catalog.styled';
import { CamperList } from './camper-list/CamperList';

const Catalog: FC = () => {
  return (
    <CatalogStyled>
      <div className="sidebar"></div>
      <CamperList />
    </CatalogStyled>
  );
};

export default Catalog;
