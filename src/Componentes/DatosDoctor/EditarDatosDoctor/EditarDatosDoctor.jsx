import { Titulos } from "../../UI/Texto";
import { Parrafos } from "../../UI/Texto";
import { InpuT } from "../../UI/InpuT";
import { Boton } from "../../UI/Boton";

export function EditarDatosDoctor(){
    return(<>
    <section className="w-full h-full animate-fade animate-duration-[2000ms]">
          <main>
          <div className="text-center">
        <Titulos textoTitulo="Editar Datos Del Doctor" />
      </div>
            <section className="grid grid-cols-2 gap-4 p-5 mt-10">
            <div>
                <Parrafos textoParrafo="Nombre" className="text-sm font-medium"/>
                <InpuT type="text" className="bg-ColorFondo rounded-full p-2 transform transition-transform duration-400 hover:scale-105"/>
              </div>

            <div>
                <Parrafos textoParrafo="Especialidad" className="text-sm font-medium"/>
                <InpuT type="text" className="bg-ColorFondo rounded-full p-2  transform transition-transform duration-400 hover:scale-105"/>
              </div>

              <div>
                <Parrafos textoParrafo="Telefono" className="text-sm font-medium"/>
                <InpuT type="text" className="bg-ColorFondo rounded-full p-2  transform transition-transform duration-400 hover:scale-105"/>
              </div>

              <div>
                <Parrafos textoParrafo="Correo" className="text-sm font-medium"/>
                <InpuT type="text" className="bg-ColorFondo rounded-full p-2  transform transition-transform duration-400 hover:scale-105"/>
              </div>      

            </section>
            <div className="text-center mt-10">
                <Boton textoBoton="Guardar"/>
            </div>
          </main>
        </section>
    </>)
}