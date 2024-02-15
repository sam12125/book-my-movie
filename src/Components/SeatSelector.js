// components/SeatSelector.js
import React from "react";
import SeatingArrangement from "./SeatingArrangement";

const SeatSelector = ({ numTickets, onSelectSeat, selectedSeats, seats }) => {
  return (
    <div className="seat-selector">
      <h2>Seat Selector</h2>
      <p>Selected {numTickets} seats:</p>
    </div>
  );
};

export default SeatSelector;
