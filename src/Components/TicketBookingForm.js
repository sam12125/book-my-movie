// components/TicketBookingForm.js
import React, { useState } from "react";

const TicketBookingForm = ({ onBook, onNumTicketsChange }) => {
  const [name, setName] = useState("");
  const [numTickets, setNumTickets] = useState(1);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumTicketsChange = (e) => {
    const newNumTickets = parseInt(e.target.value, 10);
    setNumTickets(newNumTickets);
    onNumTicketsChange(newNumTickets);
  };

  const handleBookClick = () => {
    onBook({
      name: name,
      numTickets: numTickets,
    });
  };

  return (
    <div className="ticket-booking-form">
      <h2>Ticket Booking Form</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Number of Tickets:
          <select value={numTickets} onChange={handleNumTicketsChange}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={handleBookClick}>
          Book
        </button>
      </form>
    </div>
  );
};

export default TicketBookingForm;
