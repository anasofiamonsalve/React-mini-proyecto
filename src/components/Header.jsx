import { NavLink } from "react-router-dom";

const Header = () => {
  const estiloEnlace = ({ isActive }) =>
    `py-2 text-sm font-semibold no-underline transition-colors hover:text-[#bd7888] sm:text-base ${
      isActive ? "text-[#bd7888]" : "text-[#65464a]"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#f0dce0] bg-[#fffaf6] shadow-sm">
      <div className="mx-auto flex min-h-[75px] max-w-7xl flex-col items-center justify-center gap-3 px-4 py-3 sm:flex-row sm:justify-between sm:gap-6 sm:py-0">

        <NavLink
          to="/"
          className="whitespace-nowrap text-xl font-semibold text-[#80515b] no-underline sm:text-2xl"
        >
          🧁 Dulce <strong>Encanto</strong>
        </NavLink>

        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7">
          <NavLink to="/" end className={estiloEnlace}>
            Inicio
          </NavLink>

          <NavLink to="/nosotros" className={estiloEnlace}>
            Nosotros
          </NavLink>

          <NavLink to="/contacto" className={estiloEnlace}>
            Contacto
          </NavLink>

          <NavLink to="/login" className={estiloEnlace}>
            Iniciar sesión
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Header;