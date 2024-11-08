import { ComponenteNavegacion } from "../../UI/Navegacion/ComponenteNavegacion/ComponenteNavegacion";
import { CardGraficas } from "../CardPaginaDeInicio/CardGraficas";
import { Contenedor } from "../../UI/Contenedor";
import { CardDatos } from "../CardPaginaDeInicio/CardDatos";
import { Titulos } from "../../UI/Texto";

export function ComponentePaginaDeInicio() {
    return (
        <main className="h-full w-full py-14">
            <section className="h-full w-full flex justify-center">
                <nav className="h-full w-4/5">
                    <ComponenteNavegacion />
                </nav>
            </section>
            <section className="h-full w-full flex justify-center items-center mt-10">
                <Contenedor>
                    <section className="h-full w-full bg-white">
                        <div className="text-center p-10">
                            <Titulos textoTitulo="Datos De Monitoreo" />
                        </div>
                        <div className="flex">
                            <fieldset className="h-full w-1/4 bg-white p-5">
                                <CardDatos />
                                <CardDatos />
                                <CardDatos />   
                            </fieldset>
                            <fieldset className="h-full w-3/4 bg-white p-5">
                                <div className="flex gap-x-16 gap-y-5 flex-wrap">
                                    <CardGraficas />
                                    <CardGraficas />
                                    <CardGraficas />
                                </div>
                            </fieldset>
                        </div>
                    </section>
                </Contenedor>
            </section>
        </main>
    );
}
