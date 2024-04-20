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

  .booking-html-form {
    display: flex;
    flex-direction: column;
    gap: 24px;

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
  }
`;
