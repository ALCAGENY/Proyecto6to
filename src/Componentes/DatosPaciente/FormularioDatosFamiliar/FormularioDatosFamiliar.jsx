import { useState, useEffect } from 'react';
import axios from 'axios';

export function FormularioDatosFamiliar() {
  const [contactData, setContactData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      if (!token || !userId) {
        setError("No se encontró un token de autenticación o ID de usuario");
        return;
      }

      try {
        const response = await axios.get(`https://easycode-api.dreamapp.com.mx/api/v1/emergency-contacts/${userId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        setContactData(response.data); // Asigna los datos al estado
      } catch (error) {
        setError(
          error.response?.data?.message || "Error al obtener los datos del contacto de emergencia"
        );
      }
    };

    fetchContactData();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!contactData) {
    return <p>Cargando...</p>;
  }

  return (
    <main className="w-full h-full p-5">
      <section className="w-full h-full">
        <main>
          <section className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <p className="text-sm font-medium">Nombre</p>
              <div className="bg-ColorFondo rounded-full p-5 text-center transform transition-transform duration-400 hover:scale-105">
                {contactData.nombre || "No disponible"}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Apellido Paterno</p>
              <div className="bg-ColorFondo rounded-full p-5 text-center transform transition-transform duration-400 hover:scale-105">
                {contactData.apellido_p || "No disponible"}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Apellido Materno</p>
              <div className="bg-ColorFondo rounded-full p-5 text-center transform transition-transform duration-400 hover:scale-105">
                {contactData.apellido_m || "No disponible"}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Teléfono</p>
              <div className="bg-ColorFondo rounded-full p-5 text-center transform transition-transform duration-400 hover:scale-105">
                {contactData.telefono || "No disponible"}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <p className="text-sm font-medium">Relación</p>
              <div className="bg-ColorFondo rounded-full p-5 text-center transform transition-transform duration-400 hover:scale-105">
                {contactData.relacion || "No disponible"}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Correo</p>
              <div className="bg-ColorFondo rounded-full p-5 text-center transform transition-transform duration-400 hover:scale-105">
                {contactData.correo || "No disponible"}
              </div>
            </div>
          </section>
        </main>
      </section>
    </main>
  );
}
