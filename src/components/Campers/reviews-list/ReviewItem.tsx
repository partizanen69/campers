import { FC } from 'react';
import { Review } from '../../../store/campersSlice';
import { ReviewItemStyled } from './ReviewsList.styled';
import { Star } from '../../Star/Star';

export const ReviewItem: FC<{
  reviewItem: Review;
}> = ({ reviewItem }) => {
  return (
    <ReviewItemStyled>
      <div className="review-header">
        <div className="review-header-letter">
          <span>{reviewItem.reviewer_name[0]}</span>
        </div>
        <div className="review-header-name-rating">
          <div className="review-header-name">{reviewItem.reviewer_name}</div>
          <div className="review-header-rating">
            {Array(reviewItem.reviewer_rating)
              .fill(null)
              .map(() => (
                <Star />
              ))}
          </div>
        </div>
      </div>
      <div className="review-text">{reviewItem.comment}</div>
    </ReviewItemStyled>
  );
};
