import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ListagemEditavel from '../listagem-editavel/ListagemEditavel';

function Musicas() {

  return (
    <section className="w-full h-[70%] lg:h-screen  pt-44 lg:pt-56">
      <Header />
      <ListagemEditavel />
      <Footer />
    </section>
  );
}

export default Musicas;
