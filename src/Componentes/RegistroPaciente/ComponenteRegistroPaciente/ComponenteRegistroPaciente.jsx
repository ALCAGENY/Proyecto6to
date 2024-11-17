import { Contenedor } from "../../UI/Contenedor";
import DoctoraInformacion from "../../../assets/Imagenes/DoctoraInformacion.png";
import { FormularioRegistroPaciente } from "../FormularioRegistroPaciente/FormularioRegistroPaciente";

export function ComponenteRegistroPaciente() {
  return (
    <>
      <main className="h-screen w-full flex justify-center items-center">
        <Contenedor>
          <section className="bg-white h-full w-full flex rounded-3xl overflow-hidden">
            <fieldset className=" h-full w-2/6 flex justify-end items-center">
              <div className="bg-ColorFondo h-1/2 w-3/4 rounded-full ">
                <img src={DoctoraInformacion} alt="DoctoraInformacion" />
              </div>
            </fieldset>

            <fieldset className=" h-full w-2/3 flex justify-center items-center">
              <FormularioRegistroPaciente />
            </fieldset>
          </section>
        </Contenedor>
      </main>
    </>
  );
}
