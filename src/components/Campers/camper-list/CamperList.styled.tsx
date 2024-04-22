import styled from 'styled-components';

export const CamperListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  flex: 1 1 auto;
`;

export const CamperListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1 1 auto;
`;

export const LoadMoreWrap = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: center;

  .load-more-btn {
    padding: 16px 32px 16px 32px;
    border-radius: 200px;
    border: 1px solid #47546733;

    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.005em;
    color: #101828;

    &:hover {
      border: 1px solid #e44848;
    }
  }
`;
