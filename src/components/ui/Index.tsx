import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PartyPopper, Coffee, UtensilsCrossed, Dumbbell, Wine } from "lucide-react";
import MissionCard from "@/components/MissionCard";
import ProgressTracker from "@/components/ProgressTracker";

const missions = [
  {
    title: "La Soirée Secrète",
    description: "Trouve le lieu de la première fête pour commencer ta quête.",
    riddle: "Je suis l'endroit où la nuit danse avec la musique, où les verres trinquent et les rires résonnent. Quel est le mot magique pour entrer ?",
    answer: "fête",
    hint: "Pense à ce que tu fais quand tu célèbres quelque chose...",
    icon: <PartyPopper className="w-6 h-6" />,
  },
  {
    title: "L'Élixir Noir",
    description: "Un breuvage mystérieux t'attend. Découvre où le déguster.",
    riddle: "Noir comme la nuit, chaud comme le jour, je réveille les esprits et parfume l'amour. Que suis-je ?",
    answer: "café",
    hint: "C'est la boisson préférée du matin...",
    icon: <Coffee className="w-6 h-6" />,
  },
  {
    title: "Le Festin de l'Aube",
    description: "Reprends des forces avec un repas entre amis.",
    riddle: "Entre le petit-déjeuner et le déjeuner, je suis le repas des dimanches paresseux. Comment m'appelle-t-on ?",
    answer: "brunch",
    hint: "Un mot anglais qui mélange breakfast et lunch...",
    icon: <UtensilsCrossed className="w-6 h-6" />,
  },
  {
    title: "L'Épreuve du Guerrier",
    description: "Prouve ta valeur physique pour mériter ta bien-aimée.",
    riddle: "Pour me conquérir, il faut transpirer. Je suis un lieu où les muscles travaillent et le cœur bat fort. Quel mot décrit cette épreuve ?",
    answer: "défi",
    hint: "C'est ce qu'on lance quand on veut tester quelqu'un...",
    icon: <Dumbbell className="w-6 h-6" />,
  },
  {
    title: "Le Banquet Final",
    description: "Le dernier acte de ta quête héroïque t'attend à table.",
    riddle: "Je suis la récompense ultime du héros affamé, un lieu de gastronomie où l'on célèbre la victoire. Quel est le mot de passe final ?",
    answer: "victoire",
    hint: "C'est ce que tu remportes à la fin d'une bataille...",
    icon: <Wine className="w-6 h-6" />,
  },
];

const Index = () => {
  const [completedMissions, setCompletedMissions] = useState<number[]>([]);
  const [showVictory, setShowVictory] = useState(false);

  const handleSolve = (index: number) => {
    setCompletedMissions((prev) => [...prev, index]);
    if (index === missions.length - 1) {
      setTimeout(() => setShowVictory(true), 600);
    }
  };

  const isMissionUnlocked = (index: number) => {
    if (index === 0) return true;
    return completedMissions.includes(index - 1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,hsl(43_80%_55%_/_0.18),transparent_35%),radial-gradient(circle_at_80%_30%,hsl(0_70%_50%_/_0.2),transparent_30%),linear-gradient(180deg,hsl(220_20%_7%)_0%,hsl(220_18%_11%)_52%,hsl(220_20%_7%)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs font-body uppercase tracking-[0.3em] text-primary mb-4"
          >
            Mission Top Secrète
          </motion.p>
          <h1 className="font-display text-4xl md:text-6xl font-black text-gold-gradient leading-tight">
            La Capture de la Mariée
          </h1>
          <p className="mt-4 text-base md:text-lg font-body text-foreground/70 max-w-lg mx-auto">
            Résous les énigmes, débloque les missions et sauve ta future femme.
            Chaque épreuve te rapproche d'elle.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6"
          >
            <a
              href="#missions"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm"
            >
              Commencer la Quête
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Missions */}
      <section id="missions" className="max-w-xl mx-auto px-4 py-12">
        <div className="mb-8">
          <ProgressTracker total={missions.length} completed={completedMissions.length} />
        </div>

        <div className="space-y-4">
          {missions.map((mission, i) => (
            <MissionCard
              key={i}
              number={i + 1}
              title={mission.title}
              description={mission.description}
              riddle={mission.riddle}
              answer={mission.answer}
              hint={mission.hint}
              icon={mission.icon}
              isUnlocked={isMissionUnlocked(i)}
              isCompleted={completedMissions.includes(i)}
              isActive={
                isMissionUnlocked(i) && !completedMissions.includes(i)
              }
              onSolve={() => handleSolve(i)}
            />
          ))}
        </div>

        {/* Victory modal */}
        <AnimatePresence>
          {showVictory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
              onClick={() => setShowVictory(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="bg-card border border-primary/30 rounded-lg p-8 max-w-md text-center glow-gold"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-5xl mb-4">🎉👰💍</div>
                <h2 className="font-display text-3xl font-black text-gold-gradient mb-3">
                  Mission Accomplie !
                </h2>
                <p className="font-body text-foreground/70">
                  Félicitations ! Tu as réussi toutes les épreuves. La mariée est
                  sauvée et le festin t'attend. Profite de cette soirée
                  mémorable !
                </p>
                <button
                  onClick={() => setShowVictory(false)}
                  className="mt-6 px-6 py-2 bg-primary text-primary-foreground font-body font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm"
                >
                  Fermer
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Index;
