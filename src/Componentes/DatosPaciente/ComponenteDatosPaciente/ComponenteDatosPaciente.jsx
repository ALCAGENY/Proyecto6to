import { useState } from "react"; // Importa useState para manejar el estado del modal
import { ComponenteNavegacion } from "../../UI/Navegacion/ComponenteNavegacion/ComponenteNavegacion";
import { FormularioDatosPaciente } from "../FormularioDatosPaciente/FormularioDatosPaciente";
import { FormularioDatosFamiliar } from "../FormularioDatosFamiliar/FormularioDatosFamiliar";
import { ModalCrearDatosFamiliar } from "../../UI/Modal/ModalCrearDatosFamiliar"; // El modal que quieres mostrar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function ComponenteDatosPaciente() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

    const handleEditarDatosPaciente = () => {
        navigate("/EditarDatosPaciente");
    }

    const handleEditarDatosFamiliar = () => {
        navigate("/EditarDatosFamiliar");
    }

    const handleAgregarFamiliar = () => {
        setShowModal(true); // Muestra el modal cuando se haga clic en "Agregar"
    }

    const handleCloseModal = () => {
        setShowModal(false); // Cierra el modal
    }

    return (
        <>
            <main className="h-full w-full flex flex-col md:flex-row">
                <section className="w-full md:w-1/5 h-auto md:h-screen p-5 animate-fade-right animate-duration-[2000ms]">
                    <nav className="w-full h-full">
                        <ComponenteNavegacion />
                    </nav>
                </section>

                <section className="w-full md:w-4/5 h-auto md:h-screen p-10">
                    <fieldset className="w-full h-full">
                        <section className="bg-white px-5 flex text-center p-4 w-full h-20 animate-fade animate-duration-[3000ms]">
                            <fieldset className="w-full flex items-center justify-center animate-fade animate-duration-[3000ms]">
                                <FontAwesomeIcon icon={faUser} className="mr-2" />
                                Datos Paciente
                                <button className="ml-3 text-blue-500 hover:text-blue-700 transform transition-transform duration-400 hover:scale-105" onClick={handleEditarDatosPaciente}>
                                    <FontAwesomeIcon icon={faEdit} className="ml-1" />
                                    Editar
                                </button>
                            </fieldset>
                            <div className="w-px bg-gray-300 mx-4"></div>
                            <fieldset className="w-full flex items-center justify-center bg-white animate-fade animate-duration-[3000ms]">
                                <FontAwesomeIcon icon={faUser} className="mr-2" />
                                Datos Familiar
                                <button className="ml-3 text-blue-500 hover:text-blue-700 transform transition-transform duration-400 hover:scale-105" onClick={handleAgregarFamiliar}>
                                    <FontAwesomeIcon icon={faEdit} className="ml-4" />
                                    Agregar
                                </button>
                                <button className="ml-3 text-blue-500 hover:text-blue-700 transform transition-transform duration-400 hover:scale-105" onClick={handleEditarDatosFamiliar}>
                                    <FontAwesomeIcon icon={faEdit} className="ml-4" />
                                    Editar
                                </button>
                            </fieldset>
                        </section>

                        <section className="bg-white mt-10 p-5 w-full h-4/5 flex animate-fade animate-duration-[3000ms]">
                            <fieldset className="bg-white w-full animate-fade animate-duration-[3000ms]">
                                <FormularioDatosPaciente />
                            </fieldset>
                            <div className="w-px bg-gray-300 mx-4"></div>
                            <fieldset className="bg-white w-full animate-fade animate-duration-[3000ms]">
                                <FormularioDatosFamiliar />
                            </fieldset>
                        </section>
                    </fieldset>
                </section>
            </main>

            {/* Modal que se muestra cuando showModal es true */}
            {showModal && (
                <ModalCrearDatosFamiliar onClose={handleCloseModal} />
            )}
        </>
    );
}