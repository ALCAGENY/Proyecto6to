import { Titulos } from "../../UI/Texto";

export function FormularioDatosDactor(){
    return(<>
      <main className="w-full h-full animate-fade animate-duration-[3000ms]">
        <section className="w-full h-full">
          <main>
          <div className="text-center">
        <Titulos textoTitulo="Datos Del Doctor" />
      </div>
            <section className="grid grid-cols-2 gap-6 mb-4 mt-24">
              <div>
                <p className="text-sm font-medium">Nombre</p>
                <div className="bg-ColorFondo rounded-full p-5 text-center transform transition-transform duration-400 hover:scale-105">
                  
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Especialidad</p>
                <div className="bg-ColorFondo rounded-full p-5 text-center transform transition-transform duration-400 hover:scale-105">
                  
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Telefono</p>
                <div className="bg-ColorFondo rounded-full p-5 text-center transform transition-transform duration-400 hover:scale-105">
                  
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Correo</p>
                <div className="bg-ColorFondo rounded-full p-5 text-center transform transition-transform duration-400 hover:scale-105">
                  
                </div>
              </div>
            </section>
          </main>
        </section>
      </main>
    </>
  );
}
