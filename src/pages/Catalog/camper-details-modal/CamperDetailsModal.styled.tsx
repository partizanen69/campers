import styled from 'styled-components';

export const CamperDetailsModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 18, 19, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  // hide scroll bar
  .camper-details-modal::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  .camper-details-modal {
    width: 982px;
    height: 720px;
    padding: 40px;
    display: flex;
    gap: 24px;
    flex-direction: column;
    border-radius: 20px;
    background-color: #ffffff;
    overflow-y: scroll;
    // hide scroll bar
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    .modal-header {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .modal-header-top {
        display: flex;

        .name {
          flex: 1 1 auto;

          font-family: Inter;
          font-size: 24px;
          font-weight: 600;
          line-height: 30px;
          text-align: left;
          color: #101828;
        }

        .close-icon-wrap {
          flex: 0 1 auto;
          cursor: pointer;
        }
      }
      .modal-header-bottom {
        display: flex;
        gap: 16px;
        flex-direction: column;

        .reviews-location {
          display: flex;
          gap: 16px;
        }
      }
    }

    .modal-gallery {
      display: flex;
      gap: 16px;
    }

    .modal-description-features-reviews {
      display: flex;
      flex-direction: column;
      gap: 44px;
    }
  }
`;
