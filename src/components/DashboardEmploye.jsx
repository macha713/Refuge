import React, { useState } from "react";

const DashboardEmploye = () => {
  const [feature, setFeature] = useState("dashboard");

  // Statistiques (exemple, à remplacer par fetch depuis ton API)
  const stats = {
    animauxTotal: 10,
    animauxAdoptes: 4,
    animauxDisponibles: 6,
    personnesAdoptees: 3,
    demandesNonTraitees: 2,
    donsDernieresSemaines: 5,
  };

  // Données exemples pour les listes
  const animaux = [
    {
      id: 1,
      image: "",
      nom: "Max",
      espece: "Chien",
      sexe: "M",
      etat: "Sain",
      statut: "Disponible",
    },
  ];

  const demandes = [
    {
      id: 1,
      nom: "Dupont",
      prenom: "Jean",
      animal: "Max",
      date: "2025-12-18",
      statut: "Pas encore traitée",
    },
  ];

  const familles = [
    {
      id: 1,
      nom: "Durand",
      prenom: "Marie",
      tel: "12345678",
      adresse: "Rue 1",
      email: "marie@example.com",
      nbAnimauxAdoptes: 1,
    },
  ];

  const adoptions = [
    {
      id: 1,
      nom: "Durand",
      prenom: "Marie",
      animal: "Max",
      certificat: "certificat1.pdf",
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <button
          className="mb-2 text-left"
          onClick={() => setFeature("dashboard")}
        >
          Dashboard
        </button>
        <button
          className="mb-2 text-left"
          onClick={() => setFeature("gestion_animaux")}
        >
          Gestion des animaux
        </button>
        <button
          className="mb-2 text-left"
          onClick={() => setFeature("gestion_demandes")}
        >
          Gestion des demandes
        </button>
        <button
          className="mb-2 text-left"
          onClick={() => setFeature("gestion_familles")}
        >
          Gestion des familles intéressées
        </button>
        <button
          className="mb-2 text-left"
          onClick={() => setFeature("gestion_adoptions")}
        >
          Gestion des adoptions
        </button>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 p-6 overflow-auto">
        {feature === "dashboard" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-white shadow rounded">
                Animaux total: {stats.animauxTotal}
              </div>
              <div className="p-4 bg-white shadow rounded">
                Animaux adoptés: {stats.animauxAdoptes}
              </div>
              <div className="p-4 bg-white shadow rounded">
                Animaux disponibles: {stats.animauxDisponibles}
              </div>
              <div className="p-4 bg-white shadow rounded">
                Personnes ayant adopté: {stats.personnesAdoptees}
              </div>
              <div className="p-4 bg-white shadow rounded">
                Demandes non traitées: {stats.demandesNonTraitees}
              </div>
              <div className="p-4 bg-white shadow rounded">
                Dons dernières semaines: {stats.donsDernieresSemaines}
              </div>
            </div>
          </div>
        )}

        {feature === "gestion_animaux" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Gestion des animaux</h2>
            <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
              Ajouter un animal
            </button>
            <table className="min-w-full bg-white shadow rounded">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Image</th>
                  <th className="border px-4 py-2">Nom</th>
                  <th className="border px-4 py-2">Espèce</th>
                  <th className="border px-4 py-2">Sexe</th>
                  <th className="border px-4 py-2">Etat</th>
                  <th className="border px-4 py-2">Statut</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {animaux.map((a) => (
                  <tr key={a.id}>
                    <td className="border px-4 py-2">
                      <img
                        src={a.image}
                        alt={a.nom}
                        className="w-16 h-16 object-cover"
                      />
                    </td>
                    <td className="border px-4 py-2">{a.nom}</td>
                    <td className="border px-4 py-2">{a.espece}</td>
                    <td className="border px-4 py-2">{a.sexe}</td>
                    <td className="border px-4 py-2">{a.etat}</td>
                    <td className="border px-4 py-2">{a.statut}</td>
                    <td className="border px-4 py-2">
                      <button className="mr-2 px-2 py-1 bg-green-500 text-white rounded">
                        Voir
                      </button>
                      <button className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded">
                        Modifier
                      </button>
                      <button className="px-2 py-1 bg-red-500 text-white rounded">
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Gestion des demandes */}
        {feature === "gestion_demandes" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Gestion des demandes</h2>
            <table className="min-w-full bg-white shadow rounded">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Nom</th>
                  <th className="border px-4 py-2">Prénom</th>
                  <th className="border px-4 py-2">Animal</th>
                  <th className="border px-4 py-2">Date</th>
                  <th className="border px-4 py-2">Statut</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {demandes.map((d) => (
                  <tr key={d.id}>
                    <td className="border px-4 py-2">{d.nom}</td>
                    <td className="border px-4 py-2">{d.prenom}</td>
                    <td className="border px-4 py-2">{d.animal}</td>
                    <td className="border px-4 py-2">{d.date}</td>
                    <td className="border px-4 py-2">{d.statut}</td>
                    <td className="border px-4 py-2">
                      {d.statut === "Pas encore traitée" && (
                        <>
                          <button className="mr-2 px-2 py-1 bg-red-500 text-white rounded">
                            Refuser
                          </button>
                          <button className="px-2 py-1 bg-green-500 text-white rounded">
                            Accepter
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Gestion des familles */}
        {feature === "gestion_familles" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Gestion des familles intéressées
            </h2>
            <table className="min-w-full bg-white shadow rounded">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Nom</th>
                  <th className="border px-4 py-2">Prénom</th>
                  <th className="border px-4 py-2">Téléphone</th>
                  <th className="border px-4 py-2">Adresse</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Nb Animaux adoptés</th>
                </tr>
              </thead>
              <tbody>
                {familles.map((f) => (
                  <tr key={f.id}>
                    <td className="border px-4 py-2">{f.nom}</td>
                    <td className="border px-4 py-2">{f.prenom}</td>
                    <td className="border px-4 py-2">{f.tel}</td>
                    <td className="border px-4 py-2">{f.adresse}</td>
                    <td className="border px-4 py-2">{f.email}</td>
                    <td className="border px-4 py-2">{f.nbAnimauxAdoptes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Gestion des adoptions */}
        {feature === "gestion_adoptions" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Gestion des adoptions</h2>
            <table className="min-w-full bg-white shadow rounded">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Nom</th>
                  <th className="border px-4 py-2">Prénom</th>
                  <th className="border px-4 py-2">Animal adopté</th>
                  <th className="border px-4 py-2">Certificat PDF</th>
                </tr>
              </thead>
              <tbody>
                {adoptions.map((a) => (
                  <tr key={a.id}>
                    <td className="border px-4 py-2">{a.nom}</td>
                    <td className="border px-4 py-2">{a.prenom}</td>
                    <td className="border px-4 py-2">{a.animal}</td>
                    <td className="border px-4 py-2">
                      <a
                        href={a.certificat}
                        target="_blank"
                        className="text-blue-500 underline"
                      >
                        Voir certificat
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardEmploye;
