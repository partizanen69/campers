import { FC, useMemo, useState } from 'react';
import { BookingFormStyled } from './BookingForm.styled';

import { CalendarPicker } from '../calendar-picker/CalendarPicker';

export type DateRange = [Date, Date];

export const BookingForm: FC = () => {
  const [dateRange, setDateRange] = useState<DateRange | null>(null);

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
          <CalendarPicker
            setDateRange={(value: DateRange) => {
              setDateRange(value);
            }}
            dateRange={dateRange}
          />
        </div>
        <textarea placeholder="Comment" className="field"></textarea>
      </div>
      <div className="booking-form-submit">
        <button>Send</button>
      </div>
    </BookingFormStyled>
  );
};
