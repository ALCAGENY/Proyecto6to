import { Boton } from "../../Boton"

export function  LinkNavegacion(){
    return(<>
            <ul className="flex justify-center items-center gap-10">
                <div>
                   <a href="">Inicio</a>
                </div>
                <div>
                  <a href="">Datos</a>
                </div>
                <div>
                   <a href="">Informacion</a>
                </div>
                <div>
                  <a href="">Datos</a>
                </div>
                <div>
                  <a href="">Historial</a>
                </div>
                <div>
                  <a href="">Guia de Usuario</a>
                </div>
                <div>
                    <Boton textoBoton="Cerrar Sesion"/>
                </div>
            </ul>
    </>)
}