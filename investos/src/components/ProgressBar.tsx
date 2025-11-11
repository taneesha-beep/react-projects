export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full h-3 card overflow-hidden">
      <div
        className="h-full bg-white/60"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}
