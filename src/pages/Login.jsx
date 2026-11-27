
import { useState } from "react";
import { Link } from "react-router-dom";

import torta from "../assets/images/login1.png";
import cupcakes from "../assets/images/login2.png";
import tartaletas from "../assets/images/login3.png";
import galletas from "../assets/images/login4.png";
import bollos from "../assets/images/login5.png";
import postres from "../assets/images/login6.png";
import croissants from "../assets/images/login7.png";

const API_URL = "http://127.0.0.1:8000";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);

  // REQUISITOS DE SEGURIDAD
  const passwordRules = [
    {
      label: "Mínimo 10 caracteres",
      valid: form.password.length >= 10,
    },
    {
      label: "Una letra mayúscula",
      valid: /[A-Z]/.test(form.password),
    },
    {
      label: "Una letra minúscula",
      valid: /[a-z]/.test(form.password),
    },
    {
      label: "Al menos un número",
      valid: /[0-9]/.test(form.password),
    },
    {
      label: "Un carácter especial",
      valid: /[^A-Za-z0-9\s]/.test(form.password),
    },
  ];

  const progress = passwordRules.filter(
    (rule) => rule.valid
  ).length;

  // VALIDAR CORREO
  const validateEmail = (value) => {
    if (!value.trim()) {
      return "El correo electrónico es obligatorio.";
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(value)) {
      return "Ingresa un correo electrónico válido.";
    }

    return "";
  };

  // VALIDAR CONTRASEÑA
  const validatePassword = (value) => {
    if (!value) return "La contraseña es obligatoria.";

    if (value.length < 10) {
      return "Debe tener mínimo 10 caracteres.";
    }

    if (!/[A-Z]/.test(value)) {
      return "Debe incluir una letra mayúscula.";
    }

    if (!/[a-z]/.test(value)) {
      return "Debe incluir una letra minúscula.";
    }

    if (!/[0-9]/.test(value)) {
      return "Debe incluir al menos un número.";
    }

    if (!/[^A-Za-z0-9\s]/.test(value)) {
      return "Debe incluir un carácter especial.";
    }

    return "";
  };

  // ACTUALIZAR CAMPOS
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]:
        name === "email"
          ? validateEmail(value)
          : validatePassword(value),
    }));

    setFeedback(null);
  };

  // VALIDAR AL SALIR DEL CAMPO
  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]:
        name === "email"
          ? validateEmail(value)
          : validatePassword(value),
    }));
  };

  // INICIAR SESIÓN
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      email: validateEmail(form.email),
      password: validatePassword(form.password),
    };

    setErrors(newErrors);
    setTouched({
      email: true,
      password: true,
    });

    if (newErrors.email || newErrors.password) {
      setFeedback({
        type: "error",
        text: "Por favor, corrige los campos señalados.",
      });
      return;
    }

    setLoading(true);
    setFeedback(null);

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          remember_me: rememberMe,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.status === 401 || response.status === 400) {
        throw new Error("El correo o la contraseña son incorrectos.");
      }

      if (response.status === 403) {
        throw new Error("No tienes permisos para ingresar.");
      }

      if (!response.ok) {
        throw new Error(
          typeof data.detail === "string"
            ? data.detail
            : "No fue posible iniciar sesión."
        );
      }

      setFeedback({
        type: "success",
        text: "El servidor respondió correctamente.",
      });

    } catch (error) {
      setFeedback({
        type: "error",
        text:
          error.message === "Failed to fetch"
            ? "No se pudo conectar con el servidor. La autenticación estará disponible al integrar FastAPI."
            : error.message,
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fffaf6] px-4 py-10 sm:px-8 sm:py-14">

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-[30px] border border-[#f0dce0] bg-white shadow-[0_15px_60px_rgba(104,67,74,0.10)] lg:grid-cols-2">

        {/* COLUMNA IZQUIERDA: PRESENTACIÓN */}

        <section className="flex flex-col bg-[#f8e5e6] p-6 sm:p-9 lg:p-10">

          <div className="mb-7">

            <p className="text-sm font-bold tracking-[0.18em] text-[#a96776]">
              🧁 DULCE ENCANTO
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#68434a] sm:text-4xl">
              Un mundo lleno de dulzura
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#805b61]">
              Los momentos más especiales merecen un toque
              de dulzura. Creamos preparaciones llenas de
              sabor, amor y creatividad.
            </p>

          </div>

          {/* FOTOGRAFÍA PRINCIPAL */}

          <div className="relative h-[260px] overflow-hidden rounded-3xl shadow-lg sm:h-[350px]">

            <img
              src={torta}
              alt="Torta especial de Dulce Encanto"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#51323b]/80 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 text-white">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Pastelería artesanal
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Hecho con amor
              </h3>

              <p className="mt-2 text-sm text-white/90">
                Pequeños detalles, grandes sonrisas.
              </p>

            </div>

          </div>

          {/* FOTOGRAFÍAS SECUNDARIAS */}

          <div className="mt-5 grid grid-cols-2 gap-4">

            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

              <img
                src={cupcakes}
                alt="Cupcakes de Dulce Encanto"
                className="h-28 w-full object-cover sm:h-32"
              />

              <p className="px-3 py-3 text-center text-xs font-semibold text-[#80515b]">
                Cupcakes especiales
              </p>

            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

              <img
                src={tartaletas}
                alt="Tartaletas de frutas"
                className="h-28 w-full object-cover sm:h-32"
              />

              <p className="px-3 py-3 text-center text-xs font-semibold text-[#80515b]">
                Delicias artesanales
              </p>

            </div>

                        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

              <img
                src={galletas}
                alt="Galletas caseras y decoradas"
                className="h-28 w-full object-cover sm:h-32"
              />

              <p className="px-3 py-3 text-center text-xs font-semibold text-[#80515b]">
                Galletas caseras y decoradas
              </p>

            </div>

                        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

              <img
                src={bollos}
                alt="bollos de canela"
                className="h-28 w-full object-cover sm:h-32"
              />

              <p className="px-3 py-3 text-center text-xs font-semibold text-[#80515b]">
                Bollos deliciciosos
              </p>

            </div>

                        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

              <img
                src={postres}
                alt="Postres deliciosos"
                className="h-28 w-full object-cover sm:h-32"
              />

              <p className="px-3 py-3 text-center text-xs font-semibold text-[#80515b]">
                Postres de varios favores
              </p>

            </div>

                        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

              <img
                src={croissants}
                alt="Croissants recién horneados"
                className="h-28 w-full object-cover sm:h-32"
              />

              <p className="px-3 py-3 text-center text-xs font-semibold text-[#80515b]">
                Croissants recién horneados
              </p>

            </div>

          </div>

        </section>


        {/* COLUMNA DERECHA: INICIO DE SESIÓN */}

        <section className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">

          {/* ENCABEZADO */}

          <div className="mb-9">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#bd7888]">
              Tu cuenta personal
            </p>

            <h1 className="text-3xl font-bold text-[#68434a] sm:text-4xl">
              ¡Bienvenido!
            </h1>

            <p className="mt-4 text-sm leading-7 text-[#876f70]">
              Ingresa tus datos para acceder a Dulce Encanto
              y seguir disfrutando de nuestras deliciosas creaciones.
            </p>

          </div>


          {/* FORMULARIO */}

          <form
            onSubmit={handleSubmit}
            noValidate
            className="w-full"
          >

            {/* CORREO */}

            <div className="mb-7">

              <label
                htmlFor="email"
                className="mb-3 block text-sm font-bold text-[#68434a]"
              >
                Correo electrónico
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="ejemplo@correo.com"
                autoComplete="email"
                required
                className={`w-full rounded-xl border bg-[#fffaf8] px-5 py-4 text-sm text-[#68434a] outline-none transition placeholder:text-[#b8a3a3] focus:border-[#bd7888] focus:ring-4 focus:ring-[#f8e5e6] ${
                  touched.email && errors.email
                    ? "border-red-400"
                    : "border-[#efdee0]"
                }`}
              />

              {touched.email && errors.email && (
                <p className="mt-3 text-xs text-red-600">
                  ⚠ {errors.email}
                </p>
              )}

              {touched.email && !errors.email && (
                <p className="mt-3 text-xs font-medium text-green-700">
                  ✓ Correo válido
                </p>
              )}

            </div>


            {/* CONTRASEÑA */}

            <div className="mb-7">

              <label
                htmlFor="password"
                className="mb-3 block text-sm font-bold text-[#68434a]"
              >
                Contraseña
              </label>

              <div className="relative">

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Ingresa tu contraseña"
                  autoComplete="current-password"
                  maxLength={64}
                  required
                  className={`w-full rounded-xl border bg-[#fffaf8] px-5 py-4 pr-24 text-sm text-[#68434a] outline-none transition placeholder:text-[#b8a3a3] focus:border-[#bd7888] focus:ring-4 focus:ring-[#f8e5e6] ${
                    touched.password && errors.password
                      ? "border-red-400"
                      : "border-[#efdee0]"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#a96776] hover:text-[#68434a]"
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>

              </div>


              {/* REQUISITOS DE SEGURIDAD */}

              {(touched.password || form.password.length > 0) && (

                <div className="mt-5 rounded-2xl border border-[#f0dce0] bg-[#fffaf8] p-5">

                  <div className="mb-4 flex items-center justify-between">

                    <p className="text-xs font-bold text-[#68434a]">
                      Seguridad de tu contraseña
                    </p>

                    <span className="text-xs font-bold text-[#a96776]">
                      {progress}/5
                    </span>

                  </div>


                  {/* BARRA DE PROGRESO */}

                  <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-[#f0dce0]">

                    <div
                      className="h-full rounded-full bg-[#bd7888] transition-all duration-300"
                      style={{
                        width: `${(progress / 5) * 100}%`,
                      }}
                    />

                  </div>


                  {/* LISTA DE VALIDACIONES */}

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                    {passwordRules.map((rule, index) => (

                      <div
                        key={index}
                        className="flex items-center gap-2"
                      >

                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                            rule.valid
                              ? "bg-green-100 text-green-700"
                              : "bg-[#f0e8e8] text-[#a18b88]"
                          }`}
                        >
                          {rule.valid ? "✓" : "○"}
                        </span>

                        <span
                          className={`text-xs ${
                            rule.valid
                              ? "font-semibold text-green-700"
                              : "text-[#876f70]"
                          }`}
                        >
                          {rule.label}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              )}

              {touched.password && errors.password && (
                <p className="mt-3 text-xs text-red-600">
                  ⚠ {errors.password}
                </p>
              )}

            </div>


            {/* RECORDARME Y RECUPERACIÓN */}

            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

              <label className="flex cursor-pointer items-center gap-2 text-sm text-[#765d5b]">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 accent-[#bd7888]"
                />

                Recordarme

              </label>

              <Link
                to="/recuperar"
                className="text-sm font-semibold text-[#a96776] no-underline hover:text-[#68434a] hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </Link>

            </div>


            {/* MENSAJES */}

            {feedback && (

              <div
                role="alert"
                className={`mb-6 rounded-xl p-4 text-sm leading-6 ${
                  feedback.type === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {feedback.text}
              </div>

            )}


            {/* BOTÓN DE INGRESO */}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#a96776] px-6 py-4 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#80515b] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Verificando..." : "Iniciar sesión"}
            </button>

          </form>


          {/* REGISTRO */}

          <div className="mt-8 rounded-2xl bg-[#fff7f5] px-5 py-6 text-center">

            <p className="text-sm text-[#765d5b]">
              ¿Todavía no tienes una cuenta?
            </p>

            <Link
              to="/registro"
              className="mt-3 inline-block font-bold text-[#a96776] no-underline hover:text-[#68434a] hover:underline"
            >
              Crear una cuenta
            </Link>

          </div>


          {/* VOLVER AL INICIO */}

          <div className="mt-7 text-center">

            <Link
              to="/"
              className="text-sm text-[#876f70] no-underline transition hover:text-[#bd7888]"
            >
              ← Volver al inicio
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
};

export default Login;
