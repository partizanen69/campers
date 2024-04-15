import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers } from '../../../store/selectors';
import { fetchCampers } from '../../../store/operations';
import { AppDispatch } from '../../../store/store';

export const CamperList: FC = () => {
  // const { items: campers } = useSelector(selectCampers);
  const campers = useSelector(selectCampers);
  console.log('campers', campers);

  // const { filter } = useSelector(selectFilter);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return <div className="camper-list"></div>;
};
