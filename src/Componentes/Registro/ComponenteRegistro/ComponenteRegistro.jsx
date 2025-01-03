import { Contenedor } from "../../UI/Contenedor";
import { FormularioRegistro } from "../FormularioRegistro/FormularioRegistro";
import { Carrusel } from "../../UI/Carrusel";

export function ComponenteRegistro() {
  return (
    <>
      <main className="h-screen w-full flex justify-center items-center">
        <Contenedor>
          <section className="bg-white h-full w-full flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg">

            {/* Formulario */}
            <fieldset className="bg-ColorFondo h-1/2 md:h-full md:w-1/2 p-6 md:p-10 flex justify-center items-center">
              <div className="bg-white h-full w-full md:w-4/5 p-6 md:p-6 flex justify-center items-center rounded-3xl">
                <FormularioRegistro />
              </div>
            </fieldset>

            {/* Carrusel */}
            <fieldset className="h-1/2 md:h-full md:w-1/2 p-0 overflow-hidden">
              <Carrusel />
            </fieldset>

          </section>
        </Contenedor>
      </main>
    </>
  );
}
