import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, CheckCircle2, ChevronRight, Crosshair, ShieldAlert } from "lucide-react";

interface MissionCardProps {
  number: number;
  title: string;
  description: string;
  riddle: string;
  answer: string;
  hint: string;
  icon: React.ReactNode;
  isUnlocked: boolean;
  isCompleted: boolean;
  isActive: boolean;
  onSolve: () => void;
}

const MissionCard = ({
  number,
  title,
  description,
  riddle,
  answer,
  hint,
  icon,
  isUnlocked,
  isCompleted,
  isActive,
  onSolve,
}: MissionCardProps) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [shake, setShake] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userAnswer.trim().toLowerCase() === answer.toLowerCase()) {
      onSolve();
      setUserAnswer("");
      setExpanded(false);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: number * 0.1, duration: 0.5 }}
      className={`relative rounded-sm border overflow-hidden transition-all duration-500 ${
        isCompleted
          ? "border-primary/40 glow-gold bg-mission-unlocked"
          : isActive && isUnlocked
          ? "border-accent/30 bg-mission-unlocked"
          : "border-border bg-mission-locked opacity-60"
      }`}
    >
      {/* Active mission indicator */}
      {isActive && isUnlocked && !isCompleted && (
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
      )}

      {/* Card header */}
      <button
        onClick={() => isUnlocked && !isCompleted && setExpanded(!expanded)}
        disabled={!isUnlocked || isCompleted}
        className="w-full p-4 sm:p-5 flex items-center gap-3 sm:gap-4 text-left"
      >
        <div
          className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-sm flex items-center justify-center transition-all ${
            isCompleted
              ? "bg-primary/20 text-primary"
              : isUnlocked
              ? "bg-accent/10 text-accent border border-accent/20"
              : "bg-secondary text-muted-foreground"
          }`}
        >
          {isCompleted ? (
            <CheckCircle2 className="w-6 h-6" />
          ) : isUnlocked ? (
            icon
          ) : (
            <Lock className="w-5 h-5" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-body uppercase tracking-widest text-muted-foreground font-mono">
              OP-{String(number).padStart(2, "0")}
            </span>
            {isCompleted && (
              <span className="text-xs font-body px-2 py-0.5 rounded-sm bg-primary/20 text-primary uppercase tracking-wider">
                Déchiffré
              </span>
            )}
            {isActive && isUnlocked && !isCompleted && (
              <span className="text-xs font-body px-2 py-0.5 rounded-sm bg-accent/20 text-accent uppercase tracking-wider flex items-center gap-1">
                <Crosshair className="w-3 h-3" /> Actif
              </span>
            )}
          </div>
          <h3 className="font-display text-base sm:text-lg font-bold text-foreground mt-0.5">
            {title}
          </h3>
          {isUnlocked && (
            <p className="text-sm text-muted-foreground mt-1 font-body">{description}</p>
          )}
        </div>

        {isUnlocked && !isCompleted && (
          <ChevronRight
            className={`w-5 h-5 text-muted-foreground transition-transform ${
              expanded ? "rotate-90" : ""
            }`}
          />
        )}
      </button>

      {/* Expandable riddle section */}
      <AnimatePresence>
        {expanded && isUnlocked && !isCompleted && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-border pt-4">
              <div className="bg-accent/5 border border-accent/10 rounded-sm p-3 sm:p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldAlert className="w-4 h-4 text-accent" />
                  <span className="text-xs font-body uppercase tracking-wider text-accent">
                    Intel Intercepté
                  </span>
                </div>
                <p className="text-sm font-body italic text-foreground/80">
                  {riddle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <motion.input
                  animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Mot de passe..."
                  className="flex-1 bg-secondary border border-border rounded-sm px-3 py-2.5 sm:py-2 text-base sm:text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 sm:py-2 bg-accent text-accent-foreground rounded-sm text-sm font-body font-semibold hover:bg-accent/90 active:scale-95 transition-all uppercase tracking-wider"
                >
                  Décrypter
                </button>
              </form>

              <button
                onClick={() => setShowHint(!showHint)}
                className="mt-3 text-xs text-muted-foreground hover:text-accent transition-colors font-body"
              >
                {showHint ? "Cacher l'intel" : "📡 Demander du renfort"}
              </button>

              <AnimatePresence>
                {showHint && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-accent/70 mt-2 font-body italic"
                  >
                    ⚡ Intel du QG : {hint}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MissionCard;
