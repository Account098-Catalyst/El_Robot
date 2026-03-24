import letterImage from "@/assets/Letter.png";

const Letter = () => {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4">
      <img
        src={letterImage}
        alt="Mission letter"
        className="max-h-[95vh] w-auto max-w-full object-contain"
      />
    </main>
  );
};

export default Letter;
