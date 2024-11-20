import Carrusel0 from "../../assets/Imagenes/Carrusel0.jpeg";
import Carrusel1 from "../../assets/Imagenes/Carrusel1.jpeg";
import Carrusel2 from "../../assets/Imagenes/Carrusel2.jpeg";
import Carrusel3 from "../../assets/Imagenes/Carrusel3.jpeg";
import Carrusel4 from "../../assets/Imagenes/Carrusel4.jpeg.jpg";
import Carrusel5 from "../../assets/Imagenes/Carrusel5.jpeg";
import Carrusel6 from "../../assets/Imagenes/Carrusel6.jpeg.jpg";

export function Carrusel() {
  return (
    <main className="relative w-full h-full overflow-hidden">
      <div className="w-full h-full flex flex-nowrap">
        <div className="w-full h-full flex animate-slide-carousel">
          <img
            src={Carrusel0}
            alt="Carrusel 0"
            className="w-full object-cover h-full flex-shrink-0"
          />
          <img
            src={Carrusel1}
            alt="Carrusel 1"
            className="w-full object-cover h-full flex-shrink-0"
          />
          <img
            src={Carrusel2}
            alt="Carrusel 2"
            className="w-full object-cover h-full flex-shrink-0"
          />
          <img
            src={Carrusel3}
            alt="Carrusel 3"
            className="w-full object-cover h-full flex-shrink-0"
          />
          <img
            src={Carrusel4}
            alt="Carrusel 4"
            className="w-full object-cover h-full flex-shrink-0"
          />
          <img
            src={Carrusel5}
            alt="Carrusel 5"
            className="w-full object-cover h-full flex-shrink-0"
          />
          <img
            src={Carrusel6}
            alt="Carrusel 6"
            className="w-full object-cover h-full flex-shrink-0"
          />
        </div>
      </div>
    </main>
  );
}
