import React, { useState } from "react";
import AddInfo from "../components/AddInfo";
import QRCode from "react-qr-code";

function Home() {
  const [qrData, setQrData] = useState(null);

  const handleAddInfoSubmit = (
    name,
    birthdate,
    bloodType,
    emergencyName,
    emergencyPhone,
    emergencyRelation,
    medicalConditions,
    allergies
  ) => {
    const params = new URLSearchParams({
      name,
      birthdate,
      bloodType,
      emergencyName,
      emergencyPhone,
      emergencyRelation,
      medicalConditions,
      allergies,
    });


    const url = `https://Lucascortizo.github.io/projetogs-VitaQR/#/view?${params.toString()}`;
    setQrData(url);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 bg-white rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-primary">
        Cadastro Médico de Emergência
      </h2>
      <AddInfo onAddInfoSubmit={handleAddInfoSubmit} />

      {qrData && (
        <div className="mt-10 text-center">
          <h3 className="text-lg font-medium mb-4">QR Code Gerado</h3>
          <div className="inline-block p-4 bg-gray-100 rounded-lg">
            <QRCode value={qrData} size={220} />
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Escaneie com qualquer celular
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
