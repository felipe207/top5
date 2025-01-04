import React, { useState, useEffect } from 'react';


const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleSlides = 3; // Número de slides visíveis ao mesmo tempo
    const autoSlideInterval = 5000; // 5 segundos

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, autoSlideInterval);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + visibleSlides) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (currentIndex - visibleSlides + slides.length) % slides.length
        );
    };

    // Calcular os slides que devem ser exibidos com base no índice atual
    const displayedSlides = slides.slice(currentIndex, currentIndex + visibleSlides);
    if (displayedSlides.length < visibleSlides) {
        displayedSlides.push(...slides.slice(0, visibleSlides - displayedSlides.length));
    }

    console.log(slides);
    return (
        <section className="slider">
            <div style={styles.sliderContainer}>
                <button onClick={prevSlide} style={styles.sliderButton}>◀</button>

                <div style={styles.slider}>
                    {displayedSlides.map((slide, index) => (
                        <div key={index} style={styles.slide}>

                            {/* <div style={styles.quadradoStyle}></div> */}

                            <img src={slide.image} alt={slide.title} style={styles.slideImage} />
                            <h3 style={styles.slideTitle}>{slide.title}</h3>
                            <p style={styles.slideCaption}>{slide.caption}</p>
                        </div>
                    ))}
                </div>

                <button onClick={nextSlide} style={styles.sliderButton}>▶</button>
            </div>
        </section>
    );
};

// Estilos em objeto
const styles = {
    sliderContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100vw', // Usar 100% da largura da tela
        overflow: 'hidden',
    },
    slider: {
        display: 'flex',
        overflow: 'hidden',
        width: '90%', // Usar 100% da largura do container
    },
    sliderButton: {
        background: 'none',
        border: 'none',
        fontSize: '2em',
        cursor: 'pointer',
        padding: '0 10px',
        color: '#333',
    },
    slide: {
        flex: '0 0 33.33%', // Cada slide ocupa um terço da largura
        boxSizing: 'border-box',
        padding: '0 10px',
        textAlign: 'center',
    },
    slideImage: {
        width: '70%', // Imagem ocupa toda a largura do slide
        border: '2px solid black',
        marginBottom: '10px',
    },
    slideTitle: {
        fontSize: '1.2em',
        margin: '5px 0',
        fontWeight: 'bold',
    },
    slideCaption: {
        fontSize: '1em',
        color: '#555',
        lineHeight: '1.2',
        maxHeight: '2.4em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
    },
    quadradoStyle: {
        width: '400px',
        height: '370px',
        border: '2px solid orange',
        backgroundcolor: 'transparent',
        position: 'absolute',
        top: '10px',
        left: '-10px',
        zindex: '10',  
    }
  };

export default Slider;