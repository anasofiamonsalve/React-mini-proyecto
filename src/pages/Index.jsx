import Carousel from "../components/Carousel.jsx";

const Index = () => {
  return (
    <main>

      {/* PORTADA PRINCIPAL */}
      <section className="hero-dulce">
        <div className="container text-center">

          <span className="hero-etiqueta">
            🧁 PASTELERÍA ARTESANAL
          </span>

          <h1 className="display-4 fw-bold mt-4">
            Un mundo lleno de
            <span> dulzura</span>
          </h1>

          <p className="lead mt-4">
            En Dulce Encanto creamos tortas, postres
            y momentos especiales preparados con amor
            para endulzar tu día.
          </p>

          <a href="#galeria" className="btn btn-dulce mt-3">
            Descubre nuestras delicias
          </a>

        </div>
      </section>

      {/* PRESENTACIÓN */}
      <section className="container intro-dulce text-center py-5">

        <p className="subtitulo-dulce">
          HECHO CON AMOR
        </p>

        <h2 className="fw-bold">
          Pequeños detalles, grandes sonrisas
        </h2>

        <p className="text-muted mx-auto">
          Cada creación está inspirada en la pasión
          por la repostería, los buenos ingredientes
          y la alegría de compartir.
        </p>

      </section>

      {/* CARRUSEL */}
      <div id="galeria">
        <Carousel />
      </div>

    </main>
  );
};

export default Index;