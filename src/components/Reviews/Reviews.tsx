import { FC, useMemo } from 'react';
import { Camper } from '../../store/campersSlice';
import { ReviewsStyled } from './Reviews.styled';
import { Star } from '../Star/Star';

export const Reviews: FC<{
  reviews: Camper['reviews'];
}> = ({ reviews }) => {
  const avgRating = useMemo(
    () =>
      !reviews || !reviews.length
        ? 0
        : reviews.reduce((acc, review) => {
            return acc + (review.reviewer_rating || 0);
          }, 0) / reviews.length,
    [reviews]
  );

  const reviewsString = useMemo(
    () => `${reviews.length} Review${reviews.length > 0 ? 's' : ''}`,
    [reviews.length]
  );

  return (
    <ReviewsStyled>
      <Star />
      <div className="rating">
        {Math.round(avgRating * 10) / 10} ({reviewsString})
      </div>
    </ReviewsStyled>
  );
};
