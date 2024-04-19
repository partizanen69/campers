import styled from 'styled-components';

export const BookingFormStyled = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 0 0 auto;
  border-radius: 10px;
  border: 1px solid #10182833;
  width: 448px;
  height: 532px;

  .booking-form-header {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .booking-header-top {
      font-family: Inter;
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      text-align: left;
      color: #101828;
    }

    .booking-header-bottom {
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
      color: #475467;
    }
  }

  .booking-form-fields {
    display: flex;
    flex-direction: column;
    gap: 14px;

    input,
    textarea {
      outline: none;
      border: none;
    }

    .field {
      padding: 18px;
      border-radius: 10px;
      background-color: #f7f7f7;
    }

    input:focus,
    textarea:focus {
      outline-style: solid;
      outline-color: rgb(208, 206, 206, 0.5);
    }

    .calendar-input-wrap {
      position: relative;
      width: 100%;

      .calendar {
        position: absolute;
        right: 18px;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        line-height: 0;
        cursor: pointer;

        .backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
        }

        .booking-form-calendar {
          position: absolute;
          bottom: 100%;
          right: 20px;
          width: 325px;
          height: 273px;
          background-color: #ffffff;
          border-radius: 12px;
          border: 1px solid #10182833;
          padding: 16px;

          .react-calendar__navigation {
            display: flex;
            height: 24px;
            margin-bottom: 20px;

            .react-calendar__navigation__arrow {
              padding: 0;
              flex: 0 1 auto;
              color: #101828;
              background-color: #ffffff;
              width: 24px;
              height: 24px;
            }

            .react-calendar__navigation__label {
              padding: 0;
              flex: 1 1 auto;

              font-family: Inter;
              font-size: 16px;
              font-weight: 600;
              line-height: 19.2px;
              text-align: center;
              color: #101828;
              background-color: #ffffff;
            }
          }

          .react-calendar__month-view__weekdays {
            margin-bottom: 20px;

            .react-calendar__month-view__weekdays__weekday {
              display: flex;
              align-items: center;
              justify-content: center;
              height: fit-content;

              abbr {
                font-family: Inter;
                font-size: 12px;
                font-weight: 600;
                line-height: 14.4px;
                text-align: center;
                color: #475467;
                text-transform: uppercase;
                text-decoration: none;
              }
            }
          }

          .react-calendar__navigation__arrow.react-calendar__navigation__next2-button,
          .react-calendar__navigation__arrow.react-calendar__navigation__prev2-button {
            display: none;
          }

          .booking-calendar-item {
            display: flex;
            justify-content: center;
            background-color: #ffffff;
            width: 41px;
            height: 32px;

            //styleName: Body / Regular;
            font-family: Inter;
            font-size: 14px;
            font-weight: 400;
            line-height: 16.8px;
            text-align: center;
            color: #475467;
          }
        }
      }
    }
  }

  .booking-form-submit {
    button {
      padding: 16px 60px 16px 60px;
      border-radius: 200px;
      background-color: #e44848;

      font-family: Inter;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.005em;
      color: #ffffff;
    }
  }
`;
