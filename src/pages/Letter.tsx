import letterImage from "@/assets/Letter.png";
import "./Letter.css";

const Letter = () => {
  return (
    <main className="letter-page-shell">
      <section className="letter-hero">
        <div className="letter-overlay-main" />
        <div className="letter-overlay-glow" />
        <div className="letter-overlay-scan" />

        <div className="letter-frame" aria-hidden="true">
          <span className="letter-corner letter-corner-tl" />
          <span className="letter-corner letter-corner-tr" />
          <span className="letter-corner letter-corner-bl" />
          <span className="letter-corner letter-corner-br" />
        </div>

        <div className="letter-content">
          <div className="letter-content-inner">
            <img
              src={letterImage}
              alt="Mission letter"
              className="letter-image"
              style={{ touchAction: "pinch-zoom" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Letter;
