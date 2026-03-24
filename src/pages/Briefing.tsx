import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPinned, Radio, ShieldAlert, TimerReset } from "lucide-react";

const briefingSteps = [
  {
    title: "Operational Theater",
    detail: "Enter the mission zone and inspect each intel packet in sequence. Security locks will release one objective at a time.",
    icon: MapPinned,
  },
  {
    title: "Rules of Engagement",
    detail: "Decode each clue before proceeding. Incorrect entries compromise tempo and delay extraction.",
    icon: ShieldAlert,
  },
  {
    title: "Comms Protocol",
    detail: "Use the built-in hints only when needed. Maintain focus and preserve strategic advantage.",
    icon: Radio,
  },
  {
    title: "Mission Clock",
    detail: "Complete all objectives to trigger final extraction. Full success unlocks the victory report.",
    icon: TimerReset,
  },
];

const Briefing = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="relative min-h-screen px-4 py-10 sm:py-14 flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,hsl(43_80%_55%_/_0.2),transparent_34%),radial-gradient(circle_at_86%_14%,hsl(0_70%_50%_/_0.2),transparent_34%),linear-gradient(180deg,hsl(220_20%_7%)_0%,hsl(220_18%_10%)_55%,hsl(220_20%_7%)_100%)]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, hsl(0 0% 100% / 0.3) 3px, hsl(0 0% 100% / 0.3) 4px)",
        }} />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative z-10 w-full max-w-4xl border border-primary/20 rounded-xl bg-card/70 backdrop-blur-md shadow-[0_20px_60px_hsl(0_0%_0%_/_0.5)]"
        >
          <header className="px-6 sm:px-8 md:px-10 py-6 border-b border-border/70">
            <p className="text-[11px] uppercase tracking-[0.26em] text-accent font-semibold">Military Briefing</p>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl font-black text-gold-gradient">
              Operation Iron Vow
            </h1>
            <p className="mt-3 text-sm sm:text-base text-foreground/75 max-w-2xl leading-relaxed">
              Agent Wellens, your dossier is now active. Follow this tactical protocol before entering the live objective field.
            </p>
          </header>

          <div className="px-6 sm:px-8 md:px-10 py-6 sm:py-8 space-y-4">
            {briefingSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="rounded-md border border-border/80 bg-background/45 p-4 sm:p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0 rounded-sm bg-primary/15 border border-primary/30 p-2">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-body text-sm sm:text-base uppercase tracking-wider font-semibold text-foreground">
                        {String(index + 1).padStart(2, "0")} | {step.title}
                      </h2>
                      <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <footer className="px-6 sm:px-8 md:px-10 py-6 border-t border-border/70 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.18em] text-foreground/50">Status: Awaiting deployment authorization</p>
            <Link
              to="/mission"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Deploy to Objective
            </Link>
          </footer>
        </motion.section>
      </div>
    </main>
  );
};

export default Briefing;