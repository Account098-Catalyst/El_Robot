import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import agentImage from "@/assets/Bond-like focus and precision.png";

const Landing = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="relative min-h-screen flex items-center justify-center px-4 py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,hsl(43_80%_55%_/_0.22),transparent_36%),radial-gradient(circle_at_85%_24%,hsl(0_70%_50%_/_0.22),transparent_34%),linear-gradient(180deg,hsl(220_20%_7%)_0%,hsl(220_18%_10%)_58%,hsl(220_20%_7%)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,hsl(0_0%_100%_/_0.02)_0%,transparent_32%,transparent_70%,hsl(0_0%_100%_/_0.02)_100%)]" />

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 w-full max-w-5xl rounded-xl border border-primary/20 bg-card/60 backdrop-blur-md shadow-[0_18px_60px_hsl(0_0%_0%_/_0.5)]"
        >
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-0">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center w-fit gap-2 px-3 py-1 rounded-sm border border-accent/40 bg-accent/10 text-accent text-[10px] tracking-[0.2em] uppercase font-semibold mb-5">
                Secure Channel Open
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-gold-gradient">
                Agent Wellens, Welcome
              </h1>

              <p className="mt-5 text-sm sm:text-base text-foreground/75 leading-relaxed max-w-xl">
                Your mission briefing is ready. Proceed to enter the operational interface and begin the rescue sequence.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/briefing"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-sm bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
                >
                  I accept my mission
                </Link>
                <span className="text-xs uppercase tracking-[0.18em] text-foreground/45">
                  Clearance Level: Omega
                </span>
              </div>
            </div>

            <div className="relative min-h-[280px] md:min-h-full">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-card/85 md:to-transparent" />
              <img
                src={agentImage}
                alt="Agent portrait"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Landing;