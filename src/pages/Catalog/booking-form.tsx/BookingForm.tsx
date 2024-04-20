import { FC, useMemo, useState } from 'react';
import { BookingFormStyled } from './BookingForm.styled';

import { CalendarPicker } from '../calendar-picker/CalendarPicker';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

export type DateRange = [Date, Date];

interface FormValues {
  name: string;
  email: string;
  dateRange: string;
  comment: string;
}

const BookingFormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too Short!')
    .max(2, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

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
      <Formik
        initialValues={{
          name: '',
          email: '',
          dateRange: '',
          comment: '',
        }}
        validationSchema={BookingFormValidationSchema}
        onSubmit={(
          values: FormValues
          // { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          console.log('asdfsd', values);
        }}
      >
        <Form className="booking-html-form">
          <div className="booking-form-fields">
            <Field
              placeholder="Name"
              className="field"
              id="name"
              name="name"
              type="text"
            ></Field>
            <Field
              placeholder="Email"
              type="email"
              className="field"
              id="email"
              name="email"
            ></Field>
            <div className="calendar-input-wrap">
              <Field
                placeholder="Booking date"
                type="text"
                className="field"
                style={{ width: '100%' }}
                value={dateInputValue}
                disabled={true}
                id="dateRange"
                name="dateRange"
              ></Field>
              <CalendarPicker
                setDateRange={(value: DateRange) => {
                  setDateRange(value);
                }}
                dateRange={dateRange}
              />
            </div>
            <Field
              placeholder="Comment"
              className="field"
              component="textarea"
              name="comment"
              id="comment"
            ></Field>
          </div>
          <div className="booking-form-submit">
            <button type="submit">Send</button>
          </div>
        </Form>
      </Formik>
    </BookingFormStyled>
  );
};
