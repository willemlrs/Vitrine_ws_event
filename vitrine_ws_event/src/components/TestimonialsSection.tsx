import React, { useRef, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"

const twitterTestimonials = [
  {
    id: "36",
    name: "dam gr",
    handle: "@Dadoumenez93",
    message: "Carré dans l’angle psg OM 👌🏽✌🏽 rapide efficace 🫱🏽‍🫲🏾🤲🏽",
    image: "https://pbs.twimg.com/media/GmM9xFHWkAAEmVW?format=jpg&name=large",
    avatar: "https://pbs.twimg.com/profile_images/1715419247180931072/iNTaIUys_400x400.jpg",
    url: "https://x.com/cigsandalcohol_/status/1775456586539962849"
  },
  {
    id: "30",
    name: "noe",
    handle: "@mini_zenox",
    message: "Très réactif et professionnel je recommande à 100%✅✅",
    image: "https://pbs.twimg.com/media/GlW_mvVWMAAKQV5?format=jpg&name=900x900",
    avatar: "https://pbs.twimg.com/profile_images/1248724000768958465/nBkMZjzj_400x400.jpg",
    url: "https://x.com/griizzen/status/1897574739620593737"
  },
  {
    id: "2",
    name: "BS927",
    handle: "@s92bf",
    message: "Top frérot merci beaucoup 👌",
    image: "https://pbs.twimg.com/media/Gag2xcuXIAAlVoN?format=jpg&name=900x900",
    avatar: "https://pbs.twimg.com/profile_images/1886173174317948928/N0u-ud_1_400x400.jpg",
    url: "https://x.com/s92bf/status/1848787876097757614"
  },
  {
    id: "22",
    name: "Bolle Andreis",
    handle: "@BlackangeI351",
    message: "Deux places acheter pour la Demi de LDC, toujours le vendeur le plus fiable du milieu 🤝🏾",
    image: "https://pbs.twimg.com/media/GND90FMXQAABnXA?format=jpg&name=large",
    avatar: "https://pbs.twimg.com/profile_images/1459629416326348810/LUsQ94Iv_400x400.jpg",
    url: "https://x.com/BlackangeI351/status/1705513781629960665"
  },
  {
    id: "4",
    name: "marokii_95z",
    handle: "@marokii_95Z",
    message: "Aucune arnaque vendeur très professionnel 👍",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1911948203492007937/tcb1zi3W_400x400.jpg",
    url: "https://x.com/marokii_95Z/status/1764336623032934447"
  },
  {
    id: "5",
    name: "marokii_95z",
    handle: "@marokii_95Z",
    message: "Toujour carré 👍",
    image: "https://pbs.twimg.com/media/GLtRVVeX0AABS0L?format=jpg&name=medium",
    avatar: "https://pbs.twimg.com/profile_images/1911948203492007937/tcb1zi3W_400x400.jpg",
    url: "https://x.com/marokii_95Z/status/1782107510389739975"
  },
  {
    id: "6",
    name: "Noq khaiati",
    handle: "@Nonoye14",
    message: "Très fiable et respectueux je recommande fort 💪🏽",
    image: "https://pbs.twimg.com/media/Gl7YuviWMAABDbH?format=jpg&name=large",
    avatar: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
    url: "https://x.com/Nonoye14/status/1900194396928114795"
  },
  {
    id: "7",
    name: "maximeee",
    handle: "@MaximeJacovlev1",
    message: "Vendeur sérieux et honnête, je recommande.",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1700831997952692224/S34OP25j_400x400.jpg",
    url: "https://x.com/MaximeJacovlev1/status/1693602391117967418"
  },
  {
    id: "8",
    name: "K",
    handle: "@kenzy_hsn",
    message: "C’est du sérieux",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1686495608419573760/7zePngFz_400x400.jpg",
    url: "https://x.com/kenzy_hsn/status/1695697723385667997"
  },
  {
    id: "9",
    name: "Bolle Andreis",
    handle: "@BlackangeI351",
    message: "Rapide, efficace, polie, j’ai payer et reçu ma place en moins de 5 minutes 👍🏾🫶🏾",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1459629416326348810/LUsQ94Iv_400x400.jpg",
    url: "https://x.com/BlackangeI351/status/1705513781629960665"
  },
  {
    id: "10",
    name: "BIGOUD",
    handle: "@Thomas_Krg",
    message: "Vendeur à fiable, sérieux et 100% honnête. Je recommande vivement",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1528307278478180354/1-h2WBcB_400x400.jpg",
    url: "https://x.com/Thomas_Krg/status/1735417085415575948"
  },
  {
    id: "11",
    name: "t.7 🇨🇷",
    handle: "@parisien77210",
    message: "Pas d’arnaque c’est carré ✅",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1879997748113502209/8hUz46_u_400x400.jpg",
    url: "https://x.com/parisien77210/status/1739399376710094897"
  },
  {
    id: "12",
    name: "yoni",
    handle: "@BenizriYoni",
    message: "Pas d’arnaque, efficace, dispo et très poli👍",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1781764551047868416/hgilkEW__400x400.jpg",
    url: "https://x.com/BenizriYoni/status/1744294004169019738"
  },
  {
    id: "13",
    name: "Pierre Montariol",
    handle: "@Pmontariol_",
    message: "Disponible, réponses rapides aucun problème !",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1744455373895987200/EMxNvUMI_400x400.jpg",
    url: "https://x.com/Pmontariol_/status/1746721013792940154"
  },
  {
    id: "14",
    name: "Paco De Oliveira",
    handle: "@PacoDeOliv69816",
    message: "Super fiable rapide et efficace!",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1664538841267462144/QECo1kGE_400x400.png",
    url: "https://x.com/PacoDeOliv69816/status/1751893002782392545"
  },
  {
    id: "15",
    name: "Ralph Lauren",
    handle: "@Ralph_Lauren_67",
    message: "Personne très sérieuse, prestations complètes de grandes qualités. À recommander",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1752954236/image_400x400.jpg",
    url: "https://x.com/Ralph_Lauren_67/status/1754153698152837149"
  },
  {
    id: "16",
    name: "Why alwas me 🧱",
    handle: "@ghostt078",
    message: "Tt est carrer 👍🏽",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1868417333280079872/GieG-FVr_400x400.jpg",
    url: "https://x.com/ghostt078/status/1764786997191716976"
  },
  {
    id: "17",
    name: "CJ 🇫🇷🇪🇸 ✞",
    handle: "@TakashiWRLD",
    message: "rapide et efficace je recommande 🙌",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1834564751336013824/WQqIQyaK_400x400.jpg",
    url: "https://x.com/TakashiWRLD/status/1764998129160470598"
  },
  {
    id: "18",
    name: "Lou1s",
    handle: "@PrexzA_emL",
    message: "Fiable et très sérieux 🫡",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/992170750235893766/fGM7JHIA_400x400.jpg",
    url: "https://x.com/PrexzA_emL/status/1767946643104526418"
  },
  {
    id: "19",
    name: "Lawte92🇫🇷",
    handle: "@92Lawte",
    message: "Nickel toute est carré",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1656536357559320582/Xl7f1iOD_400x400.jpg",
    url: "https://x.com/92Lawte/status/1773749925475414438"
  },
  {
    id: "20",
    name: "aeterna rou",
    handle: "@cigsandalcohol_",
    message: "vendeur fiable, billets authentiques, je vous recommande définitivement d'acheter ici! ☺️",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1828391433398599680/YfFaEBak_400x400.jpg",
    url: "https://x.com/cigsandalcohol_/status/1775456586539962849"
  },
  {
    id: "21",
    name: "Tgom Labo",
    handle: "@Labofun2",
    message: "Encore une fois le service était parfait ! Malgré la disqualification nous avons pu vivre cette ambiance de folie, merci à vous et sans aucun doute nous reviendrons vers vous très bientôt !",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1697764905196380160/39gvX_R__400x400.png",
    url: "https://x.com/Labofun2/status/1788167074654642345"
  },
  {
    id: "21",
    name: "manolo",
    handle: "@avenue2bangla",
    message: "Tout est carré, rapide et efficace ✅✅",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1913525753884340224/Bz8pLWTB_400x400.jpg",
    url: "https://x.com/avenue2bangla/status/1788167448337772708"
  },
  {
    id: "3",
    name: "Theo",
    handle: "@T_0_prst",
    message: "Super pro et disponible, pour le match paris lens. Je recommande",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1647274966444916736/qVaWHVfD_400x400.jpg",
    url: "https://x.com/T_0_prst/status/1695721575679418848"
  },
  {
    id: "23",
    name: "Angéline Richard",
    handle: "@AnglineRichard2",
    message: "je recommande fortement !! très pro, rapide efficace, 100% confiance ✅",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1696976188609015809/9Ncj3Z57_400x400.jpg",
    url: "https://x.com/AnglineRichard2/status/1794794246207402072"
  },
  {
    id: "24",
    name: "🦉",
    handle: "@georges_bh",
    message: "Au top, personne de confiance 💯",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1887222023400697856/KnMYbXrJ_400x400.jpg",
    url: "https://x.com/georges_bh/status/1813263238387126749"
  },
  {
    id: "25",
    name: "Florian richard andrade",
    handle: "@floriaan78",
    message: "Fiable une place pour Auteuil pour Paris Brest 🔴🔵✅",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1869170666940796928/F8kjfeag_400x400.jpg",
    url: "https://x.com/floriaan78/status/1835442362530853104"
  },
  {
    id: "26",
    name: "Ando",
    handle: "@andowoc",
    message: "Je recommande!",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1849164637993832448/vIkqJjDL_400x400.jpg",
    url: "https://x.com/andowoc/status/1839711161513628062"
  },
  {
    id: "27",
    name: "Chap0",
    handle: "@Chapo093",
    message: "100% Fiable ✅",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1788997235721543680/63J5LZgk_400x400.jpg",
    url: "https://x.com/Chapo093/status/1854328341878219060"
  },
  {
    id: "28",
    name: "Arthur",
    handle: "@ArthurDunoyer",
    message: "Je recommande, très serviable, fiable, vous ne serez pas déçus🙏🏻",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1246711609361403905/KKsjS1hX_400x400.jpg",
    url: "https://x.com/ArthurDunoyer/status/1854442046410338692"
  },
  {
    id: "29",
    name: "𝓑𝓾𝓮𝓷𝓸 🇨🇷",
    handle: "@Lugiapaname",
    message: "Valeur sur",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1910393019833909248/-9t3gZEz_400x400.jpg",
    url: "https://x.com/Lugiapaname/status/1871210499532271810"
  },
  {
    id: "1",
    name: "Tgom Labo",
    handle: "@Labofun2",
    message: "Je recommande, rapide et sérieux, notre déplacement à Dortmund s’est parfaitement bien passé ! Encore merci 🙏",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1697764905196380160/39gvX_R__400x400.png",
    url: "https://x.com/Labofun2/status/1786058615779963340"
  },
  {
    id: "31",
    name: "Elhadji",
    handle: "@magatte_elhadji",
    message: "Je recommande, super efficace",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1307969933255606277/apd4VrNI_400x400.jpg",
    url: "https://x.com/magatte_elhadji/status/1897635895320162467"
  },
  {
    id: "32",
    name: "🙃",
    handle: "@SwannSk_",
    message: "Fiable allez y les gars",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1875260140246417408/B_hbQWDJ_400x400.jpg",
    url: "https://x.com/SwannSk_/status/1897730954237563264"
  },
  {
    id: "33",
    name: "Jean cordz",
    handle: "@YoannCordier",
    message: "100% fiable 🙏",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1890498728529682432/uEiNY7aJ_400x400.jpg",
    url: "https://x.com/YoannCordier/status/1898685393609822612"
  },
  {
    id: "34",
    name: "𝐂𝐀𝐌𝐒𝐆 🇨🇷",
    handle: "@xxcmbxs",
    message: "fiable à 10000%, vous pouvez lui faire confiance, très professionnel et super sympa ! ✅☝🏼",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1913260658931511296/yyxLZctQ_400x400.jpg",
    url: "https://x.com/xxcmbxs/status/1899857565975974124"
  },
  {
    id: "35",
    name: "Kimmich",
    handle: "@Bayernismo3",
    message: "Fiable à 100% ✅",
    image: null,
    avatar: "https://pbs.twimg.com/profile_images/1070805876225830912/BGiY6ctz_400x400.jpg",
    url: "https://x.com/Bayernismo3/status/1899857590252683448"
  }
];

const XTestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="twitter-testimonials" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Avis postés sur X</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Découvrez quelques témoignages authentiques partagés directement sur X.
          </p>
          <Button className="mt-6" onClick={() => setShowForm(!showForm)}>
            Laisser un avis
          </Button>
        </div>

        {showForm && (
          <div className="bg-muted p-6 rounded-xl mb-10 max-w-xl mx-auto">
            <Textarea
              placeholder="Votre message ici..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mb-4"
            />
            <Input
              type="text"
              placeholder="URL de l'image (optionnelle)"
              value={image || ""}
              onChange={(e) => setImage(e.target.value)}
              className="mb-4"
            />
            <Button onClick={() => { setMessage(""); setImage(null); setShowForm(false); }}>
              Envoyer l’avis
            </Button>
          </div>
        )}

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {twitterTestimonials.map((t) => (
            <a
              key={t.id}
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 hover:shadow-lg transition rounded-xl overflow-hidden border border-muted w-[220px] md:w-[250px]"
            >
              <div className="bg-white p-4 h-full flex flex-col justify-between">
                <div>
                  <p className="text-foreground text-sm mb-2 italic">"{t.message}"</p>
                  {t.image && (
                    <img
                      src={t.image}
                      alt="Tweet media"
                      className="w-full rounded-lg mb-2 max-h-40 object-cover"
                    />
                  )}
                </div>
                <div className="flex items-center mt-2">
                  <Avatar className="h-8 w-8 mr-3">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-sm leading-tight">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">{t.handle}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default XTestimonialsSection;
