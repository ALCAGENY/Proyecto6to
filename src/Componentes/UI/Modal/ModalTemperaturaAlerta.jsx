import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import AlertaTemoeratura from "../../../assets/Imagenes/AlertaTemoeratura.png";
import { useNavigate } from 'react-router-dom';
import { Boton } from '../Boton';

export function ModalTemperaturaAlerta() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Monitoreos");
  };

  return (
    <>
      <main
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
        aria-modal="true"
        role="dialog"
      >
        <section className="bg-ColorFondo h-3/4 w-4/12 rounded-3xl flex justify-center items-center">
          <section className="bg-white h-4/5 w-4/5 flex justify-center p-4 rounded-3xl">
            <fieldset>
              <div className="flex justify-center">
                <img className="w-1/2" src={AlertaTemoeratura} alt="DoctorModal" />
              </div>
              <div className="p-10 text-center">
                <p className="text-yellow-500 text-2xl font-semibold">
                  <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
                  ¡Advertencia! Temperatura alta detectada.
                </p>
              </div>
              <div className="text-center">
                <Boton textoBoton="Volver" onClick={handleNavigate} />
              </div>
            </fieldset>
          </section>
        </section>
      </main>
    </>
  );
}
