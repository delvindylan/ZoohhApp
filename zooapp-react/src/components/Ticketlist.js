import React, { useState } from 'react';

const TicketForm = ({ onTicketSubmit }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Überprüfe, ob alle Felder ausgefüllt sind
    if (name.trim() === '' || type.trim() === '' || quantity === 0) {
      alert('Bitte fülle alle Felder aus!');
      return;
    }

    // Erstelle ein Ticket-Objekt
    const ticket = {
      name,
      type,
      quantity
    };

    // Rufe die Callback-Funktion auf, um das Ticket zu übergeben
    onTicketSubmit(ticket);

    // Setze die Felder zurück
    setName('');
    setType('');
    setQuantity(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="type">Tickettyp:</label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={handleTypeChange}
        />
      </div>
      <div>
        <label htmlFor="quantity">Anzahl:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <button type="submit">Ticket hinzufügen</button>
    </form>
  );
};

export default TicketForm;