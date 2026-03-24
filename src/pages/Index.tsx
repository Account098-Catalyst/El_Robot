import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PartyPopper, Coffee, UtensilsCrossed, Dumbbell, Wine, AlertTriangle, Timer } from "lucide-react";
import MissionCard from "@/components/MissionCard";
import ProgressTracker from "@/components/ProgressTracker";

const missions = [
  {
    title: "Transmission Interceptée",
    description: "Un message codé a été intercepté. Déchiffre-le pour localiser le premier point de rendez-vous des ravisseurs.",
    riddle: "Les ravisseurs célèbrent leur coup dans un lieu où la nuit danse avec la musique, où les verres trinquent sous les néons. Quel est le mot de passe pour infiltrer leur repaire ?",
    answer: "fête",
    hint: "Pense à ce que font les criminels quand ils célèbrent un mauvais coup...",
    icon: <PartyPopper className="w-6 h-6" />,
  },
  {
    title: "L'Informateur",
    description: "Un agent double accepte de te parler... mais seulement autour d'un breuvage bien précis.",
    riddle: "L'informateur te donne rendez-vous là où l'on sert un élixir noir, brûlant et amer. Identifie ce breuvage pour le retrouver.",
    answer: "café",
    hint: "La boisson que tout espion boit pour rester éveillé...",
    icon: <Coffee className="w-6 h-6" />,
  },
  {
    title: "Planque Secrète",
    description: "Tu dois reprendre des forces avant l'assaut final. Un repas clandestin a été organisé.",
    riddle: "Entre le petit-déjeuner et le déjeuner, les agents se retrouvent pour un repas hybride. Comment s'appelle ce ravitaillement stratégique ?",
    answer: "brunch",
    hint: "Un mot anglais, mélange de breakfast et lunch...",
    icon: <UtensilsCrossed className="w-6 h-6" />,
  },
  {
    title: "Test de Résistance",
    description: "Les ravisseurs veulent vérifier que tu mérites de récupérer ta fiancée. Prouve ta valeur.",
    riddle: "Pour libérer l'otage, tu dois d'abord prouver ta force. Les ravisseurs te lancent une épreuve physique. Quel mot décrit ce qu'ils exigent de toi ?",
    answer: "défi",
    hint: "C'est ce qu'on lance quand on veut tester quelqu'un...",
    icon: <Dumbbell className="w-6 h-6" />,
  },
  {
    title: "L'Échange Final",
    description: "Le lieu de l'échange a été révélé. Rends-toi au point de rendez-vous pour récupérer ta fiancée.",
    riddle: "La rançon est payée, les ravisseurs t'attendent dans un lieu de gastronomie pour l'échange final. Quel mot symbolise la fin de cette mission ?",
    answer: "victoire",
    hint: "C'est ce que tu remportes quand la mission est accomplie...",
    icon: <Wine className="w-6 h-6" />,
  },
];

const Index = () => {
  const [completedMissions, setCompletedMissions] = useState<number[]>([]);
  const [showVictory, setShowVictory] = useState(false);
  const [glitchText, setGlitchText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 150);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      <section className="relative h-[85vh] sm:h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,hsl(43_80%_55%_/_0.18),transparent_35%),radial-gradient(circle_at_80%_30%,hsl(0_70%_50%_/_0.2),transparent_30%),linear-gradient(180deg,hsl(220_20%_7%)_0%,hsl(220_18%_11%)_52%,hsl(220_20%_7%)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
          {/* Scanline effect */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 0% / 0.3) 2px, hsl(0 0% 0% / 0.3) 4px)',
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-5 sm:px-4 max-w-2xl w-full"
        >
          {/* Classification badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-sm border border-accent/50 bg-accent/10 mb-4 sm:mb-6"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-accent" />
            <span className="text-[10px] sm:text-xs font-body uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent font-semibold">
              Classifié — Niveau Omega
            </span>
          </motion.div>

          <h1 className={`font-display text-3xl sm:text-4xl md:text-6xl font-black text-gold-gradient leading-tight transition-all ${glitchText ? 'opacity-70 skew-x-1' : ''}`}>
            La Mariée a été Enlevée
          </h1>

          {/* Ransom message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 sm:mt-6 mx-auto max-w-lg bg-card/80 border border-accent/30 rounded-sm p-3 sm:p-4 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <Timer className="w-4 h-4 text-accent" />
              <span className="text-xs font-body uppercase tracking-widest text-accent">
                Message des Ravisseurs
              </span>
            </div>
            <p className="text-sm md:text-base font-body text-foreground/80 italic leading-relaxed">
              « Nous détenons ta fiancée. Si tu veux la revoir, accomplis chaque mission. 
              Un seul échec et tu ne la reverras jamais. Le compte à rebours est lancé. »
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6"
          >
            <a
              href="#missions"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-sm hover:bg-accent/90 active:scale-95 transition-all text-sm uppercase tracking-wider"
            >
              <AlertTriangle className="w-4 h-4" />
              Accepter la Mission
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Missions */}
      <section id="missions" className="max-w-xl mx-auto px-4 sm:px-4 py-8 sm:py-12">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-px flex-1 bg-accent/20" />
          <span className="text-xs font-body uppercase tracking-[0.2em] text-accent/60">Dossier Opérationnel</span>
          <div className="h-px flex-1 bg-accent/20" />
        </div>

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
                className="bg-card border border-primary/30 rounded-sm p-6 sm:p-8 max-w-md w-full text-center glow-gold"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-5xl mb-4">🎯👰💍</div>
                <h2 className="font-display text-3xl font-black text-gold-gradient mb-3">
                  Mission Accomplie
                </h2>
                <p className="font-body text-foreground/70">
                  Agent, la mariée a été libérée avec succès. Les ravisseurs sont en fuite. 
                  Rejoins le point d'extraction pour célébrer cette victoire. 
                  Le banquet final t'attend.
                </p>
                <button
                  onClick={() => setShowVictory(false)}
                  className="mt-6 px-6 py-2 bg-primary text-primary-foreground font-body font-semibold rounded-sm hover:bg-primary/90 transition-colors text-sm uppercase tracking-wider"
                >
                  Rapport de Mission
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
