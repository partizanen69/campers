import { FC, useMemo } from 'react';
import { Camper } from '../../store/campersSlice';
import { ReviewsStyled } from './Reviews.styled';

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
      <div className="star">
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z"
            fill="#FFC531"
            stroke="#FFC531"
            stroke-width="1.2"
          />
        </svg>
      </div>
      <div className="rating">
        {Math.round(avgRating * 10) / 10} ({reviewsString})
      </div>
    </ReviewsStyled>
  );
};
