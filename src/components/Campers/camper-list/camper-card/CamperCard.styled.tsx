import styled from 'styled-components';

export const CamperCardStyled = styled.div`
  min-height: 358px;
  max-height: 358px;
  padding: 24px;
  display: flex;
  gap: 24px;
  border-radius: 20px;
  border: 1px solid #10182833;

  .camper-details {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .camper-details-header {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .top {
        display: flex;
        align-items: center;

        .camper-name {
          flex: 1 1 auto;
          font-family: Inter;
          font-size: 24px;
          font-weight: 600;
          line-height: 30px;
          text-align: left;
          color: #101828;
        }
      }

      .bottom {
        display: flex;
        gap: 16px;
      }
    }

    .camper-details-showmore {
      button {
        padding: 16px 40px 16px 40px;
        border-radius: 200px;
        opacity: 0px;
        background-color: #e44848;

        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: -0.005em;
        text-align: left;
        color: #ffffff;
      }
    }
  }
`;
