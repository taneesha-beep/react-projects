import { Book, Lightbulb } from "../components/stickers/AboutSticker";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto card p-6 space-y-3">
      <h2 className="text-2xl font-bold">About Investos</h2>
      <p>
        Investos helps beginners understand their investor personality via a
        simple quiz and maps it to an asset mix.
      </p>
      {/* <p className="text-white/80 text-sm">
        This is an educational demo. Not investment advice.
      </p> */}
    </div>
  );
}
