import styled from 'styled-components';

export const CalendarPickerStyled = styled.div`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  line-height: 0;
  cursor: pointer;

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
`;
