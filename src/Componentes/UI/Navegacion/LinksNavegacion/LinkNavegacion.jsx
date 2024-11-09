import { Boton } from "../../Boton";

export function LinkNavegacion() {
    return (
        <ul className="flex justify-center items-center gap-10">
            <div>
                <a href="/Inicio" className="relative group">
                    Inicio
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>
            <div>
                <a href="" className="relative group">
                    Datos
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>
            <div>
                <a href="" className="relative group">
                    Informacion
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>
            <div>
                <a href="" className="relative group">
                    Datos
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>
            <div>
                <a href="" className="relative group">
                    Historial
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>
            <div>
                <a href="" className="relative group">
                    Guia de Usuario
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>
            <div>
                <Boton textoBoton="Cerrar Sesion" />
            </div>
        </ul>
    );
}
