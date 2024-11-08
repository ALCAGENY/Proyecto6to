export function Titulos(props) {
  const { textoTitulo, className = "" } = props;

  return (
    <h1
      className={`text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold ${className}`}
    >
      {textoTitulo}
    </h1>
  );
}

export function Parrafos(props) {
  const { textoParrafo, className = "" } = props;

  return (
    <p className={`text-xs sm:text-xs md:text-sm lg:text-base font-semibold ${className}`}>
      {textoParrafo}
    </p>
  );
}
