import React from 'react';
import Slider from './Slider';

const slides = [
    {
      image: `${process.env.PUBLIC_URL}/img/slide.png`,
      title: 'Slide Parting',
      caption: 'Esta é a legenda do primeiro slide, com até duas linhas de texto.'
    },
    {
      image: `${process.env.PUBLIC_URL}/img/slide.png`,
      title: 'Slide Parting 2',
      caption: 'Aqui está uma legenda do segundo slide. O limite é de até duas linhas.'
    },
    {
      image: `${process.env.PUBLIC_URL}/img/slide.png`,
      title: 'Slide Parting 3',
      caption: 'Legenda do terceiro slide, com mais de uma linha, mas será limitada a duas linhas no display.'
    },
    {
      image: `${process.env.PUBLIC_URL}/img/slide.png`,
      title: 'Slide Parting 4',
      caption: 'Esta é a legenda do primeiro slide, com até duas linhas de texto.'
    }
  ];

const SliderInstance = () => {
    return (
        <section className="slider">
            <Slider slides={slides} />
            </section>
    );
};

export default SliderInstance;