import styled from 'styled-components';

export const CamperModalTabsBarStyled = styled.div`
  display: flex;
  gap: 24px;
  height: 48px;
  border-bottom: 1px solid #10182833;

  .tab {
    height: 100%;
    cursor: pointer;

    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    color: #101828;
  }

  .tab.underline {
    position: relative;
  }

  .tab.underline:after {
    position: absolute;
    bottom: -2.5px;
    left: 0px;
    content: '';
    width: 100%;
    height: 5px;
    background: #e44848;
  }
`;

export const TabContentStyled = styled.div`
  display: flex;
  gap: 24px;

  .tab-content-details {
    width: 430px;
    height: 532px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 44px;

    // hide scroll bar
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    .vehicle-details {
      display: flex;
      flex-direction: column;
      gap: 24px;

      .vehicle-details-header {
        height: 48px;
        border-bottom: 1px solid #1018281a;

        font-family: Inter;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        text-align: left;
        color: #101828;
      }

      .vehicle-details-content {
        display: flex;
        flex-direction: column;
        gap: 14px;

        .vehicle-details-item {
          display: flex;
          justify-content: space-between;

          font-family: Inter;
          font-size: 18px;
          font-weight: 500;
          line-height: 24px;
          color: #101828;
        }
      }
    }
  }
`;
