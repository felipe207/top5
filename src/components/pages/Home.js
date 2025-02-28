import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import Sugestao from '../../components/sugestao/Sugestao';
import Lista from '../../components/lista/Lista';

function Home() {

  const token = localStorage.getItem('token');

  return (
    <section className="w-full h-[70%] lg:h-screen  pt-44 lg:pt-56">
      <Header />
      <Hero />
      { token ? <Sugestao /> : null }
      <Lista />
      <Footer />
    </section>
  );
}

export default Home;
