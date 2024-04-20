import { FC } from 'react';
import { Camper } from '../../../store/campersSlice';
import { ReviewListStyled } from './ReviewsList.styled';
import { ReviewItem } from './ReviewItem';

export const ReviewsList: FC<{
  reviews: Camper['reviews'];
}> = ({ reviews }) => {
  return (
    <ReviewListStyled className="review-list-styled">
      {!reviews.length ? (
        <>No reviews at the moment</>
      ) : (
        reviews.map(reviewItem => <ReviewItem reviewItem={reviewItem} />)
      )}
    </ReviewListStyled>
  );
};
