// components/BookingDetails.js
import React from "react";

const BookingDetails = ({ bookings }) => {
  console.log("Bookings:", bookings);

  return (
    <div className="booking-details">
      <h2>Booking Details</h2>
      {bookings && bookings.length > 0 ? (
        <table style={{ width: "20%" }}>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Selected Seats</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center" }}>{booking.name}</td>
                <td style={{ textAlign: "center" }}>{booking.numTickets}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings yet.</p>
      )}
    </div>
  );
};

export default BookingDetails;
