export default function TipCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="card p-4">
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm opacity-90">{text}</p>
    </div>
  );
}
