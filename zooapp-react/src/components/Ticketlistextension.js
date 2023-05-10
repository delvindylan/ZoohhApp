import React, { useState } from 'react';
import TicketForm from './TicketForm';

const ZooApp = () => {
  const [tickets, setTickets] = useState([]);

  const handleTicketSubmit = (ticket) => {
    // Füge das übergebene Ticket zu der Liste der Tickets hinzu
    setTickets([...tickets, ticket]);
  };

  return (
    <div>
      <h1>Zoo Applikation</h1>
      <TicketForm onTicketSubmit={handleTicketSubmit} />
      {/* Hier kannst du die Liste der Tickets rendern */}
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>
            Name: {ticket.name}, Typ: {ticket.type}, Anzahl: {ticket.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZooApp;