import styled from 'styled-components';

export const CamperCardStyled = styled.div`
  /* width: Hug (888px) px; */
  min-height: 358px;
  max-height: 358px;
  padding: 24px;
  display: flex;
  gap: 24px;
  border-radius: 20px;
  border: 1px solid #10182833;

  .photo {
    flex: 0 0 auto;
    width: 290px;
    height: 310px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

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

        .camper-price {
          flex: 0 1 auto;
          font-family: Inter;
          font-size: 24px;
          font-weight: 600;
          line-height: 30px;
          text-align: left;
          color: #101828;
        }

        .camper-add-favorite {
          flex: 0 1 auto;
          width: 24px;
          height: 24px;
          margin-left: 10px;
        }
      }

      .bottom {
        display: flex;
        gap: 16px;

        .reviews {
          display: flex;
          gap: 4px;

          font-family: Inter;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          text-align: left;
          text-decoration: underline;
        }

        .address {
          display: flex;
          gap: 4px;

          font-family: Inter;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          text-align: left;
        }
      }
    }
  }
`;
