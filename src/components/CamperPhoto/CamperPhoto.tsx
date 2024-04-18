import { FC } from 'react';
import { CamperPhotoStyled } from './CamperPhoto.styled';

export const CamperPhoto: FC<{
  src: string;
}> = ({ src }) => {
  return (
    <CamperPhotoStyled>
      {/* add default image here */}
      <img src={src} />
    </CamperPhotoStyled>
  );
};
