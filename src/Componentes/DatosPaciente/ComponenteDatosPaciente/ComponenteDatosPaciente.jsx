import { ComponenteNavegacion } from "../../UI/Navegacion/ComponenteNavegacion/ComponenteNavegacion"
import { FormularioDatosPaciente } from "../FormularioDatosPaciente/FormularioDatosPaciente"
import { FormularioDatosFamiliar } from "../FormularioDatosFamiliar/FormularioDatosFamiliar"

export function ComponenteDatosPaciente(){
    return(<>
    <main className="h-full w-full flex flex-col md:flex-row">
    <section className="w-full md:w-1/5 h-auto md:h-screen p-5 animate-fade-right animate-duration-[2000ms]">
        <nav className="w-full h-full">
          <ComponenteNavegacion />
        </nav>
      </section>

      <section className="w-full md:w-4/5 h-auto md:h-screen p-10">
      <fieldset className="w-full h-full">
        <section className=" bg-white px-5 flex text-center p-4 w-full h-20 animate-fade animate-duration-[3000ms]">
        <fieldset className="w-full animate-fade animate-duration-[3000ms]">
                Datos Paciente
            </fieldset>
            <div className="w-px bg-gray-300 mx-4"></div>
            <fieldset className=" bg-white w-full animate-fade animate-duration-[3000ms]">
                Datos Farmiliar
            </fieldset>
        </section>
        
        <section className="bg-white mt-10 p-5 w-full h-4/5 flex animate-fade animate-duration-[3000ms]">
        <fieldset className="bg-white w-full animate-fade animate-duration-[3000ms]">
                <FormularioDatosPaciente/>
            </fieldset>
            <div className="w-px bg-gray-300 mx-4"></div>
            <fieldset className=" bg-white w-full animate-fade animate-duration-[3000ms]">
                <FormularioDatosFamiliar/>
            </fieldset>
        </section>
      </fieldset>
      </section>
    </main>
    </>)
}