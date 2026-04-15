import { useState } from "react";
import { Heart, Users, ChevronRight } from "lucide-react";

const initialAnimals = [
  {
    id: 1,
    nom: "Tutto",
    espece: "Chien",
    sexe: "Mâle",
    age: 3,
    etat: "disponible",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400",
  },
  {
    id: 2,
    nom: "Luna",
    espece: "Chat",
    sexe: "Femelle",
    age: 2,
    etat: "disponible",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400",
  },
  {
    id: 3,
    nom: "Max",
    espece: "Chien",
    sexe: "Mâle",
    age: 5,
    etat: "disponible",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400",
  },
  {
    id: 4,
    nom: "Mimi",
    espece: "Chat",
    sexe: "Femelle",
    age: 1,
    etat: "adopté",
    image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400",
  },
];

const admins = [
  {
    nom: "Sophie Martin",
    role: "Directrice",
    depuis: "2018",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
  },
  {
    nom: "Jean Dupont",
    role: "Vétérinaire",
    depuis: "2019",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
  },
  {
    nom: "Marie Laurent",
    role: "Responsable adoptions",
    depuis: "2020",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
  },
];

const communaute = [
  ...admins,
  {
    nom: "Pierre Rousseau",
    role: "Bénévole",
    depuis: "2021",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
  },
  {
    nom: "Claire Bernard",
    role: "Bénévole",
    depuis: "2022",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
  },
  {
    nom: "Thomas Petit",
    role: "Bénévole",
    depuis: "2023",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
  },
];

