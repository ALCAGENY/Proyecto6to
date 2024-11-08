import GraficaDeMonitoreo from "../../../assets/Imagenes/GraficaDeMonitoreo.png"

export function CardGraficas() {
  return (
    <>
      <main className="bg-ColorFondo w-2/5 p-1">
        <div>
            <img  src={GraficaDeMonitoreo} alt="GraficaDeMonitoreo" />
        </div>
      </main>
    </>
  );
}
