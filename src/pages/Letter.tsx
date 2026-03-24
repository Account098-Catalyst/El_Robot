import letterImage from "@/assets/Letter.png";

const Letter = () => {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-start py-6 px-3 sm:justify-center sm:py-8 sm:px-6">
      <img
        src={letterImage}
        alt="Mission letter"
        className="w-full max-w-lg sm:max-w-xl md:max-w-2xl h-auto object-contain rounded-sm shadow-2xl"
        style={{ touchAction: "pinch-zoom" }}
      />
    </main>
  );
};

export default Letter;
