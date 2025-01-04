
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Bemvindo from './components/Bemvindo';
import Banner1 from './components/Banner1';
import NossosServicos from './components/NossosServicos';
import SliiderInstance from './components/slider/SliiderInstance';
import Banner2 from './components/Banner2';
import Formulario from './components/formulario/Formulario';
import Mapa from './components/mapa/Mapa';

function App() {

  return (

    <section className="w-full h-[70%] lg:h-screen  pt-44 lg:pt-56">
        <section className="bg-img">
        <link rel="icon" href="/favicon.ico" />
        <Header />
        <Hero />
        </section>
        <Bemvindo />
        <Banner1 />
        <NossosServicos />
        <SliiderInstance />
        <Banner2 />
        <Formulario />
        <Mapa />
      <Footer />
    </section>
  );
}

export default App;
