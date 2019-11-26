import React from 'react';
import Header from '../components/Header';
import Pokemon from '../components/Pokemon';
import '../assets/styles/Home.scss';

const Home = () => {
  return (
    <main className='home--container'>
      <Header />
      <Pokemon />
    </main>
  );
};

export default Home;
