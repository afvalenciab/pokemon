import React from 'react';
import logo from '../assets/static/Pookeball_logo.svg';
import '../assets/styles/Header.scss';

const Header = () => {
  return (
    <section className='header'>
      <figure>
        <img src={logo} alt='Pokemon Logo' />
      </figure>
      <h1>Pokémon</h1>
    </section>
  );
};

export default Header;
