import { ComponenteNavegacion } from "../../UI/Navegacion/ComponenteNavegacion/ComponenteNavegacion";
import { CardRadioGrama } from "../CardRadiograma/CardRadioGrama";

export function ComponentePaginaDeInicio() {
  return (
    <main className=" h-full w-full flex">
      <section className="w-1/5 h-screen p-5 animate-fade-right animate-duration-[2000ms]">
        <nav className="w-full h-full">
          <ComponenteNavegacion />
        </nav>
      </section>

      <section className="w-4/5 h-screen p-5">
        <fieldset className="w-full h-full">
          <div className="bg-white w-full h-44"></div>

          <section className="mt-4 flex ">
            <fieldset className="w-2/5">
              <CardRadioGrama />
            </fieldset>
            <div className="w-1/5"></div>

            <fieldset className="w-2/5">
              <CardRadioGrama />
            </fieldset>
          </section>
        </fieldset>
      </section>
    </main>
  );
}
