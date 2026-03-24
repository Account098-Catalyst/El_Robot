import letterImage from "@/assets/Letter.png";
import "./Letter.css";

const Letter = () => {
  return (
    <main className="letter-shell">
      {/* Atmospheric overlays */}
      <div className="letter-overlay-glow" />
      <div className="letter-overlay-scan" />

      {/* Corner frame */}
      <div className="letter-frame" aria-hidden="true">
        <span className="letter-corner letter-corner-tl" />
        <span className="letter-corner letter-corner-tr" />
        <span className="letter-corner letter-corner-bl" />
        <span className="letter-corner letter-corner-br" />
      </div>

      <img
        src={letterImage}
        alt="Mission letter"
        className="letter-image"
        style={{ touchAction: "pinch-zoom" }}
      />
    </main>
  );
};

export default Letter;
