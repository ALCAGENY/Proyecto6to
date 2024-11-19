import { Contenedor } from "../../UI/Contenedor";
import DoctoraInformacion from "../../../assets/Imagenes/DoctoraInformacion.png";
import { Titulos } from "../../UI/Texto";
import { Parrafos } from "../../UI/Texto";
import { InpuT } from "../../UI/InpuT";
import { Boton } from "../../UI/Boton";

export function EditarDatosPaciente() {
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

            <main className="w-2/3 h-full p-5">
              <section className="w-full h-full p-3">
                <main>
                  <div className=" flex items-center justify-center gap-96">
                    <div className="text-center">
                      <Titulos textoTitulo="Editar Datos Del Paciente" />
                    </div>
                    <div className="">
                      <button
                        className="text-red-600 hover:text-red-300 transition duration-300"
                        aria-label="Cerrar"
                        onClick={() => {
                          /* lógica de cierre aquí */
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  <section className="grid grid-cols-2 gap-x-20 gap-y-3  mt-5">
                    <div>
                      <Parrafos
                        textoParrafo="Nombre"
                        className="text-sm font-medium"
                      />
                      <InpuT
                        type="text"
                        className="bg-ColorFondo rounded-full p-2 transform transition-transform duration-400 hover:scale-105"
                      />
                    </div>

                    <div>
                      <Parrafos
                        textoParrafo="Apellido Paterno"
                        className="text-sm font-medium"
                      />
                      <InpuT
                        type="text"
                        className="bg-ColorFondo rounded-full p-2  transform transition-transform duration-400 hover:scale-105"
                      />
                    </div>

                    <div>
                      <Parrafos
                        textoParrafo="Apellido Materno"
                        className="text-sm font-medium"
                      />
                      <InpuT
                        type="text"
                        className="bg-ColorFondo rounded-full p-2  transform transition-transform duration-400 hover:scale-105"
                      />
                    </div>

                    <div>
                      <Parrafos
                        textoParrafo="Edad"
                        className="text-sm font-medium"
                      />
                      <InpuT
                        type="text"
                        className="bg-ColorFondo rounded-full p-2  transform transition-transform duration-400 hover:scale-105"
                      />
                    </div>

                    <div>
                      <Parrafos
                        textoParrafo="Genero"
                        className="text-sm font-medium"
                      />
                      <InpuT
                        type="text"
                        className="bg-ColorFondo rounded-full p-2  transform transition-transform duration-400 hover:scale-105"
                      />
                    </div>

                    <div>
                      <Parrafos
                        textoParrafo="Altura"
                        className="text-sm font-medium"
                      />
                      <InpuT
                        type="text"
                        className="bg-ColorFondo rounded-full p-2  transform transition-transform duration-400 hover:scale-105"
                      />
                    </div>

                    <div>
                      <Parrafos
                        textoParrafo="Peso"
                        className="text-sm font-medium"
                      />
                      <InpuT
                        type="text"
                        className="bg-ColorFondo rounded-full p-2  transform transition-transform duration-400 hover:scale-105"
                      />
                    </div>
                    <div>
                      <Parrafos
                        textoParrafo="Estado"
                        className="text-sm font-medium"
                      />
                      <InpuT
                        type="text"
                        className="bg-ColorFondo rounded-full p-2  transform transition-transform duration-400 hover:scale-105"
                      />
                    </div>

                    <div>
                      <Parrafos
                        textoParrafo="Municipio"
                        className="text-sm font-medium"
                      />
                      <InpuT
                        type="text"
                        className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105"
                      />
                    </div>

                    <div>
                      <Parrafos
                        textoParrafo="Numero de Telefono"
                        className="text-sm font-medium"
                      />
                      <InpuT
                        type="text"
                        className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105"
                      />
                    </div>
                  </section>
                  <div className="text-center mt-3">
                    <Boton textoBoton="Guardar" />
                  </div>
                </main>
              </section>
            </main>
          </section>
        </Contenedor>
      </main>
    </>
  );
}
