import { Link } from "react-router-dom";

const Footer = () => {
  const numeroWhatsApp = "";

  const enlaceWhatsApp = numeroWhatsApp
    ? `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
        "Hola, quiero información sobre Dulce Encanto."
      )}`
    : "https://wa.me/";

  return (
    <>
      <footer className="mt-16 bg-[#68434a] text-[#fff8f4]">

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* IDENTIDAD */}
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              🧁 Dulce Encanto
            </h2>

            <p className="text-sm leading-7 text-[#f5dfe1]">
              Endulzamos tus momentos especiales
              con amor, creatividad y deliciosas
              preparaciones artesanales.
            </p>
          </div>

          {/* ENLACES */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Enlaces rápidos
            </h3>

            <ul className="space-y-3">
              <li>
                <Link className="text-[#fff8f4] no-underline hover:text-[#f2bdca]" to="/">
                  Inicio
                </Link>
              </li>

              <li>
                <Link className="text-[#fff8f4] no-underline hover:text-[#f2bdca]" to="/nosotros">
                  Nosotros
                </Link>
              </li>

              <li>
                <Link className="text-[#fff8f4] no-underline hover:text-[#f2bdca]" to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACTO Y REDES */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Contáctanos
            </h3>

            <p className="mb-3 text-sm">
              📍 Medellín, Colombia
            </p>

            <Link
              to="/contacto"
              className="text-sm text-[#f5dfe1] underline"
            >
              Información de contacto
            </Link>

            <h4 className="mb-3 mt-6 font-bold">
              Síguenos
            </h4>

            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#fff8f4] hover:text-[#f2bdca]"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#fff8f4] hover:text-[#f2bdca]"
              >
                Facebook
              </a>

              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#fff8f4] hover:text-[#f2bdca]"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* GOOGLE MAPS */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Nuestra ubicación
            </h3>

            <div className="overflow-hidden rounded-xl">
              <iframe
                title="Ubicación de referencia en Medellín"
                src="https://www.google.com/maps?q=Medell%C3%ADn%2C%20Colombia&output=embed"
                width="100%"
                height="180"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* DERECHOS RESERVADOS */}
        <div className="border-t border-white/20 px-4 py-5 text-center text-sm">
          © {new Date().getFullYear()} Dulce Encanto.
          Todos los derechos reservados.
          Propiedad intelectual protegida.
        </div>

      </footer>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a
        href={enlaceWhatsApp}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        title="Contáctanos por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-xl transition-transform hover:scale-110"
      >
        ☎
      </a>
    </>
  );
};

export default Footer;