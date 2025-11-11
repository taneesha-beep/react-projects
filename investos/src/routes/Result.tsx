import { useLocalState } from "../lib/useLocalState";
import { QUESTIONS } from "../data/questions";
import { analyze } from "../lib/scoring";
import { getAllocation } from "../lib/allocations";
import PersonaBadge from "../components/PersonaBadge";
import AllocationDonut from "../components/AllocationDonut";
import LiveTickers from "../components/LiveTickers";
import TipCard from "../components/TipCard";
import Sticker from "../components/stickers/ResultSticker";
import { Piggy, Coins } from "../components/stickers/ResultSticker"; // ✅ only Piggy & Coins

export default function Result() {
  const [answers] = useLocalState<number[]>(
    "mv-answers",
    Array(QUESTIONS.length).fill(-1)
  );
  const { persona, confidence } = analyze(answers, QUESTIONS);
  const alloc = getAllocation(persona);

  return (
    <div className="max-w-4xl mx-auto space-y-6 relative">
      {/* Top Piggy sticker */}
      <Sticker pos={{ top: "-20px", right: "40px" }} size={60}>
        <Piggy />
      </Sticker>

      <PersonaBadge persona={persona} confidence={confidence} />

      <div className="grid md:grid-cols-2 gap-6 relative">
        {/* Left card: Suggested Asset Mix */}
        <div className="card p-4 relative">
          <Sticker pos={{ top: "-18px", left: "-18px" }} size={48} float={true}>
            <Coins />
          </Sticker>
          <h3 className="font-semibold mb-2">Suggested Asset Mix</h3>
          <AllocationDonut data={alloc} />
        </div>

        {/* Right card: Live Market Snippets (🚀 rocket removed) */}
        <div className="card p-4 relative">
          <h3 className="font-semibold mb-2">Live Market Snippets</h3>
          <LiveTickers />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <TipCard
          title="Why this fits"
          text="Your profile suggests a balance between growth and stability."
        />
        <TipCard
          title="Guardrails"
          text="Short horizon or low capacity caps equity even if appetite is high."
        />
        <TipCard
          title="Disclaimer"
          text="Educational only. Not investment advice."
        />
      </div>
    </div>
  );
}
