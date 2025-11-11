import ChoiceButton from "./ChoiceButton";
import { Question } from "../data/questions";

export default function QuestionCard({
  q,
  idx,
  total,
  onChoose,
  onBack,
  selected,
}: {
  q: Question;
  idx: number;
  total: number;
  onChoose: (i: number) => void;
  onBack: () => void;
  selected: number;
}) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm opacity-80">
          Question {idx + 1} of {total}
        </p>
        <button className="btn" onClick={onBack} disabled={idx === 0}>
          Back
        </button>
      </div>
      <h3 className="text-xl font-semibold mb-4">{q.prompt}</h3>
      <div className="grid gap-3">
        {q.choices.map((c, i) => (
          <ChoiceButton
            key={i}
            label={c.label}
            active={selected === i}
            onClick={() => onChoose(i)}
          />
        ))}
      </div>
    </div>
  );
}
