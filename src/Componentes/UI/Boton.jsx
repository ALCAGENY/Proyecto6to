export function Boton({ textoBoton = "Botón", className = "", onClick = () => {} }) {
  return (
    <button
      className={`text-xs sm:text-sm md:text-base lg:text-lg py-1 sm:py-2 px-4 sm:px-6 md:px-8 lg:px-10 rounded-full bg-ColorFondo bg-opacity-60 hover:bg-ColorFondo ${className}`}
      onClick={onClick}
    >
      {textoBoton}
    </button>
  );
}
