import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Cosa è successo?</h1>
      <p>
        <Link to="/">Torna alla homepage del sito</Link>
      </p>
    </div>
  );
};

export default NotFound;
