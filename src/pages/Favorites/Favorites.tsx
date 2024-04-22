import { FC, useCallback } from 'react';
import Campers from '../../components/Campers/campers';
import { fetchInitialCampers, fetchMoreCampers } from '../../store/operations';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';

const Favorites: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const fetchInitialCampersFunc = useCallback(() => {
    dispatch(fetchInitialCampers({ favorite: true }));
  }, [dispatch]);

  const fetchMoreCampersFunc = useCallback(
    ({ page }: { page: number }) => {
      dispatch(fetchMoreCampers({ page, favorite: true }));
    },
    [dispatch]
  );

  return (
    <Campers
      fetchInitialCampersFunc={fetchInitialCampersFunc}
      fetchMoreCampersFunc={fetchMoreCampersFunc}
    />
  );
};

export default Favorites;
