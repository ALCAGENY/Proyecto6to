import { FormularioDatosPaciente } from "../FormularioDatosPaciente/FormularioDatosPaciente"

export function VisualizacionDatosPaciente(){
    return(<>
    <main className="w-full h-full p-5">
        <section className="w-full h-full">
            <FormularioDatosPaciente/>
        </section>
    </main>
    </>)
}