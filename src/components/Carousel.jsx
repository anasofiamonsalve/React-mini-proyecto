import { useEffect, useState } from "react";

import imagen1 from "../assets/images/fondo1.png";
import imagen2 from "../assets/images/fondo2.png";
import imagen3 from "../assets/images/fondo3.png";
import imagen4 from "../assets/images/fondo4.png";
import imagen5 from "../assets/images/fondo5.png";
import imagen6 from "../assets/images/fondo6.png";
import imagen7 from "../assets/images/fondo7.png";
import imagen8 from "../assets/images/fondo8.png";
import imagen9 from "../assets/images/fondo9.png";
import imagen10 from "../assets/images/fondo10.png";

const images = [
  {
    id: 1,
    image: imagen1,
    title: "Tortas Artesanales",
    description: "Elaboradas con amor para tus celebraciones."
  },
  {
    id: 2,
    image: imagen2,
    title: "Cupcakes Encantadores",
    description: "Pequeños postres, grandes momentos."
  },
  {
    id: 3,
    image: imagen3,
    title: "Macarons Especiales",
    description: "Color, delicadeza y mucho sabor."
  },
  {
    id: 4,
    image: imagen4,
    title: "Brownies de Chocolate",
    description: "Una tentación para los amantes del chocolate."
  },
  {
    id: 5,
    image: imagen5,
    title: "Galletas Caseras",
    description: "Crujientes, deliciosas y recién horneadas."
  },
  {
    id: 6,
    image: imagen6,
    title: "Cheesecakes",
    description: "Suavidad y dulzura en cada porción."
  },
  {
    id: 7,
    image: imagen7,
    title: "Donas Decoradas",
    description: "Diversión y sabor en cada mordisco."
  },
  {
    id: 8,
    image: imagen8,
    title: "Rollos de Canela",
    description: "El aroma perfecto para tus tardes."
  },
  {
    id: 9,
    image: imagen9,
    title: "Tartaletas de Frutas",
    description: "Frutas frescas y sabores irresistibles."
  },
  {
    id: 10,
    image: imagen10,
    title: "Tortas Especiales",
    description: "Creamos dulces recuerdos para ti."
  }
];

const Carousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImage = images[currentIndex];

  const previousImage = () => {
    setCurrentIndex((previous) =>
      previous === 0 ? images.length - 1 : previous - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((previous) =>
      (previous + 1) % images.length
    );
  };

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((previous) =>
        (previous + 1) % images.length
      );
    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="container my-5">

      <div className="text-center mb-4">

        <p className="subtitulo-dulce">
          NUESTRAS DELICIAS
        </p>

        <h2 className="fw-bold">
          Descubre nuestro mundo dulce
        </h2>

        <p className="text-secondary">
          Diez creaciones preparadas especialmente para ti.
        </p>

      </div>

      <div className="carousel-container">

        <img
          src={currentImage.image}
          alt={currentImage.title}
          className="carousel-image"
        />

        <div className="carousel-caption-custom">

          <h3>{currentImage.title}</h3>

          <p>{currentImage.description}</p>

          <span>
            Fotografía {currentIndex + 1} de {images.length}
          </span>

        </div>

        <button
          type="button"
          className="carousel-control previous"
          onClick={previousImage}
          aria-label="Fotografía anterior"
        >
          &#10094;
        </button>

        <button
          type="button"
          className="carousel-control next"
          onClick={nextImage}
          aria-label="Fotografía siguiente"
        >
          &#10095;
        </button>

      </div>

      <div className="carousel-indicators-custom">

        {images.map((image, index) => (

          <button
            type="button"
            key={image.id}
            className={`indicator ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Mostrar fotografía ${index + 1}`}
          />

        ))}

      </div>

    </section>
  );
};

export default Carousel;