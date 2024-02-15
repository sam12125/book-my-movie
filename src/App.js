// App.js
import React, { useState } from "react";
import SeatingArrangement from "./Components/SeatingArrangement";
import TicketBookingForm from "./Components/TicketBookingForm";
import SeatSelector from "./Components/SeatSelector";
import BookingDetails from "./Components/BookingDetails";

const App = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [numTickets, setNumTickets] = useState(1); // Initial value for numTickets

  const handleBook = (bookingData) => {
    const { name, numTickets } = bookingData;

    // Add the new booking to the state
    const newBooking = { name, numTickets };
    setBookings([...bookings, newBooking]);
  };

  const isSeatAvailable = (rowIndex, seatIndex) => {
    return seats[rowIndex][seatIndex] === "available";
  };

  const handleSeatSelection = (rowIndex, seatIndex) => {
    const seatAlreadySelected = selectedSeats.some(
      (seat) => seat.rowIndex === rowIndex && seat.seatIndex === seatIndex
    );

    // If the seat is already selected, remove it (deselect)
    if (seatAlreadySelected) {
      const updatedSeats = selectedSeats.filter(
        (seat) => !(seat.rowIndex === rowIndex && seat.seatIndex === seatIndex)
      );
      setSelectedSeats(updatedSeats);
    } else {
      // Check if the seat is available and the user hasn't reached the selected seats limit
      const isAvailable = isSeatAvailable(rowIndex, seatIndex);
      const isSelectedLimitReached = selectedSeats.length === numTickets;

      // If available and the limit is not reached, add the seat (select)
      if (isAvailable && !isSelectedLimitReached) {
        setSelectedSeats([...selectedSeats, { rowIndex, seatIndex }]);
      } else if (!isAvailable && isSelectedLimitReached) {
        // Provide user feedback or handle the case when the user tries to select more seats than allowed
        alert("You have reached the maximum number of selected seats.");
      }
    }
  };

  const handleNumTicketsChange = (newNumTickets) => {
    setNumTickets(newNumTickets);
  };

  const seats = [
    [
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
    ],
    [
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
    ],
    [
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
    ],
    [
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
    ],
    [
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
    ],
    [
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
    ],
  ];

  return (
    <div className="App">
      <h1>Book My Movie</h1>
      <SeatingArrangement seats={seats} selectedSeats={selectedSeats} />
      <TicketBookingForm
        onBook={handleBook}
        onNumTicketsChange={handleNumTicketsChange}
      />
      <SeatSelector
        numTickets={numTickets}
        onSelectSeat={handleSeatSelection}
        selectedSeats={selectedSeats}
        seats={seats}
      />
      <BookingDetails bookings={bookings} />
    </div>
  );
};

export default App;
