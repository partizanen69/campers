import { FC, useState } from 'react';
import { AddFavoriteBtnStyled } from './AddFavoriteBtn.styled';
import { doUpdateCamper } from '../../../../api/campers-api';
import { Camper, updateCamper } from '../../../../store/campersSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Loader } from '../../../Loader/Loader';

export const AddFavoriteBtn: FC<{
  camper: Camper;
}> = ({ camper }) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const dispatch = useDispatch();

  const sendUpdateCamper = async () => {
    setIsUpdating(true);
    try {
      const updatedCamper = await doUpdateCamper({
        camper: {
          ...camper,
          favorite: !(camper.favorite ?? false),
        },
      });
      setIsUpdating(false);

      dispatch(updateCamper(updatedCamper));
    } catch (err) {
      console.error('Error occured while updating camper', err);
      toast.error(`Error occured while updating camper: ${err.message}`);
    }
  };

  return (
    <AddFavoriteBtnStyled className="camper-add-favorite">
      {isUpdating ? (
        <Loader width="100%" height="100%" />
      ) : (
        <svg
          width="25"
          height="22"
          viewBox="0 0 25 22"
          fill={camper.favorite ? '#E44848' : 'none'}
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            sendUpdateCamper();
          }}
        >
          <path
            d="M21.3401 3.60999C20.8294 3.099 20.2229 2.69364 19.5555 2.41708C18.888 2.14052 18.1726 1.99817 17.4501 1.99817C16.7276 1.99817 16.0122 2.14052 15.3448 2.41708C14.6773 2.69364 14.0709 3.099 13.5601 3.60999L12.5001 4.66999L11.4401 3.60999C10.4084 2.5783 9.00915 1.9987 7.55012 1.9987C6.09108 1.9987 4.69181 2.5783 3.66012 3.60999C2.62843 4.64169 2.04883 6.04096 2.04883 7.49999C2.04883 8.95903 2.62843 10.3583 3.66012 11.39L4.72012 12.45L12.5001 20.23L20.2801 12.45L21.3401 11.39C21.8511 10.8792 22.2565 10.2728 22.533 9.60535C22.8096 8.93789 22.9519 8.22248 22.9519 7.49999C22.9519 6.77751 22.8096 6.0621 22.533 5.39464C22.2565 4.72718 21.8511 4.12075 21.3401 3.60999Z"
            stroke={camper.favorite ? '#E44848' : '#101828'}
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </AddFavoriteBtnStyled>
  );
};
