import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import agentImage from "@/assets/Bond-like focus and precision.png";

const Landing = () => {
  return (
    <main className="bg-background text-foreground">
      <section className="relative h-screen min-h-[620px] overflow-hidden">
        <img
          src={agentImage}
          alt="Agent portrait"
          className="absolute inset-0 h-full w-full object-cover object-[center_24%] sm:object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(220_20%_7%_/_0.72)_0%,hsl(220_20%_7%_/_0.2)_38%,hsl(220_20%_7%_/_0.78)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,hsl(43_80%_58%_/_0.22),transparent_36%)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, hsl(0 0% 100% / 0.25) 3px, hsl(0 0% 100% / 0.25) 4px)",
          }}
        />

        <div className="hero-text-container relative z-10 h-full mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-full flex-col">
            <div className="branding flex-1 flex items-start justify-center pt-12 sm:pt-14 md:pt-16">
              <motion.h1
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-gold-gradient [text-shadow:0_6px_28px_hsl(0_0%_0%_/_0.72)]"
              >
                Agent Wellens, Welcome
              </motion.h1>
            </div>

            <div className="hero-bottom flex justify-center pb-10 sm:pb-12">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
              >
                <Link
                  to="/briefing"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-[0.18em] hover:bg-primary/90 transition-colors shadow-[0_8px_24px_hsl(0_0%_0%_/_0.45)]"
                >
                  I accept
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;