import { useLocation } from "react-router-dom";

function DisplayInfo() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const data = {
    name: params.get("name"),
    birthdate: params.get("birthdate"),
    bloodType: params.get("bloodType"),
    emergencyName: params.get("emergencyName"),
    emergencyPhone: params.get("emergencyPhone"),
    emergencyRelation: params.get("emergencyRelation"),
    medicalConditions: params.get("medicalConditions"),
    allergies: params.get("allergies"),
  };

  return (
    <div className="max-w-xl mx-auto p-4 text-black bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">Informações Médicas</h2>
      <ul className="space-y-2">
        <li><strong>Nome:</strong> {data.name}</li>
        <li><strong>Data de nascimento:</strong> {data.birthdate}</li>
        <li><strong>Tipo sanguíneo:</strong> {data.bloodType}</li>
        <li><strong>Contato de emergência:</strong> {data.emergencyName} ({data.emergencyRelation})</li>
        <li><strong>Telefone:</strong> {data.emergencyPhone}</li>
        <li><strong>Condições médicas:</strong> {data.medicalConditions || "Nenhuma"}</li>
        <li><strong>Alergias:</strong> {data.allergies || "Nenhuma"}</li>
      </ul>
    </div>
  );
}

export default DisplayInfo;
