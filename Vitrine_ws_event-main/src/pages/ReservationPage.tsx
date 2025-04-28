import { useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";




export default function ReservationPage() {
  const { evenement } = useParams<{ evenement: string }>();
  const [searchParams] = useSearchParams();
  const prix = searchParams.get("prix");


  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center px-4 py-10 transition-all duration-500">
      {!submitted ? (
        <>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Formulaire de réservation
          </h1>
  
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="w-full max-w-md bg-[#1f1f1f] p-8 rounded-xl shadow-lg border border-gray-700 space-y-6 text-white"
          >
            {/* En-tête événement + prix */}
            {(evenement || prix) && (
              <div className="flex items-center justify-between mb-4">
                {evenement && (
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Événement :</p>
                    <p className="font-semibold text-lg">{decodeURIComponent(evenement)}</p>
                  </div>
                )}
                {prix && (
                  <div className="text-right">
                    <p className="text-sm text-gray-400 mb-1">Prix :</p>
                    <p className="text-lg font-bold text-green-400">{prix} €</p>
                  </div>
                )}
              </div>
            )}
  
            {/* Champs */}
            <div>
              <label htmlFor="nom" className="block mb-1 text-sm">Nom</label>
              <input type="text" id="nom" name="nom" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
  
            <div>
              <label htmlFor="prenom" className="block mb-1 text-sm">Prénom</label>
              <input type="text" id="prenom" name="prenom" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
  
            <div>
              <label htmlFor="tel" className="block mb-1 text-sm">Téléphone</label>
              <input type="tel" id="tel" name="tel" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
  
            <div>
              <label htmlFor="email" className="block mb-1 text-sm">Adresse mail</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
  
            {/* Bouton */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition"
              >
                Réserver
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            ✅ Merci d'avoir réservé
          </h2>
          <p className="text-white text-lg">
            Vous serez contacté par WS Event pour finaliser la vente.
          </p>
        </div>
      )}
    </div>
  );
  
}

