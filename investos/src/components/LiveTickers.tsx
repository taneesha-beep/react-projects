import { useEffect, useState } from "react";
import { getCryptoTickers, getStockDemo } from "../lib/api";

export default function LiveTickers() {
  const [crypto, setCrypto] = useState<any>(null);
  const [stock, setStock] = useState<any>(null);
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    Promise.all([getCryptoTickers(), getStockDemo()])
      .then(([c, s]) => {
        setCrypto(c);
        setStock(s);
      })
      .catch(() => setErr("Network busy — showing sample values."));
  }, []);

  const btc = crypto?.bitcoin?.inr;
  const chg = crypto?.bitcoin?.inr_24h_change;
  const chgText = typeof chg === "number" ? chg.toFixed(2) : "…";

  // Alpha Vantage demo parsing
  let lastClose: string | undefined;
  if (stock?.["Time Series (Daily)"]) {
    const entries = Object.entries(stock["Time Series (Daily)"]) as [
      string,
      any
    ][];
    const [, latest] = entries[0];
    lastClose = latest["4. close"];
  }

  return (
    <div className="space-y-2">
      {err && <p className="text-sm opacity-80">{err}</p>}
      <div className="card p-3">
        BTC (INR): {btc ? btc.toLocaleString("en-IN") : "…"}{" "}
        <span
          className={
            typeof chg === "number" && chg >= 0
              ? "text-green-200"
              : "text-red-200"
          }
        >
          ({chgText}%)
        </span>
      </div>
      <div className="card p-3">MSFT last close (demo): {lastClose ?? "…"}</div>
    </div>
  );
}
