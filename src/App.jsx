import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import Index from "./pages/Index.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Contacto from "./pages/Contacto.jsx";
import Login from "./pages/Login.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <div className="container text-center my-5">
              <h1>404</h1>
              <p>La página que buscas no existe.</p>
            </div>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;