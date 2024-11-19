import { ComponenteNavegacion } from "../../UI/Navegacion/ComponenteNavegacion/ComponenteNavegacion";
import { CardRadioGrama } from "../CardRadiograma/CardRadioGrama";
import CardTemperatura from "../CardTemperatura/CardTemperatura";
import { CardOxigenacion } from "../CardOxigenacion/CardOxigenacion";

export function ComponenteMonitoreo() {
  return (
    <main className="h-full w-full flex flex-col md:flex-row">
      <section className="w-full md:w-1/5 h-auto md:h-screen p-5 animate-fade-right animate-duration-[2000ms]">
        <nav className="w-full h-full">
          <ComponenteNavegacion />
        </nav>
      </section>

      <section className="w-full md:w-4/5 h-auto md:h-screen p-9">
        <fieldset className="w-full h-full">
          <section className="px-5 animate-fade animate-duration-[3000ms]">
            <fieldset className="w-full flex flex-col md:flex-row h-auto md:h-2/3 gap-20">
             
              <fieldset className="w-full md:w-1/3 bg-white rounded-full shadow-md p-5 flex flex-col items-center justify-center">
                <div className="text-red-500 text-5xl animate-pulse">
                  ❤️
                </div>
                <p className="text-lg mt-2 font-bold">Datos Cardiograma</p>
                <span className="text-3xl font-bold">72 BPM</span>
              </fieldset>

          
              <fieldset className="w-full md:w-1/3 bg-white rounded-full shadow-md p-5 flex flex-col items-center justify-center">
                <div className="text-blue-500 text-5xl">
                  🌡️
                </div>
                <p className="text-lg mt-2 font-bold">Datos Temperatura</p>
                <span className="text-3xl font-bold">36.6 °C</span>
              </fieldset>

          
              <fieldset className="w-full md:w-1/3 bg-white rounded-full shadow-md p-5 flex flex-col items-center justify-center">
                <div className="text-purple-500 text-5xl">
                🩸🩸
                </div>
                <p className="text-lg mt-2 font-bold">Datos Oxigenación</p>
                <span className="text-3xl font-bold">98%</span>
              </fieldset>
            </fieldset>
          </section>

     
          <section className="flex flex-col md:flex-row h-auto md:h-2/3 mt-9 gap-5 animate-fade animate-duration-[3000ms]">
            <fieldset className="w-full md:w-1/3">
              <CardRadioGrama />
            </fieldset>
            <fieldset className="w-full md:w-1/3 flex items-center justify-center bg-white">
              <CardTemperatura />
            </fieldset>
            <fieldset className="w-full md:w-1/3">
              <CardOxigenacion />
            </fieldset>
          </section>
        </fieldset>
      </section>
    </main>
  );
}
