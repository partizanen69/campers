import { FC, useMemo, useState } from 'react';
import { BookingFormStyled } from './BookingForm.styled';
import Calendar from 'react-calendar';

export const BookingForm: FC = () => {
  const [dateRange, setDateRange] = useState<[Date, Date] | null>(null);
  const [isCalendarVisible, setIsCalendarVisible] = useState<boolean>(false);

  const dateInputValue = useMemo((): string => {
    if (!dateRange) {
      return '';
    }

    const [from, to] = dateRange;
    return `${from.toLocaleDateString('uk-UA')} - ${to.toLocaleDateString(
      'uk-UA'
    )}`;
  }, [dateRange]);

  return (
    <BookingFormStyled>
      <div className="booking-form-header">
        <div className="booking-header-top">Book your campervan now</div>
        <div className="booking-header-bottom">
          Stay connected! We are always ready to help you.
        </div>
      </div>
      <div className="booking-form-fields">
        <input placeholder="Name" type="text" className="field"></input>
        <input placeholder="Email" type="email" className="field"></input>
        <div className="calendar-input-wrap">
          <input
            placeholder="Booking date"
            type="text"
            className="field"
            style={{ width: '100%' }}
            value={dateInputValue}
            disabled={true}
          ></input>
          <div className="calendar">
            <svg
              onClick={() => {
                setIsCalendarVisible(prevValue => !prevValue);
              }}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 3.33331H4.16667C3.24619 3.33331 2.5 4.07951 2.5 4.99998V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99998C17.5 4.07951 16.7538 3.33331 15.8333 3.33331Z"
                stroke="#101828"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.3335 1.66669V5.00002"
                stroke="#101828"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.6665 1.66669V5.00002"
                stroke="#101828"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.5 8.33331H17.5"
                stroke="#101828"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {isCalendarVisible && (
              <Calendar
                className="booking-form-calendar"
                tileClassName="booking-calendar-item"
                view="month"
                onChange={value => {
                  console.info('User selected value in the calendar', value);
                  setDateRange(value as [Date, Date]);
                  setIsCalendarVisible(false);
                }}
                value={dateRange}
                selectRange={true}
              />
            )}
          </div>
        </div>
        <textarea placeholder="Comment" className="field"></textarea>
      </div>
      <div className="booking-form-submit">
        <button>Send</button>
      </div>
    </BookingFormStyled>
  );
};
