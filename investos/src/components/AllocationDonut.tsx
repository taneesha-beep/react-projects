import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

type Slice = { label: string; pct: number };

export default function AllocationDonut({ data }: { data: Slice[] }) {
  const COLORS = ["#2563eb", "#16a34a", "#facc15", "#ef4444", "#8b5cf6"];

  return (
    <div className="h-64">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="pct"
            nameKey="label"
            innerRadius={60}
            outerRadius={80}
            label={(entry) => `${entry.label} ${entry.pct}%`}
            labelLine={false}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            formatter={(v: number, n: string) => [`${v}%`, n]}
            contentStyle={{ background: "rgba(255,255,255,0.9)" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
