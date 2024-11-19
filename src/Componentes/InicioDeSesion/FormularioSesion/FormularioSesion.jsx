import { Titulos } from "../../UI/Texto";
import { Parrafos } from "../../UI/Texto";
import { Boton } from "../../UI/Boton";
import { InpuT } from "../../UI/InpuT";
import { useNavigate } from "react-router-dom";

export function FormularioSesion() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Inicio");
  };
  return (
    <>
      <section className="w-4/5">
        <div>
          <Titulos className="text-center" textoTitulo="Inicio De Sesion" />
        </div>
        <fieldset className="">
          <div className="mt-7">
            <Parrafos textoParrafo="correo" />
            <InpuT className="" type="text" />
          </div>
          <div className="mt-5">
            <Parrafos textoParrafo="contraseña" />
            <InpuT className="" type="text" />
          </div>
          <div className="mt-5 flex items-center justify-center gap-2 ">
            <Parrafos textoParrafo="No Tienes Cuenta?" />
            <a
              className="text-indigo-600 hover:text-indigo-400 text-xs sm:text-xs md:text-sm lg:text-base"
              href="/Registro"
            >
              Registrate
            </a>
          </div>
          <div className="text-center mt-7">
            <Boton textoBoton="LOG IN" onClick={handleNavigate} />
          </div>
        </fieldset>
      </section>
    </>
  );
}
