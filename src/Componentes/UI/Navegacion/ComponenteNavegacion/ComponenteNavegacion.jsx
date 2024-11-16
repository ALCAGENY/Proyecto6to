import { LinkNavegacion } from "../LinksNavegacion/LinkNavegacion"
import Logo from "../../../../assets/Imagenes/Logoo.png"


export function ComponenteNavegacion(){
    return(<>
    <main>
        <section className="p-5 w-full h-full">
            <div className="w-full h-20">
                <img className="w-full h-full" src={Logo} alt="" />
            </div>
        </section>
        <section className="p-5 w-full h-full ">
           <LinkNavegacion/>
        </section>
    </main>
    </>)
}