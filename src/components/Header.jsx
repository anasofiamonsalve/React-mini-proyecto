import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-dulce sticky-top">
      <div className="container">

        <NavLink className="navbar-brand marca-dulce" to="/">
          <span>🧁</span> Dulce <strong>Encanto</strong>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Mostrar navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros">
                Nosotros
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                Contacto
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;