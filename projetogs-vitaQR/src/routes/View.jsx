import { useLocation } from "react-router-dom";

function View() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const name = params.get("name");
  const birthdate = params.get("birthdate");
  const bloodType = params.get("bloodType");
  const emergencyName = params.get("emergencyName");
  const emergencyPhone = params.get("emergencyPhone");
  const emergencyRelation = params.get("emergencyRelation");
  const medicalConditions = params.get("medicalConditions");
  const allergies = params.get("allergies");

  return (
    <div className="min-h-screen p-6 bg-gray-50 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Informações Médicas</h1>
      <div className="bg-white shadow p-4 rounded-lg space-y-2">
        <p>
          <strong>Nome:</strong> {name}
        </p>
        <p>
          <strong>Nascimento:</strong> {birthdate}
        </p>
        <p>
          <strong>Tipo sanguíneo:</strong> {bloodType}
        </p>
        <p>
          <strong>Contato de emergência:</strong> {emergencyName} (
          {emergencyRelation})
        </p>
        <p>
          <strong>Telefone:</strong> {emergencyPhone}
        </p>
        <p>
          <strong>Condições médicas:</strong> {medicalConditions || "Nenhuma"}
        </p>
        <p>
          <strong>Alergias:</strong> {allergies || "Nenhuma"}
        </p>
      </div>
    </div>
  );
}

export default View;
