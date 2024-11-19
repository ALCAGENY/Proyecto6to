import { ComponenteNavegacion } from "../UI/Navegacion/ComponenteNavegacion/ComponenteNavegacion"

export function ComponenteHistorial() {
  return (
    <>
      <main className="h-full w-full flex flex-col md:flex-row">
        <section className="w-full md:w-1/5 h-auto md:h-screen p-5 animate-fade-right animate-duration-[2000ms]">
          <nav className="w-full h-full">
            <ComponenteNavegacion />
          </nav>
        </section>

        <section className="w-full md:w-4/5 h-auto md:h-screen p-10">
          <fieldset className="w-full h-full">
            {/* Encabezado de la tabla */}
            <section className="bg-white px-5 flex text-center p-4 w-full h-20 animate-fade animate-duration-[3000ms]">
              <fieldset className="w-full flex items-center justify-center animate-fade animate-duration-[3000ms]">
                <table className="w-full text-center border-collapse">
                  <thead className="">
                    <tr>
                      <th className="border border-gray-200 p-2">Fecha</th>
                      <th className="border border-gray-200 p-2">Hora</th>
                      <th className="border border-gray-200 p-2">Signo Vital</th>
                      <th className="border border-gray-200 p-2">Valor</th>
                      <th className="border border-gray-200 p-2">Estado</th>
                      <th className="border border-gray-200 p-2">Comentario</th>
                      <th className="border border-gray-200 p-2">Método</th>
                    </tr>
                  </thead>
                </table>
              </fieldset>
            </section>

            {/* Cuerpo de la tabla con la información */}
            <section className="bg-white mt-10 p-5 w-full h-4/5 flex animate-fade animate-duration-[3000ms] overflow-y-auto">
              <fieldset className="bg-white w-full animate-fade animate-duration-[3000ms]">
                <table className="w-full text-center border-collapse">
                  <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-200 p-2">18/11/2024</td>
                      <td className="border border-gray-2000 p-2">14:00</td>
                      <td className="border border-gray-200 p-2">Cardiograma</td>
                      <td className="border border-gray-200 p-2">72 BPM</td>
                      <td className="border border-gray-200 p-2">Normal</td>
                      <td className="border border-gray-200 p-2">Sin observaciones</td>
                      <td className="border border-gray-200 p-2">Sensor</td>
                    </tr>
                  </tbody>
                </table>
              </fieldset>
            </section>
          </fieldset>
        </section>
      </main>
    </>
  );
}
