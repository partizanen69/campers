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
      }
    }

    .camper-details-features {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;

      .capitalize {
        text-transform: capitalize;
      }

      .category {
        border-radius: 100px;
        padding: 12px 18px 12px 18px;
        display: flex;
        gap: 8px;
        align-items: center;
        background-color: #f2f4f7;

        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        /* text-align: left; */
        color: #101828;
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
