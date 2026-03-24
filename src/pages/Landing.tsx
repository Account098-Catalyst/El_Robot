import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import agentImage from "@/assets/Bond-like focus and precision.png";
import "./Landing.css";

const Landing = () => {
  return (
    <main className="landing-page-shell">
      <section className="landing-hero">
        <img
          src={agentImage}
          alt="Agent portrait"
          className="landing-hero-image"
        />

        <div className="landing-overlay-main" />
        <div className="landing-overlay-glow" />
        <div className="landing-overlay-scan" />

        <div className="landing-frame" aria-hidden="true">
          <span className="landing-corner landing-corner-tl" />
          <span className="landing-corner landing-corner-tr" />
          <span className="landing-corner landing-corner-bl" />
          <span className="landing-corner landing-corner-br" />
        </div>

        <div className="landing-content">
          <div className="landing-content-inner">
            <div className="landing-masthead">
              <p className="landing-masthead-text">
                Classified Transmission
              </p>
            </div>

            <div className="landing-title-wrap">
              <motion.h1
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="landing-title"
              >
                Agent Wellens, Welcome
              </motion.h1>
            </div>

            <div className="landing-bottom-band">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="landing-cta-wrap"
              >
                <Link to="/letter" className="landing-cta">
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