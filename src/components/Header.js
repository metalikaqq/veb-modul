// src/components/Header.js
import React from 'react';

function Header({ firstName, lastName }) {
  return (
    <header>
      <h1>{firstName} {lastName}</h1>
    </header>
  );
}

export default Header;
