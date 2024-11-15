import { ComponenteNavegacion } from "../../UI/Navegacion/ComponenteNavegacion/ComponenteNavegacion";
import { CardGraficas } from "../CardPaginaDeInicio/CardGraficas";
import { Contenedor } from "../../UI/Contenedor";
import { CardDatos } from "../CardPaginaDeInicio/CardDatos";
import { Titulos } from "../../UI/Texto";

export function ComponentePaginaDeInicio() {
  return (
    <main className="h-full w-full py-14">
      {/* Sección de navegación */}
      <section className="flex justify-center">
        <nav className="w-4/5">
          <ComponenteNavegacion />
        </nav>
      </section>

      {/* Sección de contenido principal */}
      <section className="flex justify-center items-center mt-10">
        <Contenedor>
          <section className="bg-white p-10">
            <div className="text-center">
              <Titulos textoTitulo="Datos De Monitoreo" />
            </div>

            <div className="flex">
              {/* Tarjetas de Datos */}
              <fieldset className="w-1/4 p-5 space-y-4">
                <CardDatos />
                <CardDatos />
                <CardDatos />
              </fieldset>

              {/* Tarjetas de Gráficas */}
              <fieldset className="bg-red-700  w-full p-5 flex gap-x-16 gap-y-5 flex-wrap">
                <CardGraficas />
              </fieldset>   
            </div>
          </section>
        </Contenedor>
      </section>
    </main>
  );
}
