import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Form from '../../components/form/Form';
import { useParams } from 'react-router-dom';

function EditaMusica() { 

    const { id } = useParams();
    console.log('editaMusica:', id)

  return (
    <section className="w-full h-[70%] lg:h-screen  pt-44 lg:pt-56">
      <Header />
      <Form id={id} />
      <Footer />
    </section>
  );
}

export default EditaMusica;
