export default function PersonaBadge({
  persona,
  confidence,
}: {
  persona: string;
  confidence: number;
}) {
  return (
    <div className="card p-5">
      <h2 className="text-2xl font-bold">Your Persona: {persona}</h2>
      <p className="opacity-80">Confidence: {Math.round(confidence * 100)}%</p>
    </div>
  );
}
