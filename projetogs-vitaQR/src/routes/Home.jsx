import React, { useState, useRef } from "react";
import AddInfo from "../components/AddInfo";
import QRCode from "react-qr-code";

function Home() {
  const [qrData, setQrData] = useState(null);
  const qrRef = useRef();

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

  const handleDownload = () => {
    const svg = qrRef.current.querySelector("svg");
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const canvas = document.createElement("canvas");
    const img = new window.Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngFile;
      downloadLink.download = "qrcode.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
    img.src = "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent(svgString)));
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
          <div ref={qrRef} className="inline-block p-4 bg-gray-100 rounded-lg">
            <QRCode value={qrData} size={220} />
          </div>
          <div className="mt-4 flex flex-col items-center gap-2">
            <button
              onClick={handleDownload}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
            >
              Baixar QR Code
            </button>
            <a
              href={qrData}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
            >
              Acessar Link do QR Code
            </a>
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
