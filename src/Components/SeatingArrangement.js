// components/SeatingArrangement.js
import React, { useState } from "react";
import "../Components/styles.css";

const SeatingArrangement = () => {
  // Sample seat data
  const initialSeatData = [
    [
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
    ], // Row A
    [
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
    ], // Row B
    [
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
    ], // Row C
    [
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
    ], // Row D
    [
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
    ], // Row E
    [
      "available",
      "available",
      "available",
      "available",
      "available",
      "available",
    ], // Row F
  ];

  // State to manage seat availability
  const [seats, setSeats] = useState(initialSeatData);

  // Handle seat selection logic
  const handleSeatClick = (rowIndex, seatIndex) => {
    const currentStatus = seats[rowIndex][seatIndex];

    let newStatus;
    if (currentStatus === "available") {
      newStatus = "selected";
    } else if (currentStatus === "selected") {
      newStatus = "available";
    } else {
      return;
    }

    const newSeats = [...seats];
    newSeats[rowIndex][seatIndex] = newStatus;

    setSeats(newSeats);
  };

  return (
    <div className="seating-arrangement">
      <h2>Seating Arrangement</h2>
      <div className="rows-container">
        {seats.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="seat-row">
            {row.map((status, seatIndex) => (
              <div
                key={`seat-${rowIndex}-${seatIndex}`}
                className={`seat ${status}`}
                onClick={() => handleSeatClick(rowIndex, seatIndex)}
              >
                {status === "available" ? "A" : "X"}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatingArrangement;
