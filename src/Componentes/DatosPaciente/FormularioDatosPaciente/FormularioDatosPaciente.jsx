export function FormularioDatosPaciente() {
    return (
        <>
        <main className="w-full h-full p-5">
        <section className="w-full h-full">
            <main>
            <section className="grid grid-cols-2 gap-6 mb-4">
                        <div>
                            <p className="text-sm font-medium">Nombre</p>
                            <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">Alexia</div>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Apellido Paterno</p>
                            <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">Ramirez</div>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Apellido Materno</p>
                            <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">Teran</div>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Edad</p>
                            <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">19</div>
                        </div>
                    </section>
                    
                    <section className="grid grid-cols-2 gap-6 mb-4">
                        <div>
                            <p className="text-sm font-medium">Género</p>
                            <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">Femenino</div>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Altura CM</p>
                            <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">160</div>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Peso</p>
                            <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">60 KG</div>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Estado</p>
                            <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">Activo</div>
                        </div>
                    </section>
                    
                    <section className="grid grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm font-medium">Municipio</p>
                            <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">Teran</div>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Correo</p>
                            <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">alexia@gmail.com</div>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Número de Teléfono</p>
                            <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">961-188-5966</div>
                        </div>
              </section>
            </main>
        </section>
    </main>
        </>
    );
}
