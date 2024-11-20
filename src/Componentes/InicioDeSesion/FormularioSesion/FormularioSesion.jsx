import { Titulos } from "../../UI/Texto";
import { Parrafos } from "../../UI/Texto";
import { Boton } from "../../UI/Boton";
import { InpuT } from "../../UI/InpuT";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function FormularioSesion() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const [errorCorreo, setErrorCorreo] = useState('');
  const [errorContrasena, setErrorContrasena] = useState('');
  const navigate = useNavigate();

  const handleCorreoChange = (event) => setCorreo(event.target.value);
  const handleContrasenaChange = (event) => setContrasena(event.target.value);

  // Validaciones de correo y contraseña
  const validateCorreo = (correo) => {
    const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return correoRegex.test(correo);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Limpiar errores previos
    setError('');
    setErrorCorreo('');
    setErrorContrasena('');

    // Validación de los campos
    if (!correo || !validateCorreo(correo)) {
      setErrorCorreo('Por favor ingresa un correo válido');
      return;
    }

    if (!contrasena) {
      setErrorContrasena('La contraseña no puede estar vacía');
      return;
    }

    // Crear el objeto con los datos para la API
    const userData = {
      correo,
      contrasena,
    };

    try {
      // Realizar la solicitud fetch a la API
      const response = await fetch('http://localhost:8081/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Error en la autenticación');
      }

      const data = await response.json();
      console.log('Login exitoso', data);

      // Guardar el token y el id en el localStorage
      localStorage.setItem('token', data.token);  // Guardamos el token
      localStorage.setItem('userId', data.id);    // Guardamos el id del usuario
      console.log('Token guardado en localStorage:', data.token);
      console.log('ID guardado en localStorage:', data.id);  // Consola el id guardado

      // Redirigir a la página de inicio
      navigate('/Monitoreos');
    } catch (error) {
      console.error(error);
      setError('Credenciales incorrectas o problema en la API');
    }
  };

  return (
    <>
      <section className="w-4/5">
        <div>
          <Titulos className="text-center" textoTitulo="Inicio De Sesion" />
        </div>
        <fieldset className="">
          <div className="mt-7">
            <Parrafos textoParrafo="Correo" />
            <InpuT
              type="email"
              value={correo}
              onChange={handleCorreoChange}
              className=""
            />
            {errorCorreo && <div className="text-red-500 mt-2">{errorCorreo}</div>}
          </div>
          <div className="mt-5">
            <Parrafos textoParrafo="Contraseña" />
            <InpuT
              type="password"
              value={contrasena}
              onChange={handleContrasenaChange}
              className=""
            />
            {errorContrasena && <div className="text-red-500 mt-2">{errorContrasena}</div>}
          </div>
          {error && (
            <div className="text-red-500 mt-2">
              {error}
            </div>
          )}
          <div className="mt-5 flex items-center justify-center gap-2 ">
            <Parrafos textoParrafo="¿No tienes cuenta?" />
            <a
              className="text-indigo-600 hover:text-indigo-400 text-xs sm:text-xs md:text-sm lg:text-base"
              href="/Registro"
            >
              Regístrate
            </a>
          </div>
          <div className="text-center mt-7">
            <Boton textoBoton="Iniciar Sesión" onClick={handleSubmit} />
          </div>
        </fieldset>
      </section>
    </>
  );
}