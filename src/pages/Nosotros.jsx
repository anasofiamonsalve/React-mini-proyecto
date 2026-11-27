const Nosotros = () => {
  return (
    <main className="min-h-screen bg-[#fffaf6] px-5 py-16">

      {/* ENCABEZADO */}
      <section className="mx-auto mb-16 max-w-4xl text-center">

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#bd7888]">
          Nuestra historia
        </p>

        <h1 className="mb-6 text-4xl font-bold text-[#68434a] sm:text-5xl">
          ¿Quiénes somos?
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-[#765d5b]">
          En Dulce Encanto creemos que los momentos más especiales
          merecen un toque de dulzura. Somos una propuesta de
          pastelería dedicada a crear deliciosas preparaciones
          que hacen sonreír y compartir.
        </p>

      </section>

      {/* NUESTRA ESENCIA */}
      <section className="mx-auto mb-16 max-w-6xl rounded-3xl bg-[#f8e2e5] px-8 py-12 text-center shadow-sm sm:px-14">

        <span className="text-5xl">🧁</span>

        <h2 className="my-5 text-3xl font-bold text-[#68434a]">
          Un mundo lleno de dulzura
        </h2>

        <p className="mx-auto max-w-3xl leading-8 text-[#765d5b]">
          Desde tortas y cupcakes hasta galletas y postres especiales,
          queremos que cada creación sea una experiencia llena de
          sabor, dedicación y amor por la pastelería.
        </p>

      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">

        <article className="rounded-2xl border border-[#f0dce0] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

          <div className="mb-5 text-4xl">🎂</div>

          <h2 className="mb-4 text-2xl font-bold text-[#a96776]">
            Nuestra misión
          </h2>

          <p className="leading-8 text-[#765d5b]">
            Elaborar preparaciones de pastelería deliciosas y
            creativas, cuidando cada detalle para acompañar
            las celebraciones y los momentos especiales de
            nuestros clientes.
          </p>

        </article>

        <article className="rounded-2xl border border-[#f0dce0] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

          <div className="mb-5 text-4xl">🌸</div>

          <h2 className="mb-4 text-2xl font-bold text-[#a96776]">
            Nuestra visión
          </h2>

          <p className="leading-8 text-[#765d5b]">
            Ser una marca de pastelería reconocida por su
            creatividad, calidad y dedicación, creando
            experiencias dulces que permanezcan en
            los recuerdos de nuestros clientes.
          </p>

        </article>

      </section>

      {/* MENSAJE FINAL */}
      <section className="mx-auto mt-16 max-w-3xl text-center">

        <h2 className="mb-4 text-3xl font-bold text-[#68434a]">
          ¡Gracias por visitarnos!
        </h2>

        <p className="text-[#765d5b]">
          En Dulce Encanto, cada detalle está pensado para
          endulzar tus momentos.
        </p>

      </section>

    </main>
  );
};

export default Nosotros;