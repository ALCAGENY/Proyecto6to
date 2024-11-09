import { LinkNavegacion } from "../LinksNavegacion/LinkNavegacion"
import Logo from "../../../../assets/Imagenes/Logoo.png"


export function ComponenteNavegacion(){
    return(<>
    <main >
        <section className="bg-white h-full w-full rounded-full flex justify-center gap-12">
            <div className=" w-1/5 h-20 rounded-full">
                <img className="w-full h-full rounded-full" src={Logo} alt="Logo.png" />
            </div>
            <div className="flex">
                <LinkNavegacion/>
            </div>
        </section>
    </main>
    </>)
}