export default function App() {
  const [page, setPage] = useState("accueil");
  const [filtreAnimal, setFiltreAnimal] = useState("tous");
  const [currentUser, setCurrentUser] = useState(null);
  const [animals, setAnimals] = useState(initialAnimals);
  //const [animals] = useState(initialAnimals);
  const [adoptions, setAdoptions] = useState([]);

  const [employees] = useState([
    {
      id: 1,
      username: "admin",
      password: "admin123",
      role: "admin",
      nom: "Sophie Martin",
    },
    {
      id: 2,
      username: "employe1",
      password: "emp123",
      role: "employe",
      nom: "Jean Dupont",
    },
  ]);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "user1",
      password: "user123",
      email: "user1@email.com",
      nom: "Dupont",
      prenom: "Alice",
    },
  ]);
  const [demandes, setDemandes] = useState([]);
  const [dons, setDons] = useState([]);
  const [employeePage, setEmployeePage] = useState("dashboard");

  const animauxDisponibles = animals.filter((a) => a.etat === "disponible");

  const Header = () => (
    <header className="bg-gradient-to-r from-purple-200 to-pink-200 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => setPage("accueil")}
        >
          <div className="text-4xl">🐾</div>
          <h1 className="text-3xl font-bold text-purple-800">PawPaw</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <button
            onClick={() => setPage("accueil")}
            className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
          >
            Accueil
          </button>
          {!currentUser && (
            <button
              onClick={() => setPage("login-choice")}
              className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
            >
              Se connecter
            </button>
          )}
          {currentUser && (
            <button
              onClick={() => {
                setCurrentUser(null);
                setPage("accueil");
              }}
              className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
            >
              Déconnexion
            </button>
          )}
          <button
            onClick={() => setPage("liste-animaux")}
            className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
          >
            Liste des animaux
          </button>
          <button
            onClick={() => setPage("communaute")}
            className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
          >
            Notre communauté
          </button>
        </nav>
      </div>
    </header>
  );

  const Footer = () => (
    <footer className="bg-purple-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg">© 2024 PawPaw - Tous droits réservés</p>
        <p className="mt-2 text-purple-200">Centre de refuge pour animaux</p>
      </div>
    </footer>
  );

  const PageAccueil = () => (
    <div>
      <div className="container mx-auto px-4 py-12">
        {/* Section Hero avec Tutto */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-purple-800 mb-4">
              C'est Tutto
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              qui a été sauvé par le centre en 2023. Aidez ces animaux à trouver
              une famille aimante et un foyer chaleureux. Chaque adoption change
              une vie.
            </p>
            <button
              onClick={() =>
                currentUser ? setPage("dashboard-user") : setPage("signup")
              }
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-xl font-bold hover:shadow-lg transition transform hover:scale-105"
            >
              Devenir un HERO
            </button>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800"
              alt="Tutto"
              className="rounded-3xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Section Qui sommes-nous, Notre but, Comment aider */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-purple-100 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-purple-800 mb-3">
              Qui sommes-nous?
            </h3>
            <p className="text-gray-700 mb-4">
              Fondé en 2018 par Sophie Martin, PawPaw est un refuge dédié à la
              protection et au bien-être des animaux abandonnés.
            </p>
            <button
              onClick={() => setPage("communaute")}
              className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
            >
              Savoir plus
            </button>
          </div>
          <div className="bg-pink-100 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-purple-800 mb-3">
              Notre but
            </h3>
            <p className="text-gray-700">
              Offrir une seconde chance à chaque animal en détresse et leur
              trouver des familles aimantes qui prendront soin d'eux pour toute
              leur vie.
            </p>
          </div>
          <div className="bg-purple-100 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-purple-800 mb-3">
              Comment vos aides les aident
            </h3>
            <p className="text-gray-700">
              Vos dons permettent de nourrir, soigner et héberger les animaux en
              attendant leur adoption. Chaque contribution compte.
            </p>
          </div>
        </div>

        {/* Section Animaux disponibles */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-purple-800 mb-6">
            Les animaux disponibles
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {animauxDisponibles.slice(0, 3).map((animal) => (
              <div
                key={animal.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition"
              >
                <img
                  src={animal.image}
                  alt={animal.nom}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-xl font-bold text-purple-800">
                    {animal.nom}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              setFiltreAnimal("disponible");
              setPage("liste-animaux");
            }}
            className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition flex items-center mx-auto"
          >
            Voir plus <ChevronRight className="ml-2" />
          </button>
        </div>

        {/* Section Can't adopt? */}
        <div className="bg-gradient-to-r from-purple-200 to-pink-200 p-8 rounded-3xl mb-16">
          <h3 className="text-3xl font-bold text-purple-800 mb-6 text-center">
            Vous ne pouvez pas adopter?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-purple-800 mb-2">
                1. Donner des dons
              </h4>
              <p className="text-gray-700">
                Aidez-nous financièrement à prendre soin des animaux
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Users className="w-12 h-12 text-purple-500 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-purple-800 mb-2">
                2. Devenir bénévole
              </h4>
              <p className="text-gray-700">
                Rejoignez notre équipe et donnez de votre temps
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mx-auto mb-3">🐾</div>
              <h4 className="text-xl font-bold text-purple-800 mb-2">
                3. Partager
              </h4>
              <p className="text-gray-700">
                Faites connaître PawPaw autour de vous
              </p>
            </div>
          </div>
          <button
            onClick={() =>
              currentUser ? setPage("dashboard-user") : setPage("signup")
            }
            className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-xl font-bold hover:shadow-lg transition transform hover:scale-105 mx-auto block"
          >
            Devenir un HERO
          </button>
        </div>

        {/* Section Équipe administrative */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-purple-800 mb-6 text-center">
            Notre équipe administrative
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {admins.map((admin, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition"
              >
                <img
                  src={admin.photo}
                  alt={admin.nom}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h4 className="text-xl font-bold text-purple-800">
                  {admin.nom}
                </h4>
                <p className="text-purple-600 font-semibold">{admin.role}</p>
                <p className="text-gray-600">Depuis {admin.depuis}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setPage("communaute")}
            className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition mx-auto block"
          >
            Savoir plus
          </button>
        </div>
      </div>
    </div>
  );

  const PageListeAnimaux = () => {
    const animauxFiltres =
      filtreAnimal === "tous"
        ? animals
        : animals.filter((a) => a.etat === filtreAnimal);

    return (
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-purple-800 mb-8">
          Liste des animaux
        </h2>

        {/* Filtres */}
        <div className="mb-8 flex space-x-4">
          <button
            onClick={() => setFiltreAnimal("tous")}
            className={`px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 ${
              filtreAnimal === "tous"
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-purple-200 text-purple-800 hover:bg-purple-300"
            }`}
          >
            Tous ({animals.length})
          </button>
          <button
            onClick={() => setFiltreAnimal("disponible")}
            className={`px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 ${
              filtreAnimal === "disponible"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-green-200 text-green-800 hover:bg-green-300"
            }`}
          >
            Disponibles ({animals.filter((a) => a.etat === "disponible").length}
            )
          </button>
          <button
            onClick={() => setFiltreAnimal("adopté")}
            className={`px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 ${
              filtreAnimal === "adopté"
                ? "bg-red-600 text-white shadow-lg"
                : "bg-red-200 text-red-800 hover:bg-red-300"
            }`}
          >
            Adoptés ({animals.filter((a) => a.etat === "adopté").length})
          </button>
        </div>

        {/* Grille des animaux */}
        <div className="grid md:grid-cols-4 gap-6">
          {animauxFiltres.map((animal) => (
            <div
              key={animal.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition"
            >
              <img
                src={animal.image}
                alt={animal.nom}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-bold text-purple-800 mb-2">
                  {animal.nom}
                </h4>
                <p className="text-gray-600">
                  <span className="font-semibold">Sexe:</span> {animal.sexe}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Âge:</span> {animal.age} ans
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Espèce:</span> {animal.espece}
                </p>
                <div className="mt-3">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-bold ${
                      animal.etat === "disponible"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {animal.etat.charAt(0).toUpperCase() + animal.etat.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun animal */}
        {animauxFiltres.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-600">
              Aucun animal trouvé dans cette catégorie.
            </p>
          </div>
        )}
      </div>
    );
  };

  const PageLoginChoice = () => (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-purple-800 mb-8 text-center">
        Choisissez votre type de connexion
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <button
          onClick={() => setPage("login-employee")}
          className="bg-gradient-to-r from-purple-400 to-purple-600 p-12 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition text-white"
        >
          <Users className="w-20 h-20 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-2">Employé</h3>
          <p className="mt-2 text-lg">Accès réservé au personnel du centre</p>
        </button>
        <button
          onClick={() => setPage("login-user")}
          className="bg-gradient-to-r from-pink-400 to-pink-600 p-12 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition text-white"
        >
          <Heart className="w-20 h-20 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-2">Utilisateur</h3>
          <p className="mt-2 text-lg">Pour adopter ou faire un don</p>
        </button>
      </div>
    </div>
  );

  const PageLoginEmployee = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
      const emp = employees.find(
        (e) => e.username === username && e.password === password
      );
      if (emp) {
        setCurrentUser({ ...emp, type: "employee" });
        setPage("dashboard-employee");
        setEmployeePage("dashboard");
      } else {
        setError("Identifiants incorrects");
      }
    };

    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-2xl">
          <div className="text-center mb-6">
            <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-purple-800">
              Connexion Employé
            </h2>
            <p className="text-gray-600 mt-2">Accès réservé au personnel</p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Entrez votre username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition"
            >
              Se connecter
            </button>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setPage("login-choice")}
              className="text-purple-600 hover:text-purple-800 font-semibold"
            >
              ← Retour au choix
            </button>
          </div>

          <div className="mt-6 p-4 bg-purple-50 rounded-xl">
            <p className="text-sm text-gray-600 font-semibold">
              Comptes de test :
            </p>
            <p className="text-xs text-gray-500">Admin: admin / admin123</p>
            <p className="text-xs text-gray-500">Employé: employe1 / emp123</p>
          </div>
        </div>
      </div>
    );
  };

  const PageLoginUser = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
      const usr = users.find(
        (u) => u.username === username && u.password === password
      );
      if (usr) {
        setCurrentUser({ ...usr, type: "user" });
        setPage("dashboard-user");
      } else {
        setError("Identifiants incorrects");
      }
    };

    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-2xl">
          <div className="text-center mb-6">
            <Heart className="w-16 h-16 text-pink-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-purple-800">
              Connexion Utilisateur
            </h2>
            <p className="text-gray-600 mt-2">
              Connectez-vous pour adopter ou donner
            </p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Entrez votre username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full py-3 bg-pink-600 text-white rounded-xl font-bold hover:bg-pink-700 transition"
            >
              Se connecter
            </button>

            <button
              onClick={() => setPage("signup")}
              className="w-full py-3 bg-purple-200 text-purple-800 rounded-xl font-bold hover:bg-purple-300 transition"
            >
              Créer un compte
            </button>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setPage("login-choice")}
              className="text-purple-600 hover:text-purple-800 font-semibold"
            >
              ← Retour au choix
            </button>
          </div>

          <div className="mt-6 p-4 bg-pink-50 rounded-xl">
            <p className="text-sm text-gray-600 font-semibold">
              Compte de test :
            </p>
            <p className="text-xs text-gray-500">user1 / user123</p>
          </div>
        </div>
      </div>
    );
  };

  const DashboardUser = () => {
    const [userPage, setUserPage] = useState("liste");
    const [formAdoption, setFormAdoption] = useState({
      nom: currentUser?.nom || "",
      prenom: currentUser?.prenom || "",
      numero: "",
      adresse: "",
      email: currentUser?.email || "",
      animal: "",
    });
    const [formDon, setFormDon] = useState({ montant: "", carte: "" });

    const handleAdoption = () => {
      if (
        !formAdoption.nom ||
        !formAdoption.prenom ||
        !formAdoption.numero ||
        !formAdoption.adresse ||
        !formAdoption.email ||
        !formAdoption.animal
      ) {
        alert("Veuillez remplir tous les champs");
        return;
      }

      const nouvelleDemande = {
        id: demandes.length + 1,
        nom: formAdoption.nom,
        prenom: formAdoption.prenom,
        numero: formAdoption.numero,
        adresse: formAdoption.adresse,
        email: formAdoption.email,
        animal: formAdoption.animal,
        date: new Date().toLocaleDateString("fr-FR"),
        statut: "pas encore traitée",
      };

      setDemandes([...demandes, nouvelleDemande]);
      alert(
        "✅ Demande d'adoption envoyée avec succès! Nous vous contacterons bientôt."
      );
      setFormAdoption({
        nom: currentUser?.nom || "",
        prenom: currentUser?.prenom || "",
        numero: "",
        adresse: "",
        email: currentUser?.email || "",
        animal: "",
      });
      setUserPage("liste");
    };

    const handleDon = () => {
      if (!formDon.montant || !formDon.carte) {
        alert("Veuillez remplir tous les champs");
        return;
      }

      if (parseFloat(formDon.montant) <= 0) {
        alert("Le montant doit être supérieur à 0");
        return;
      }

      const nouveauDon = {
        id: dons.length + 1,
        montant: parseFloat(formDon.montant),
        date: new Date().toLocaleDateString("fr-FR"),
        utilisateur: currentUser.username,
      };

      setDons([...dons, nouveauDon]);
      alert(
        `✅ Merci pour votre don de ${formDon.montant} TND! Votre générosité aide nos animaux.`
      );
      setFormDon({ montant: "", carte: "" });
      setUserPage("liste");
    };

    return (
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="w-64 bg-gradient-to-b from-purple-800 to-purple-900 text-white p-6 shadow-xl">
          <div className="mb-8">
            <div className="text-4xl mb-2">👤</div>
            <h2 className="text-xl font-bold">
              {currentUser.prenom} {currentUser.nom}
            </h2>
            <p className="text-purple-300 text-sm">{currentUser.email}</p>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setUserPage("liste")}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                userPage === "liste"
                  ? "bg-purple-600 shadow-lg"
                  : "hover:bg-purple-700"
              }`}
            >
              🐾 Animaux disponibles
            </button>
            <button
              onClick={() => setUserPage("adoption")}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                userPage === "adoption"
                  ? "bg-purple-600 shadow-lg"
                  : "hover:bg-purple-700"
              }`}
            >
              ❤️ Demander une adoption
            </button>
            <button
              onClick={() => setUserPage("don")}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                userPage === "don"
                  ? "bg-purple-600 shadow-lg"
                  : "hover:bg-purple-700"
              }`}
            >
              💝 Faire un don
            </button>
          </nav>
        </div>

        {/* Contenu principal */}
        <div className="flex-1 p-8">
          {/* Page Liste des animaux */}
          {userPage === "liste" && (
            <div>
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Animaux disponibles pour adoption
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {animauxDisponibles.map((animal) => (
                  <div
                    key={animal.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition"
                  >
                    <img
                      src={animal.image}
                      alt={animal.nom}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-xl font-bold text-purple-800 mb-2">
                        {animal.nom}
                      </h4>
                      <p className="text-gray-600">
                        <span className="font-semibold">Sexe:</span>{" "}
                        {animal.sexe}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Âge:</span> {animal.age}{" "}
                        ans
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Espèce:</span>{" "}
                        {animal.espece}
                      </p>
                      <span className="inline-block mt-3 px-4 py-1 rounded-full text-sm font-bold bg-green-100 text-green-800">
                        Disponible
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Page Formulaire d'adoption */}
          {userPage === "adoption" && (
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Formulaire de demande d'adoption
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      value={formAdoption.nom}
                      onChange={(e) =>
                        setFormAdoption({
                          ...formAdoption,
                          nom: e.target.value,
                        })
                      }
                      className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      placeholder="Votre prénom"
                      value={formAdoption.prenom}
                      onChange={(e) =>
                        setFormAdoption({
                          ...formAdoption,
                          prenom: e.target.value,
                        })
                      }
                      className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Numéro de téléphone *
                    </label>
                    <input
                      type="tel"
                      placeholder="Ex: +216 12 345 678"
                      value={formAdoption.numero}
                      onChange={(e) =>
                        setFormAdoption({
                          ...formAdoption,
                          numero: e.target.value,
                        })
                      }
                      className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Adresse *
                    </label>
                    <input
                      type="text"
                      placeholder="Votre adresse complète"
                      value={formAdoption.adresse}
                      onChange={(e) =>
                        setFormAdoption({
                          ...formAdoption,
                          adresse: e.target.value,
                        })
                      }
                      className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Adresse email *
                    </label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      value={formAdoption.email}
                      onChange={(e) =>
                        setFormAdoption({
                          ...formAdoption,
                          email: e.target.value,
                        })
                      }
                      className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Animal souhaité *
                    </label>
                    <select
                      value={formAdoption.animal}
                      onChange={(e) =>
                        setFormAdoption({
                          ...formAdoption,
                          animal: e.target.value,
                        })
                      }
                      className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
                    >
                      <option value="">-- Choisir un animal --</option>
                      {animauxDisponibles.map((a) => (
                        <option key={a.id} value={a.nom}>
                          {a.nom} ({a.espece}, {a.age} ans)
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={handleAdoption}
                    className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-bold hover:shadow-lg transition transform hover:scale-105"
                  >
                    Envoyer la demande
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Page Faire un don */}
          {userPage === "don" && (
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Faire un don
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="mb-6 p-4 bg-pink-50 rounded-xl">
                  <p className="text-gray-700">
                    Votre générosité aide à nourrir, soigner et héberger nos
                    animaux en attendant leur adoption. Merci! 💕
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Montant (TND) *
                    </label>
                    <input
                      type="number"
                      placeholder="Ex: 50"
                      value={formDon.montant}
                      onChange={(e) =>
                        setFormDon({ ...formDon, montant: e.target.value })
                      }
                      className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Numéro de carte *
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={formDon.carte}
                      onChange={(e) =>
                        setFormDon({ ...formDon, carte: e.target.value })
                      }
                      className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
                      maxLength="19"
                    />
                  </div>

                  <button
                    onClick={handleDon}
                    className="w-full py-3 bg-pink-600 text-white rounded-xl font-bold hover:bg-pink-700 transition transform hover:scale-105"
                  >
                    💝 Valider le don
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setFormDon({ ...formDon, montant: "20" })}
                    className="py-2 bg-purple-200 text-purple-800 rounded-lg font-semibold hover:bg-purple-300 transition"
                  >
                    20 TND
                  </button>
                  <button
                    onClick={() => setFormDon({ ...formDon, montant: "50" })}
                    className="py-2 bg-purple-200 text-purple-800 rounded-lg font-semibold hover:bg-purple-300 transition"
                  >
                    50 TND
                  </button>
                  <button
                    onClick={() => setFormDon({ ...formDon, montant: "100" })}
                    className="py-2 bg-purple-200 text-purple-800 rounded-lg font-semibold hover:bg-purple-300 transition"
                  >
                    100 TND
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const PageCommunaute = () => (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-purple-800 mb-4 text-center">
        Notre communauté
      </h2>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Découvrez les personnes dévouées qui prennent soin de nos animaux chaque
        jour
      </p>

      {/* Section Équipe administrative */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Équipe Administrative
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {admins.map((admin, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition"
            >
              <img
                src={admin.photo}
                alt={admin.nom}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-purple-200"
              />
              <h4 className="text-2xl font-bold text-purple-800">
                {admin.nom}
              </h4>
              <p className="text-purple-600 text-lg font-semibold mb-2">
                {admin.role}
              </p>
              <div className="flex items-center justify-center text-gray-600 mb-3">
                <span className="text-sm">
                  📅 Volontaire depuis {admin.depuis}
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  {admin.role === "Directrice" &&
                    "Fondatrice du refuge PawPaw, passionnée par le bien-être animal"}
                  {admin.role === "Vétérinaire" &&
                    "Assure les soins médicaux et le suivi de santé des animaux"}
                  {admin.role === "Responsable adoptions" &&
                    "Gère les demandes d'adoption et accompagne les familles"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Bénévoles */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Nos Bénévoles
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {communaute
            .filter((m) => m.role === "Bénévole")
            .map((benevole, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition"
              >
                <img
                  src={benevole.photo}
                  alt={benevole.nom}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-pink-200"
                />
                <h4 className="text-xl font-bold text-purple-800">
                  {benevole.nom}
                </h4>
                <p className="text-pink-600 text-lg font-semibold mb-2">
                  {benevole.role}
                </p>
                <div className="flex items-center justify-center text-gray-600">
                  <span className="text-sm">📅 Depuis {benevole.depuis}</span>
                </div>
                <div className="mt-4">
                  <span className="inline-block px-4 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-semibold">
                    {2024 - parseInt(benevole.depuis)} an
                    {2024 - parseInt(benevole.depuis) > 1 ? "s" : ""} de service
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Section Statistiques de l'équipe */}
      <div className="bg-gradient-to-r from-purple-200 to-pink-200 p-8 rounded-3xl mb-16">
        <h3 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Notre impact ensemble
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl mb-2">👥</div>
            <p className="text-3xl font-bold text-purple-800">
              {communaute.length}
            </p>
            <p className="text-gray-600 font-semibold">Membres actifs</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl mb-2">🐾</div>
            <p className="text-3xl font-bold text-purple-800">
              {animals.length}
            </p>
            <p className="text-gray-600 font-semibold">Animaux sauvés</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl mb-2">❤️</div>
            <p className="text-3xl font-bold text-purple-800">
              {animals.filter((a) => a.etat === "adopté").length}
            </p>
            <p className="text-gray-600 font-semibold">Adoptions réussies</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl mb-2">📅</div>
            <p className="text-3xl font-bold text-purple-800">2018</p>
            <p className="text-gray-600 font-semibold">Année de fondation</p>
          </div>
        </div>
      </div>

      {/* Section Rejoignez-nous */}
      <div className="bg-white p-8 rounded-3xl shadow-xl text-center">
        <h3 className="text-3xl font-bold text-purple-800 mb-4">
          Rejoignez notre communauté !
        </h3>
        <p className="text-gray-700 text-lg mb-6">
          Vous souhaitez devenir bénévole et contribuer au bien-être de nos
          animaux ? Nous recherchons toujours des personnes passionnées pour
          rejoindre notre équipe.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="p-4">
            <div className="text-4xl mb-2">🤲</div>
            <h4 className="font-bold text-purple-800 mb-2">Soins quotidiens</h4>
            <p className="text-gray-600 text-sm">
              Nourriture, nettoyage, câlins
            </p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-2">🚶</div>
            <h4 className="font-bold text-purple-800 mb-2">Promenades</h4>
            <p className="text-gray-600 text-sm">
              Sortir les chiens, socialisation
            </p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-2">📢</div>
            <h4 className="font-bold text-purple-800 mb-2">Communication</h4>
            <p className="text-gray-600 text-sm">Réseaux sociaux, événements</p>
          </div>
        </div>
        <button
          onClick={() =>
            currentUser ? setPage("dashboard-user") : setPage("signup")
          }
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-xl font-bold hover:shadow-lg transition transform hover:scale-105"
        >
          Devenir bénévole
        </button>
      </div>
    </div>
  );

  const PageSignup = () => {
    const [formData, setFormData] = useState({
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      nom: "",
      prenom: "",
    });
    const [error, setError] = useState("");

    const handleSignup = () => {
      // Validation
      if (
        !formData.username ||
        !formData.password ||
        !formData.confirmPassword ||
        !formData.email ||
        !formData.nom ||
        !formData.prenom
      ) {
        setError("Tous les champs sont requis");
        return;
      }

      // Vérifier que le mot de passe et la confirmation correspondent
      if (formData.password !== formData.confirmPassword) {
        setError("Les mots de passe ne correspondent pas");
        return;
      }

      // Vérifier la longueur du mot de passe
      if (formData.password.length < 6) {
        setError("Le mot de passe doit contenir au moins 6 caractères");
        return;
      }

      // Vérifier le format de l'email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Veuillez entrer une adresse email valide");
        return;
      }

      // Vérifier que le username n'existe pas déjà
      if (
        users.find((u) => u.username === formData.username) ||
        employees.find((e) => e.username === formData.username)
      ) {
        setError("Ce username existe déjà. Veuillez en choisir un autre.");
        return;
      }

      // Créer le nouveau utilisateur
      const newUser = {
        id: users.length + 1,
        username: formData.username,
        password: formData.password,
        email: formData.email,
        nom: formData.nom,
        prenom: formData.prenom,
      };

      setUsers([...users, newUser]);
      setCurrentUser({ ...newUser, type: "user" });
      setPage("dashboard-user");
    };

    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-2xl">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🦸</div>
            <h2 className="text-3xl font-bold text-purple-800">
              Devenir un HERO
            </h2>
            <p className="text-gray-600 mt-2">
              Créez votre compte pour aider nos animaux
            </p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Username *
              </label>
              <input
                type="text"
                placeholder="Choisissez un username unique"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Nom *
              </label>
              <input
                type="text"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={(e) =>
                  setFormData({ ...formData, nom: e.target.value })
                }
                className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Prénom *
              </label>
              <input
                type="text"
                placeholder="Votre prénom"
                value={formData.prenom}
                onChange={(e) =>
                  setFormData({ ...formData, prenom: e.target.value })
                }
                className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mot de passe *
              </label>
              <input
                type="password"
                placeholder="Minimum 6 caractères"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Confirmer le mot de passe *
              </label>
              <input
                type="password"
                placeholder="Retapez votre mot de passe"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            <button
              onClick={handleSignup}
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-bold hover:shadow-lg transition transform hover:scale-105"
            >
              Créer mon compte
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">Vous avez déjà un compte ?</p>
            <button
              onClick={() => setPage("login-user")}
              className="text-purple-600 hover:text-purple-800 font-semibold"
            >
              Se connecter
            </button>
          </div>

          <div className="mt-6 p-4 bg-purple-50 rounded-xl">
            <p className="text-sm text-gray-600">
              ℹ️ En créant un compte, vous pourrez adopter des animaux et faire
              des dons pour soutenir notre refuge.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const DashboardEmployee = () => {
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [animalForm, setAnimalForm] = useState({
      nom: "",
      espece: "",
      sexe: "Mâle",
      age: "",
      etat: "disponible",
      image: "",
    });
    const [editingAnimal, setEditingAnimal] = useState(null);
    const [filtreStatut, setFiltreStatut] = useState("tous");
    const [employeeForm, setEmployeeForm] = useState({
      username: "",
      password: "",
      nom: "",
      role: "employe",
    });

    const demandesNonTraitees = demandes.filter(
      (d) => d.statut === "pas encore traitée"
    ).length;

    const handleAcceptDemande = (demande) => {
      setDemandes(
        demandes.map((d) =>
          d.id === demande.id ? { ...d, statut: "acceptée" } : d
        )
      );
      setAnimals(
        animals.map((a) =>
          a.nom === demande.animal ? { ...a, etat: "adopté" } : a
        )
      );
      setAdoptions([
        ...adoptions,
        {
          id: adoptions.length + 1,
          nom: demande.nom,
          prenom: demande.prenom,
          animal: demande.animal,
          date: new Date().toLocaleDateString("fr-FR"),
          certificat: `certificat_${demande.nom}_${demande.animal}.pdf`,
        },
      ]);
      alert("✅ Demande acceptée! Certificat généré.");
    };

    const handleRefuseDemande = (demandeId) => {
      if (confirm("Refuser cette demande?")) {
        setDemandes(
          demandes.map((d) =>
            d.id === demandeId ? { ...d, statut: "refusée" } : d
          )
        );
        alert("❌ Demande refusée.");
      }
    };

    const handleAddAnimal = () => {
      if (
        !animalForm.nom ||
        !animalForm.espece ||
        !animalForm.age ||
        !animalForm.image
      ) {
        alert("Remplir tous les champs");
        return;
      }
      setAnimals([
        ...animals,
        {
          id: animals.length + 1,
          ...animalForm,
          age: parseInt(animalForm.age),
        },
      ]);
      setAnimalForm({
        nom: "",
        espece: "",
        sexe: "Mâle",
        age: "",
        etat: "disponible",
        image: "",
      });
      alert("✅ Animal ajouté!");
      setEmployeePage("animaux");
    };

    const handleUpdateAnimal = () => {
      setAnimals(
        animals.map((a) =>
          a.id === editingAnimal.id
            ? { ...a, ...animalForm, age: parseInt(animalForm.age) }
            : a
        )
      );
      setEditingAnimal(null);
      alert("✅ Animal modifié!");
      setEmployeePage("animaux");
    };

    const handleDeleteAnimal = (animalId) => {
      if (confirm("Supprimer cet animal?")) {
        setAnimals(animals.filter((a) => a.id !== animalId));
        alert("✅ Animal supprimé.");
      }
    };

    const handleAddEmployee = () => {
      if (
        !employeeForm.username ||
        !employeeForm.password ||
        !employeeForm.nom
      ) {
        alert("Remplir tous les champs");
        return;
      }
      if (employees.find((e) => e.username === employeeForm.username)) {
        alert("Username existe déjà");
        return;
      }
      setEmployees([
        ...employees,
        { id: employees.length + 1, ...employeeForm },
      ]);
      setEmployeeForm({ username: "", password: "", nom: "", role: "employe" });
      alert("✅ Employé ajouté!");
    };

    const handleDeleteEmployee = (empId) => {
      if (confirm("Supprimer cet employé?")) {
        setEmployees(employees.filter((e) => e.id !== empId));
        alert("✅ Employé supprimé.");
      }
    };

    const demandesFiltrees =
      filtreStatut === "tous"
        ? demandes
        : demandes.filter((d) => d.statut === filtreStatut);

    return (
      <div className="flex min-h-screen bg-gray-50">
        <div className="w-64 bg-gradient-to-b from-purple-800 to-purple-900 text-white p-6">
          <div className="mb-8">
            <div className="text-4xl mb-2">👔</div>
            <h2 className="text-xl font-bold">{currentUser.nom}</h2>
            <p className="text-purple-300 text-sm">
              {currentUser.role === "admin" ? "Admin" : "Employé"}
            </p>
          </div>
          <nav className="space-y-2">
            <button
              onClick={() => setEmployeePage("dashboard")}
              className={`w-full text-left px-4 py-3 rounded-lg ${
                employeePage === "dashboard"
                  ? "bg-purple-600"
                  : "hover:bg-purple-700"
              }`}
            >
              📊 Dashboard
            </button>
            <button
              onClick={() => setEmployeePage("animaux")}
              className={`w-full text-left px-4 py-3 rounded-lg ${
                employeePage === "animaux"
                  ? "bg-purple-600"
                  : "hover:bg-purple-700"
              }`}
            >
              🐾 Animaux
            </button>
            <button
              onClick={() => setEmployeePage("demandes")}
              className={`w-full text-left px-4 py-3 rounded-lg ${
                employeePage === "demandes"
                  ? "bg-purple-600"
                  : "hover:bg-purple-700"
              }`}
            >
              📝 Demandes{" "}
              {demandesNonTraitees > 0 && (
                <span className="ml-2 px-2 py-1 bg-red-500 rounded-full text-xs">
                  {demandesNonTraitees}
                </span>
              )}
            </button>
            <button
              onClick={() => setEmployeePage("adoptions")}
              className={`w-full text-left px-4 py-3 rounded-lg ${
                employeePage === "adoptions"
                  ? "bg-purple-600"
                  : "hover:bg-purple-700"
              }`}
            >
              ✅ Adoptions
            </button>
            {currentUser.role === "admin" && (
              <button
                onClick={() => setEmployeePage("employees")}
                className={`w-full text-left px-4 py-3 rounded-lg ${
                  employeePage === "employees"
                    ? "bg-purple-600"
                    : "hover:bg-purple-700"
                }`}
              >
                👔 Employés
              </button>
            )}
          </nav>
        </div>

        <div className="flex-1 p-8">
          {employeePage === "dashboard" && (
            <div>
              <h2 className="text-3xl font-bold text-purple-800 mb-8">
                Dashboard
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-700 mb-2">
                    Animaux totaux
                  </h3>
                  <p className="text-4xl font-bold text-purple-600">
                    {animals.length}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-700 mb-2">
                    Disponibles
                  </h3>
                  <p className="text-4xl font-bold text-green-600">
                    {animals.filter((a) => a.etat === "disponible").length}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-700 mb-2">
                    Adoptés
                  </h3>
                  <p className="text-4xl font-bold text-blue-600">
                    {animals.filter((a) => a.etat === "adopté").length}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-700 mb-2">
                    Demandes non traitées
                  </h3>
                  <p className="text-4xl font-bold text-orange-600">
                    {demandesNonTraitees}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-700 mb-2">
                    Adoptions totales
                  </h3>
                  <p className="text-4xl font-bold text-pink-600">
                    {adoptions.length}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-700 mb-2">
                    Dons reçus
                  </h3>
                  <p className="text-4xl font-bold text-purple-600">
                    {dons.length}
                  </p>
                </div>
              </div>
            </div>
          )}

          {employeePage === "animaux" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-purple-800">
                  Gestion des animaux
                </h2>
                <button
                  onClick={() => setEmployeePage("add-animal")}
                  className="px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700"
                >
                  ➕ Ajouter
                </button>
              </div>
              <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-purple-800 text-white">
                    <tr>
                      <th className="p-4 text-left">Photo</th>
                      <th className="p-4 text-left">Nom</th>
                      <th className="p-4 text-left">Espèce</th>
                      <th className="p-4 text-left">Sexe</th>
                      <th className="p-4 text-left">Âge</th>
                      <th className="p-4 text-left">État</th>
                      <th className="p-4 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {animals.map((animal) => (
                      <tr key={animal.id} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <img
                            src={animal.image}
                            alt={animal.nom}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                        </td>
                        <td className="p-4 font-semibold">{animal.nom}</td>
                        <td className="p-4">{animal.espece}</td>
                        <td className="p-4">{animal.sexe}</td>
                        <td className="p-4">{animal.age} ans</td>
                        <td className="p-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-bold ${
                              animal.etat === "disponible"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {animal.etat}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => setSelectedAnimal(animal)}
                              className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm"
                            >
                              Voir
                            </button>
                            <button
                              onClick={() => {
                                setEditingAnimal(animal);
                                setAnimalForm({
                                  nom: animal.nom,
                                  espece: animal.espece,
                                  sexe: animal.sexe,
                                  age: animal.age.toString(),
                                  etat: animal.etat,
                                  image: animal.image,
                                });
                                setEmployeePage("edit-animal");
                              }}
                              className="px-3 py-1 bg-yellow-500 text-white rounded-lg text-sm"
                            >
                              Modifier
                            </button>
                            <button
                              onClick={() => handleDeleteAnimal(animal.id)}
                              className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm"
                            >
                              Supprimer
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {selectedAnimal && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                  onClick={() => setSelectedAnimal(null)}
                >
                  <div
                    className="bg-white p-8 rounded-3xl shadow-2xl max-w-md"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={selectedAnimal.image}
                      alt={selectedAnimal.nom}
                      className="w-full h-64 object-cover rounded-2xl mb-4"
                    />
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">
                      {selectedAnimal.nom}
                    </h3>
                    <p>
                      <strong>Espèce:</strong> {selectedAnimal.espece}
                    </p>
                    <p>
                      <strong>Sexe:</strong> {selectedAnimal.sexe}
                    </p>
                    <p>
                      <strong>Âge:</strong> {selectedAnimal.age} ans
                    </p>
                    <p>
                      <strong>État:</strong> {selectedAnimal.etat}
                    </p>
                    <button
                      onClick={() => setSelectedAnimal(null)}
                      className="mt-6 w-full py-3 bg-purple-600 text-white rounded-xl font-bold"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {employeePage === "add-animal" && (
            <div>
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Ajouter un animal
              </h2>
              <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nom"
                    value={animalForm.nom}
                    onChange={(e) =>
                      setAnimalForm({ ...animalForm, nom: e.target.value })
                    }
                    className="w-full p-3 border-2 border-purple-300 rounded-xl"
                  />
                  <select
                    value={animalForm.espece}
                    onChange={(e) =>
                      setAnimalForm({ ...animalForm, espece: e.target.value })
                    }
                    className="w-full p-3 border-2 border-purple-300 rounded-xl"
                  >
                    <option value="">Espèce</option>
                    <option value="Chien">Chien</option>
                    <option value="Chat">Chat</option>
                  </select>
                  <select
                    value={animalForm.sexe}
                    onChange={(e) =>
                      setAnimalForm({ ...animalForm, sexe: e.target.value })
                    }
                    className="w-full p-3 border-2 border-purple-300 rounded-xl"
                  >
                    <option value="Mâle">Mâle</option>
                    <option value="Femelle">Femelle</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Âge"
                    value={animalForm.age}
                    onChange={(e) =>
                      setAnimalForm({ ...animalForm, age: e.target.value })
                    }
                    className="w-full p-3 border-2 border-purple-300 rounded-xl"
                  />
                  <select
                    value={animalForm.etat}
                    onChange={(e) =>
                      setAnimalForm({ ...animalForm, etat: e.target.value })
                    }
                    className="w-full p-3 border-2 border-purple-300 rounded-xl"
                  >
                    <option value="disponible">Disponible</option>
                    <option value="adopté">Adopté</option>
                  </select>
                  <input
                    type="text"
                    placeholder="URL image"
                    value={animalForm.image}
                    onChange={(e) =>
                      setAnimalForm({ ...animalForm, image: e.target.value })
                    }
                    className="w-full p-3 border-2 border-purple-300 rounded-xl"
                  />
                  <div className="flex space-x-4">
                    <button
                      onClick={handleAddAnimal}
                      className="flex-1 py-3 bg-green-600 text-white rounded-xl font-bold"
                    >
                      Ajouter
                    </button>
                    <button
                      onClick={() => setEmployeePage("animaux")}
                      className="flex-1 py-3 bg-gray-500 text-white rounded-xl font-bold"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {employeePage === "edit-animal" && (
            <div>
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Modifier animal
              </h2>
              <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-4">
                  <input
                    type="text"
                    value={animalForm.nom}
                    onChange={(e) =>
                      setAnimalForm({ ...animalForm, nom: e.target.value })
                    }
                    className="w-full p-3 border-2 border-purple-300 rounded-xl"
                  />
                  <select
                    value={animalForm.espece}
                    onChange={(e) =>
                      setAnimalForm({ ...animalForm, espece: e.target.value })
                    }
                    className="w-full p-3 border-2 border-purple-300 rounded-xl"
                  >
                    <option value="Chien">Chien</option>
                    <option value="Chat">Chat</option>
                  </select>
                  <select
                    value={animalForm.sexe}
                    onChange={(e) =>
                      setAnimalForm({ ...animalForm, sexe: e.target.value })
                    }
                    className="w-full p-3 border-2 border-purple-300 rounded-xl"
                  >
                    <option value="Mâle">Mâle</option>
                    <option value="Femelle">Femelle</option>
                  </select>
                  <input
                    type="number"
                    value={animalForm.age}
                    onChange={(e) =>
                      setAnimalForm({ ...animalForm, age: e.target.value })
                    }
                    className="w-full p-3 border-2 border-purple-300 rounded-xl"
                  />
                  <select
                    value={animalForm.etat}
                    onChange={(e) =>
                      setAnimalForm({ ...animalForm, etat: e.target.value })
                    }
                    className="w-full p-3 border-2 border-purple-300 rounded-xl"
                  >
                    <option value="disponible">Disponible</option>
                    <option value="adopté">Adopté</option>
                  </select>
                  <input
                    type="text"
                    value={animalForm.image}
                    onChange={(e) =>
                      setAnimalForm({ ...animalForm, image: e.target.value })
                    }
                    className="w-full p-3 border-2 border-purple-300 rounded-xl"
                  />
                  <div className="flex space-x-4">
                    <button
                      onClick={handleUpdateAnimal}
                      className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => setEmployeePage("animaux")}
                      className="flex-1 py-3 bg-gray-500 text-white rounded-xl font-bold"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {employeePage === "demandes" && (
            <div>
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Demandes d'adoption
              </h2>
              <div className="mb-6 flex space-x-4">
                <button
                  onClick={() => setFiltreStatut("tous")}
                  className={`px-6 py-2 rounded-full ${
                    filtreStatut === "tous"
                      ? "bg-purple-600 text-white"
                      : "bg-purple-200 text-purple-800"
                  }`}
                >
                  Toutes
                </button>
                <button
                  onClick={() => setFiltreStatut("pas encore traitée")}
                  className={`px-6 py-2 rounded-full ${
                    filtreStatut === "pas encore traitée"
                      ? "bg-orange-600 text-white"
                      : "bg-orange-200 text-orange-800"
                  }`}
                >
                  Non traitées
                </button>
                <button
                  onClick={() => setFiltreStatut("acceptée")}
                  className={`px-6 py-2 rounded-full ${
                    filtreStatut === "acceptée"
                      ? "bg-green-600 text-white"
                      : "bg-green-200 text-green-800"
                  }`}
                >
                  Acceptées
                </button>
                <button
                  onClick={() => setFiltreStatut("refusée")}
                  className={`px-6 py-2 rounded-full ${
                    filtreStatut === "refusée"
                      ? "bg-red-600 text-white"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  Refusées
                </button>
              </div>
              <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-purple-800 text-white">
                    <tr>
                      <th className="p-4 text-left">Nom</th>
                      <th className="p-4 text-left">Prénom</th>
                      <th className="p-4 text-left">Animal</th>
                      <th className="p-4 text-left">Date</th>
                      <th className="p-4 text-left">Statut</th>
                      <th className="p-4 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demandesFiltrees.length === 0 ? (
                      <tr>
                        <td
                          colSpan="6"
                          className="p-8 text-center text-gray-500"
                        >
                          Aucune demande
                        </td>
                      </tr>
                    ) : (
                      demandesFiltrees.map((d) => (
                        <tr key={d.id} className="border-b hover:bg-gray-50">
                          <td className="p-4 font-semibold">{d.nom}</td>
                          <td className="p-4">{d.prenom}</td>
                          <td className="p-4">{d.animal}</td>
                          <td className="p-4">{d.date}</td>
                          <td className="p-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-bold ${
                                d.statut === "acceptée"
                                  ? "bg-green-100 text-green-800"
                                  : d.statut === "refusée"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-orange-100 text-orange-800"
                              }`}
                            >
                              {d.statut}
                            </span>
                          </td>
                          <td className="p-4">
                            {d.statut === "pas encore traitée" && (
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => handleAcceptDemande(d)}
                                  className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm"
                                >
                                  Accepter
                                </button>
                                <button
                                  onClick={() => handleRefuseDemande(d.id)}
                                  className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm"
                                >
                                  Refuser
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {employeePage === "adoptions" && (
            <div>
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Adoptions effectuées
              </h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-purple-800 text-white">
                    <tr>
                      <th className="p-4 text-left">Nom</th>
                      <th className="p-4 text-left">Prénom</th>
                      <th className="p-4 text-left">Animal</th>
                      <th className="p-4 text-left">Date</th>
                      <th className="p-4 text-left">Certificat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adoptions.length === 0 ? (
                      <tr>
                        <td
                          colSpan="5"
                          className="p-8 text-center text-gray-500"
                        >
                          Aucune adoption
                        </td>
                      </tr>
                    ) : (
                      adoptions.map((a) => (
                        <tr key={a.id} className="border-b hover:bg-gray-50">
                          <td className="p-4 font-semibold">{a.nom}</td>
                          <td className="p-4">{a.prenom}</td>
                          <td className="p-4">{a.animal}</td>
                          <td className="p-4">{a.date}</td>
                          <td className="p-4">
                            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm">
                              📄 {a.certificat}
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {employeePage === "employees" && currentUser.role === "admin" && (
            <div>
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Gestion des employés
              </h2>
              <div className="mb-6 bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-purple-800 mb-4">
                  Ajouter un employé
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  <input
                    type="text"
                    placeholder="Username"
                    value={employeeForm.username}
                    onChange={(e) =>
                      setEmployeeForm({
                        ...employeeForm,
                        username: e.target.value,
                      })
                    }
                    className="p-3 border-2 border-purple-300 rounded-xl"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={employeeForm.password}
                    onChange={(e) =>
                      setEmployeeForm({
                        ...employeeForm,
                        password: e.target.value,
                      })
                    }
                    className="p-3 border-2 border-purple-300 rounded-xl"
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    value={employeeForm.nom}
                    onChange={(e) =>
                      setEmployeeForm({ ...employeeForm, nom: e.target.value })
                    }
                    className="p-3 border-2 border-purple-300 rounded-xl"
                  />
                  <select
                    value={employeeForm.role}
                    onChange={(e) =>
                      setEmployeeForm({ ...employeeForm, role: e.target.value })
                    }
                    className="p-3 border-2 border-purple-300 rounded-xl"
                  >
                    <option value="employe">Employé</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <button
                  onClick={handleAddEmployee}
                  className="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl font-bold"
                >
                  ➕ Ajouter
                </button>
              </div>
              <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-purple-800 text-white">
                    <tr>
                      <th className="p-4 text-left">Username</th>
                      <th className="p-4 text-left">Nom</th>
                      <th className="p-4 text-left">Rôle</th>
                      <th className="p-4 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((e) => (
                      <tr key={e.id} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-semibold">{e.username}</td>
                        <td className="p-4">{e.nom}</td>
                        <td className="p-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-bold ${
                              e.role === "admin"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {e.role}
                          </span>
                        </td>
                        <td className="p-4">
                          {e.id !== currentUser.id && (
                            <button
                              onClick={() => handleDeleteEmployee(e.id)}
                              className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm"
                            >
                              Supprimer
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  const renderPage = () => {
    if (page === "accueil") return <PageAccueil />;
    if (page === "liste-animaux") return <PageListeAnimaux />;
    if (page === "communaute") return <PageCommunaute />;
    if (page === "login-choice") return <PageLoginChoice />;
    if (page === "login-employee") return <PageLoginEmployee />;
    if (page === "login-user") return <PageLoginUser />;
    if (page === "signup") return <PageSignup />;
    if (page === "dashboard-user") return <DashboardUser />;
    if (page === "dashboard-employee") return <DashboardEmployee />;
    return <PageAccueil />;
  };
  {
    page === "dashboard-employee" && currentUser?.type === "employee" && (
      <DashboardEmployee />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}
