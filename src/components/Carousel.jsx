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
    <section className="mx-auto my-16 w-full max-w-7xl px-4 sm:px-6">

      {/* ENCABEZADO */}
      <div className="mb-8 text-center">

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#bd7888]">
          Nuestras delicias
        </p>

        <h2 className="mb-4 text-3xl font-bold text-[#68434a] sm:text-4xl">
          Descubre nuestro mundo dulce
        </h2>

        <p className="text-[#876f70]">
          Diez creaciones preparadas especialmente para ti.
        </p>

      </div>

      {/* CARRUSEL */}
      <div className="relative overflow-hidden rounded-3xl bg-[#f8e2e5] shadow-xl">

        <img
          src={currentImage.image}
          alt={currentImage.title}
          className="h-[280px] w-full object-cover sm:h-[400px] lg:h-[500px]"
        />

        {/* DESCRIPCIÓN */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3d2028]/95 via-[#3d2028]/60 to-transparent px-5 pb-8 pt-20 text-center text-white sm:px-12 sm:pb-10">

          <h3 className="mb-3 text-2xl font-bold sm:text-4xl">
            {currentImage.title}
          </h3>

          <p className="mb-3 text-sm text-white/90 sm:text-lg">
            {currentImage.description}
          </p>

          <span className="text-xs text-white/75 sm:text-sm">
            Fotografía {currentIndex + 1} de {images.length}
          </span>

        </div>

        {/* BOTÓN ANTERIOR */}
        <button
          type="button"
          onClick={previousImage}
          aria-label="Fotografía anterior"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-[#80515b] shadow-lg transition hover:scale-110 hover:bg-white sm:left-5 sm:h-12 sm:w-12"
        >
          &#10094;
        </button>

        {/* BOTÓN SIGUIENTE */}
        <button
          type="button"
          onClick={nextImage}
          aria-label="Fotografía siguiente"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-[#80515b] shadow-lg transition hover:scale-110 hover:bg-white sm:right-5 sm:h-12 sm:w-12"
        >
          &#10095;
        </button>

      </div>

      {/* INDICADORES */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">

        {images.map((image, index) => (
          <button
            type="button"
            key={image.id}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Mostrar fotografía ${index + 1}`}
            aria-current={currentIndex === index ? "true" : undefined}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-8 bg-[#bd7888]"
                : "w-2 bg-[#e9cbd1] hover:bg-[#bd7888]"
            }`}
          />
        ))}

      </div>

    </section>
  );
};

export default Carousel;