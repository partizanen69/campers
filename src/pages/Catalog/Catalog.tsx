import { FC, useCallback } from 'react';
import Campers from '../../components/Campers/campers';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { fetchInitialCampers, fetchMoreCampers } from '../../store/operations';

const Catalog: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const fetchInitialCampersFunc = useCallback(() => {
    dispatch(fetchInitialCampers());
  }, [dispatch]);

  const fetchMoreCampersFunc = useCallback(
    ({ page }: { page: number }) => {
      dispatch(fetchMoreCampers({ page }));
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

export default Catalog;
