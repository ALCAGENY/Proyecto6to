import { useState, useEffect } from 'react';

export function FormularioDatosPaciente() {
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener los datos del paciente
    const fetchPatientData = async () => {
      const token = localStorage.getItem('token'); // Recupera el token de localStorage
      const userId = localStorage.getItem('userId'); // Recupera el ID del usuario (userId) de localStorage

      if (!token || !userId) {
        setError("No se encontró un token de autenticación o ID de usuario");
        return;
      }

      try {
        const response = await fetch(`http://easycode-socket.dreamapp.com.mx/api/v1/user/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Agregar token al header
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener los datos del paciente');
        }

        const data = await response.json();
        setPatientData(data); // Almacena los datos del paciente
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPatientData();
  }, []); // El efecto se ejecuta solo una vez cuando el componente se monta

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!patientData) {
    return <p>Cargando...</p>;
  }

  return (
    <main className="w-full h-full p-5">
      <section className="w-full h-full">
        <main>
          <section className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <p className="text-sm font-medium">Nombre</p>
              <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">
                {patientData.nombre}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Apellido Paterno</p>
              <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">
                {patientData.apellido_p}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Apellido Materno</p>
              <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">
                {patientData.apellido_m}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Edad</p>
              <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">
                {patientData.edad}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <p className="text-sm font-medium">Género</p>
              <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">
                {patientData.genero}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Altura CM</p>
              <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">
                {patientData.altura}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Peso KG</p>
              <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">
                {patientData.peso}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Estado</p>
              <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">
                {patientData.estado}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium">Municipio</p>
              <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">
                {patientData.municipio}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Correo</p>
              <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">
                {patientData.correo}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Número de Teléfono</p>
              <div className="bg-ColorFondo rounded-full p-2 text-center transform transition-transform duration-400 hover:scale-105">
                {patientData.telefono}
              </div>
            </div>
          </section>
        </main>
      </section>
    </main>
  );
}
