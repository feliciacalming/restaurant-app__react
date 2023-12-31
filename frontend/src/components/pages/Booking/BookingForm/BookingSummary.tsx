import { useContext, useState } from "react";
import { CurrentBookingContext, CurrentBookingDispatchContext } from "../../../../contexts/CurrentBookingContext";
import { createNewBooking } from "../../../../services/BookingService";
import {
  ConfirmBookingButton,
  ConfirmationText,
  GDPRWrapper,
  GDPRcheckbox,
  BookingDetails,
  BookingDetailsWrapper,
  InfoText,
  TermsAndConditions,
  Detail,
  SummaryWrapper,
  ConfirmationWrapper,
  CancelButton,
  ButtonContainer,
} from "../../../styled/Booking/BookingSummary";
import { ActionType } from "../../../../reducers/CurrentBookingReducer";
import { Spinner } from "../../../animation/Spinner";
import { Link } from "react-router-dom";

export const BookingSummary = () => {
  const booking = useContext(CurrentBookingContext);
  const dispatch = useContext(CurrentBookingDispatchContext);
  const [checked, setChecked] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleBooking = async () => {
    setShowSpinner(true);
    const response = await createNewBooking("booker", booking);
    await new Promise(r => setTimeout(r, 1000));
    setShowSpinner(false);
    dispatch({ type: ActionType.GOT_BOOKING_ID, payload: response.data._id });
  };

  return (
    <>
      <SummaryWrapper>
        <BookingDetailsWrapper>
          <BookingDetails>
            <Detail>Datum</Detail> <Detail weight="bold">{booking.seatingDate}</Detail>
          </BookingDetails>
          <BookingDetails>
            <Detail>Gäster</Detail> <Detail weight="bold">{booking.guests}</Detail>
          </BookingDetails>
          <BookingDetails>
            <Detail>Tid</Detail> <Detail weight="bold">{booking.seatingTime}</Detail>
          </BookingDetails>
        </BookingDetailsWrapper>

        <GDPRWrapper>
          <div>
            <InfoText weight="bold">Nästan där</InfoText>
            <InfoText>För att fortsätta måste du godkänna restaurangens villkor.</InfoText>
          </div>
          <div>
            <TermsAndConditions>LÄS BOOKER BOOKING AB ALLMÄNNA VILLKOR</TermsAndConditions>
          </div>

          <ConfirmationWrapper>
            <GDPRcheckbox checked={checked} onChange={handleChange} />{" "}
            <ConfirmationText>
              Jag godkänner villkoren och att Restaurang Booker sparar mina uppgifter.
            </ConfirmationText>
          </ConfirmationWrapper>
        </GDPRWrapper>

        <ButtonContainer>
          <CancelButton>
            <Link to="/">Avbryt</Link>
          </CancelButton>
          {!showSpinner ? (
            <ConfirmBookingButton disabled={!checked} onClick={handleBooking}>
              BOKA
            </ConfirmBookingButton>
          ) : (
            <Spinner />
          )}
        </ButtonContainer>
      </SummaryWrapper>
    </>
  );
};
