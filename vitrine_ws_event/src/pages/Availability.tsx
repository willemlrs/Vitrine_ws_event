import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

type Dispo = {
    Evenement: string;
    Personnalite: string;
    Prix: string;
    Categorie: string;
    Rang: string;
    Siège: string;
    Disposition: string;
  };

const SHEET_ID = "1bT_UxKDC9U0KOsYbDj5FCDEqYHwGSBtCAktGbWO4hIA";
const API_KEY = "AIzaSyB3SYkqL0RkgKpAAYbvTEYHJJTVMRhHlfM";
const RANGE = "A1:G100";

export default function Availability() {
  const [data, setData] = useState<Dispo[]>([]);
  const [filtre, setFiltre] = useState<string>("Tous");

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
      try {
        const response = await axios.get(url);
        const rows = response.data.values;

        const headers = rows[0];
        const entries = rows.slice(1).map((row: any[]) => {
          const obj: any = {};
          headers.forEach((h: string, i: number) => {
            obj[h] = row[i];
          });
          return obj as Dispo;
        });

        setData(entries);
      } catch (error) {
        console.error("❌ Erreur de chargement :", error);
      }
    };

    fetchData();
  }, []);

  const getImage = (evenement: string) => {
    if (evenement === "Football") return "/Match_de_Football.jpg";
    if (evenement === "Concert") return "/Concert.png";
    return "/default.jpg";
  };

  const logosDisponibles: Record<string, string> = {
    PSG: "/Logo_foot/PSG.svg",
    Brest: "/Logo_foot/Brest.png",
    Lyon: "/Logo_foot/Lyon.png",
    Arsenal: "/Logo_foot/Arsenal.png",
    InterMilan: "/Logo_foot/Inter_Milan.png",
    RealMadrid: "/Logo_foot/Real_Madrid.png",
    Rennes: "/Logo_foot/Rennes.png",
    Monaco: "/Logo_foot/Monaco.png",
    Barcelone: "/Logo_foot/Barcelone.png",
    Marseille: "/Logo_foot/Marseille.svg",
    Dortmund: "/Logo_foot/Dortmund.png",
    Lens: "/Logo_foot/Lens.png",
  };

  const getTeamLogos = (personnalite: string): string[] => {
    if (!personnalite.includes("-")) return [];

    const [e1, e2] = personnalite.split("-").map(e => e.trim());

    return [
      logosDisponibles[e1] || "/logos/default.png",
      logosDisponibles[e2] || "/logos/default.png",
    ];
  };

  return (
    <div className="p-8 text-white min-h-screen bg-gradient-to-b from-[#1f1f1f] to-[#111111]">
      <h1 className="text-4xl font-bold mb-10 text-center text-white tracking-wide">
        Disponibilités
      </h1>

      {/* Filtres */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {["All", "Football", "Concerts"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltre(cat)}
            className={`px-5 py-2 rounded-full border-2 transition font-medium ${
              filtre === cat
                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                : "bg-transparent text-white border-gray-600 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cartes */}
      <div className="grid gap-8 md:grid-cols-2">
        {data
          .filter((item) => filtre === "Tous" || item.Evenement === filtre)
          .map((item, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
              className="relative bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700 hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between h-full animate-fade-in"
            >
              {/* Logos en haut à droite */}
              {item.Evenement === "Football" && (
                <div className="absolute top-4 right-4 flex items-center gap-3">
                  <img
                    src={getTeamLogos(item.Personnalite)[0]}
                    alt="Équipe 1"
                    className="w-12 h-12 object-contain "
                  />
                  <span className="text-white text-xl font-bold animate-pulse">VS</span>
                  <img
                    src={getTeamLogos(item.Personnalite)[1]}
                    alt="Équipe 2"
                    className="w-12 h-12 object-contain "
                  />
                </div>
              )}
          
              {/* Texte principal */}
              <div className="mb-10">
                  <h2 className="text-xl font-semibold text-white mb-2">
                  {item.Evenement} : {item.Personnalite}{" "}
                  {item.Disposition && (
                    <span className="text-sm text-gray-400">({item.Disposition})</span>
                  )}
                </h2>
                <p className="text-sm text-gray-300 mb-1">
                  Personnalité : {item.Personnalite}
                </p>
                <p className="text-sm text-gray-300 mb-1">
                Catégorie : {item.Categorie}
                </p>
                <p className="text-sm text-gray-300 mb-1">
                Rang : {item.Rang}
                </p>
                <p className="text-sm text-gray-300 mb-1">
                Siège : {item.Siège}
                </p>
              </div>
          
              {/* Bas : prix + bouton */}
              <div className="flex items-center justify-between mt-auto">
                <p className="text-lg font-bold text-green-400">
                  Prix : {item.Prix} €
                </p>
                <Link
                  to={`/reserver/${encodeURIComponent(item.Personnalite)}?prix=${item.Prix}`}
                  className="px-5 py-2 rounded-full bg-blue-700 text-white hover:bg-blue-500 transition font-semibold shadow-lg"
                >
                  Réserver
                </Link>
              </div>
            </div>
          ))}
          
      </div>
    </div>
  );
}
