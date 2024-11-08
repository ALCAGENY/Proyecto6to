import { Titulos } from "../../UI/Texto";
import { Parrafos } from "../../UI/Texto";
import { InpuT } from "../../UI/InpuT";
import { Boton } from "../../UI/Boton";



export function FormularioRegistroPaciente() {
  


  return (
    <>
      <section className=" h-full w-full rounded-3xl p-10">
        <div>
          <Titulos textoTitulo="Registro De Datos Del Paciente" />
        </div>
        <div className="mt-10 flex gap-14">
          <section className="w-full md:w-1/2 space-y-4">
            <div>
              <Parrafos textoParrafo="correo" />
              <InpuT className="" type="text" placeholder="hola" />
            </div>
            <div>
              <Parrafos textoParrafo="correo" />
              <InpuT className="" type="text" placeholder="hola" />
            </div>
            <div>
              <Parrafos textoParrafo="correo" />
              <InpuT className="" type="text" placeholder="hola" />
            </div>
            <div>
              <Parrafos textoParrafo="correo" />
              <InpuT className="" type="text" placeholder="hola" />
            </div>
          </section>
          <section className="w-full md:w-1/2 space-y-4">
            <div>
              <Parrafos textoParrafo="correo" />
              <InpuT className="" type="text" placeholder="hola" />
            </div>
            <div>
              <Parrafos textoParrafo="correo" />
              <InpuT className="" type="text" placeholder="hola" />
            </div>
            <div>
              <Parrafos textoParrafo="correo" />
              <InpuT className="" type="text" placeholder="hola" />
            </div>
            <div>
              <Parrafos textoParrafo="correo" />
              <InpuT className="" type="text" placeholder="hola" />
            </div>
          </section>
        </div>
        <div className="mt-7 text-center">
          <Boton textoBoton="Siguiente" />
        </div>
      </section>
    </>
  );
}
