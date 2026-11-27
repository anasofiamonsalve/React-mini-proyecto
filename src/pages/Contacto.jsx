import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <main className="min-h-screen bg-[#fffaf6] px-5 py-16">

      {/* ENCABEZADO */}
      <section className="mx-auto mb-14 max-w-4xl text-center">

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#bd7888]">
          Estamos para ti
        </p>

        <h1 className="mb-6 text-4xl font-bold text-[#68434a] sm:text-5xl">
          ¡Hablemos de dulzura!
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-[#765d5b]">
          ¿Tienes alguna pregunta, deseas conocer nuestras
          preparaciones o quieres endulzar una ocasión especial?
          En Dulce Encanto nos encantará atenderte.
        </p>

      </section>

      {/* TARJETAS DE CONTACTO */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-7 md:grid-cols-3">

        <article className="rounded-3xl border border-[#f0dce0] bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">

          <span className="text-5xl">📍</span>

          <h2 className="mb-3 mt-5 text-xl font-bold text-[#a96776]">
            Ubicación
          </h2>

          <p className="leading-7 text-[#765d5b]">
            Medellín, Colombia.
          </p>

          <p className="mt-2 text-sm text-[#a18b88]">
            Ubicación de referencia.
          </p>

        </article>

        <article className="rounded-3xl border border-[#f0dce0] bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">

          <span className="text-5xl">💌</span>

          <h2 className="mb-3 mt-5 text-xl font-bold text-[#a96776]">
            Correo electrónico
          </h2>

          <p className="leading-7 text-[#765d5b]">
            Atención por correo próximamente.
          </p>

          <p className="mt-2 text-sm text-[#a18b88]">
            Canal de contacto por configurar.
          </p>

        </article>

        <article className="rounded-3xl border border-[#f0dce0] bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">

          <span className="text-5xl">📱</span>

          <h2 className="mb-3 mt-5 text-xl font-bold text-[#a96776]">
            Teléfono
          </h2>

          <p className="leading-7 text-[#765d5b]">
            Atención telefónica próximamente.
          </p>

          <p className="mt-2 text-sm text-[#a18b88]">
            Número de contacto por configurar.
          </p>

        </article>

      </section>

      {/* MENSAJE ESPECIAL */}
      <section className="mx-auto mt-14 max-w-5xl rounded-3xl bg-[#f8e2e5] px-7 py-12 text-center sm:px-12">

        <span className="text-5xl">🎂</span>

        <h2 className="mb-4 mt-5 text-3xl font-bold text-[#68434a]">
          Endulcemos juntos tus momentos
        </h2>

        <p className="mx-auto mb-7 max-w-2xl leading-8 text-[#765d5b]">
          Cada celebración merece un detalle especial.
          En Dulce Encanto queremos acompañarte con
          preparaciones llenas de sabor, creatividad y amor.
        </p>

        <Link
          to="/"
          className="inline-block rounded-full bg-[#a96776] px-8 py-3 font-semibold text-white no-underline shadow-md transition hover:bg-[#80515b]"
        >
          Volver al inicio
        </Link>

      </section>

      {/* MAPA */}
      <section className="mx-auto mt-16 max-w-5xl">

        <div className="mb-7 text-center">
          <h2 className="text-3xl font-bold text-[#68434a]">
            Encuéntranos
          </h2>

          <p className="mt-3 text-[#765d5b]">
            Nuestra ubicación de referencia en Medellín.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-lg">
          <iframe
            title="Mapa de Medellín, Colombia"
            src="https://www.google.com/maps?q=Medell%C3%ADn%2C%20Colombia&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>

      </section>

    </main>
  );
};

export default Contacto;