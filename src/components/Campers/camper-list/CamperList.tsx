import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCampers,
  selectIsInitialCampersLoading,
  selectIsLoadingMore,
  selectIsMoreDataToFetch,
  selectNextPage,
} from '../../../store/selectors';
import {
  CamperListStyled,
  CamperListWrap,
  LoadMoreWrap,
} from './CamperList.styled';
import { CamperCard } from './camper-card/CamperCard';
import { FullContainerLoader, Loader } from '../../Loader/Loader';

export const CamperList: FC<{
  fetchInitialCampersFunc: () => void;
  fetchMoreCampersFunc: (params: { page: number }) => void;
}> = ({ fetchInitialCampersFunc, fetchMoreCampersFunc }) => {
  const campers = useSelector(selectCampers);
  const nextPage = useSelector(selectNextPage);
  const isMoreDataToFetch = useSelector(selectIsMoreDataToFetch);
  const isInitialLoading = useSelector(selectIsInitialCampersLoading);
  const isLoadingMore = useSelector(selectIsLoadingMore);

  useEffect(() => {
    fetchInitialCampersFunc();
  }, [fetchInitialCampersFunc]);

  console.log('isInitialLoading', isInitialLoading);
  return (
    <CamperListWrap className="campers-list-wrap">
      {isInitialLoading ? (
        <FullContainerLoader />
      ) : (
        <>
          {campers && campers.length > 0 && (
            <CamperListStyled className="camper-list">
              {campers.map(camper => (
                <CamperCard key={camper._id} camper={camper} />
              ))}
            </CamperListStyled>
          )}

          {isMoreDataToFetch && (
            <LoadMoreWrap>
              {isLoadingMore ? (
                <Loader />
              ) : (
                <button
                  className="load-more-btn"
                  onClick={() => {
                    fetchMoreCampersFunc({ page: nextPage });
                  }}
                >
                  Load more
                </button>
              )}
            </LoadMoreWrap>
          )}
        </>
      )}
    </CamperListWrap>
  );
};
