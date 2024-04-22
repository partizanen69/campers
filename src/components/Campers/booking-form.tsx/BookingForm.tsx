import { FC } from 'react';
import { BookingFormStyled } from './BookingForm.styled';

import { CalendarPicker } from '../calendar-picker/CalendarPicker';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export type DateRange = [Date, Date];

// commented to satisfy compiler
// interface FormValues {
//   name: string;
//   email: string;
//   dateRange: string;
//   comment: string;
// }

const BookingFormValidationSchema = Yup.object().shape({
  name: Yup.string().max(50, 'Too Long!').required('Required'),
  email: Yup.string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email'
    )
    .required('Required'),
  dateRange: Yup.string().required('Required'),
  comment: Yup.string(),
});

export const BookingForm: FC = () => {
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
        // commented to satisfy compiler
        // onSubmit={(values: FormValues) => {
        onSubmit={() => {
          window.location.reload();
        }}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Form className="booking-html-form">
            <div className="booking-form-fields">
              <div className="field-wrap">
                <Field
                  placeholder="Name"
                  className="field"
                  id="name"
                  name="name"
                  type="text"
                ></Field>
                {errors.name && touched.name ? (
                  <div className="field-errors">{errors.name}</div>
                ) : null}
              </div>

              <div className="field-wrap">
                <Field
                  placeholder="Email"
                  type="email"
                  className="field"
                  id="email"
                  name="email"
                ></Field>
                {errors.email && touched.email ? (
                  <div className="field-errors">{errors.email}</div>
                ) : null}
              </div>

              <div className="field-wrap">
                <div className="calendar-input-wrap">
                  <Field
                    placeholder="Booking date"
                    type="text"
                    className="field"
                    style={{ width: '100%' }}
                    disabled={true}
                    id="dateRange"
                    name="dateRange"
                    value={values.dateRange}
                  ></Field>
                  <CalendarPicker
                    setDateRange={(dateRange: DateRange) => {
                      if (!dateRange) {
                        return '';
                      }

                      const [from, to] = dateRange;
                      const inputValue = `${from.toLocaleDateString(
                        'uk-UA'
                      )} - ${to.toLocaleDateString('uk-UA')}`;

                      setFieldValue('dateRange', inputValue);
                    }}
                  />
                </div>

                {errors.dateRange && touched.dateRange ? (
                  <div className="field-errors">{errors.dateRange}</div>
                ) : null}
              </div>
              <div className="field-wrap">
                <Field
                  placeholder="Comment"
                  className="field"
                  component="textarea"
                  name="comment"
                  id="comment"
                ></Field>
                {errors.comment && touched.comment ? (
                  <div className="field-errors">{errors.comment}</div>
                ) : null}
              </div>
            </div>
            <div className="booking-form-submit">
              <button type="submit">Send</button>
            </div>
          </Form>
        )}
      </Formik>
    </BookingFormStyled>
  );
};
