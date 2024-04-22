import styled from 'styled-components';

export const ReviewListStyled = styled.div`
  width: 430px;
  height: 532px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 24px;

  // hide scroll bar
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
`;

export const ReviewItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .review-header {
    display: flex;
    gap: 16px;
    align-items: center;

    .review-header-letter {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      border-radius: 60px;
      background: #f2f4f7;

      font-family: Inter;
      font-size: 24px;
      font-weight: 600;
      line-height: 30px;
      color: #e44848;
    }

    .review-header-name-rating {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .review-header-name {
        font-family: Inter;
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        color: #101828;
      }

      .review-header-rating {
        display: flex;
        gap: 4px;
      }
    }
  }

  .review-text {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #475467;
  }
`;
