import React, { useState } from 'react';

function AddInfo({ onAddInfoSubmit }) {
    const [name, setName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [bloodType, setBloodType] = useState("");
    const [emergencyName, setEmergencyContact] = useState("");
    const [emergencyPhone, setEmergencyPhone] = useState("");
    const [emergencyRelation, setEmergencyRelation] = useState("");
    const [medicalConditions, setMedicalConditions] = useState("");
    const [allergies, setAllergies] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name.trim() || !birthdate.trim() || !bloodType.trim() || !emergencyName.trim() || !emergencyPhone.trim() || !emergencyRelation.trim()) {
            return alert("Preencha todos os campos obrigatórios!");
        }
        onAddInfoSubmit(name, birthdate, bloodType, emergencyName, emergencyPhone, emergencyRelation, medicalConditions, allergies);
        setName('');
        setBirthdate('');
        setBloodType('');
        setEmergencyContact('');
        setEmergencyPhone('');
        setEmergencyRelation('');
        setMedicalConditions('');
        setAllergies('');
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow">
                <div className="flex flex-col mb-2">
                    <label className="text-sm font-medium text-gray-700 mb-1">Nome completo:</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="text-sm font-medium text-gray-700 mb-1">Data de nascimento:</label>
                    <input
                        type="date"
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={birthdate}
                        onChange={(event) => setBirthdate(event.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="text-sm font-medium text-gray-700 mb-1">Tipo sanguíneo:</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={bloodType}
                        onChange={(event) => setBloodType(event.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="text-sm font-medium text-gray-700 mb-1">Contato de emergência:</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={emergencyName}
                        onChange={(event) => setEmergencyContact(event.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="text-sm font-medium text-gray-700 mb-1">Telefone de emergência:</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={emergencyPhone}
                        onChange={(event) => setEmergencyPhone(event.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="text-sm font-medium text-gray-700 mb-1">Relação com o contato de emergência:</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={emergencyRelation}
                        onChange={(event) => setEmergencyRelation(event.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="text-sm font-medium text-gray-700 mb-1">Condições médicas:</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={medicalConditions}
                        onChange={(event) => setMedicalConditions(event.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="text-sm font-medium text-gray-700 mb-1">Alergias:</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={allergies}
                        onChange={(event) => setAllergies(event.target.value)}
                    />
                </div>
                <div className="md:col-span-2 flex justify-center mt-2">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-lg shadow transition"
                    >
                        Salvar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddInfo;
