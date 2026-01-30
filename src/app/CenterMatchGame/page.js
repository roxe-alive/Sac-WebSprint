"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function CssCenterGame() {
  const router = useRouter();
  const containerRef = useRef(null);
  const playerRef = useRef(null);

  const [accessChecked, setAccessChecked] = useState(false);

  const [cssInput, setCssInput] = useState(
`left: 0px;
top: 0px;`
  );

  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    const hasWon = localStorage.getItem("won") === "true";
    if (!hasWon) {
      router.replace("/Quiz");
      return;
    }

    setAccessChecked(true);
  }, [router]);

  const applyCSS = () => {
    if (!playerRef.current) return;

    playerRef.current.style.cssText = cssInput;
  };

  const checkMatch = () => {
    const container = containerRef.current.getBoundingClientRect();
    const player = playerRef.current.getBoundingClientRect();

    const containerCenterX = container.left + container.width / 2;
    const containerCenterY = container.top + container.height / 2;

    const playerCenterX = player.left + player.width / 2;
    const playerCenterY = player.top + player.height / 2;

    const maxDistance = Math.sqrt(
      Math.pow(container.width / 2, 2) +
      Math.pow(container.height / 2, 2)
    );

    const distance = Math.sqrt(
      Math.pow(containerCenterX - playerCenterX, 2) +
      Math.pow(containerCenterY - playerCenterY, 2)
    );

    const match = Math.max(0, 100 - (distance / maxDistance) * 100);

    setScore(match.toFixed(2));

    if (match >= 90) {
      setResult("🎉 Perfect Center! You Win");
    } else {
      setResult("❌ Not Centered Yet");
    }
  };

  return (
    !accessChecked ? (
      <div className="infesta-animated-bg min-h-screen flex items-center justify-center px-4 py-8 text-white sm:px-6">
        <div className="w-full max-w-sm rounded-2xl border border-slate-900 bg-[#0b0b0b] p-8 text-center shadow-xl">
          <p className="text-slate-400 text-sm uppercase tracking-widest">Checking access</p>
          <h2 className="mt-2 text-xl font-semibold">Preparing your game…</h2>
        </div>
      </div>
    ) : (
    <div className="infesta-animated-bg min-h-screen px-4 py-10 text-white sm:px-6 sm:py-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.4em] text-red-400/80 sm:text-xs">
            St. Antony&apos;s College Peruvanthanam
          </p>
          <h1 className="text-3xl font-extrabold tracking-widest text-white sm:text-4xl">
            CSS Center Match Game
          </h1>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 sm:text-sm">
            Infesta: WebSprint Challenge
          </p>
        </div>

        <div className="w-full rounded-3xl border border-red-500/30 bg-black/70 p-6 shadow-[0_0_50px_rgba(255,26,26,0.18)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col items-center gap-5">
              <div
                ref={containerRef}
                className="relative h-[320px] w-[320px] rounded-2xl border border-white/15 bg-[#0b0b0b] shadow-[0_0_30px_rgba(0,0,0,0.6)]"
              >
                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-red-500/25" />

                <div
                  ref={playerRef}
                  className="absolute h-16 w-16 rounded-xl bg-red-500"
                />
              </div>

              <div className="w-full max-w-md text-left">
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-red-400/70">
                  Edit CSS
                </p>
                <textarea
                  value={cssInput}
                  onChange={(e) => setCssInput(e.target.value)}
                  className="h-32 w-full rounded-2xl border border-red-500/30 bg-[#050505] p-3 text-sm text-slate-100 outline-none ring-red-400/40 transition focus:ring-2"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
              <div className="w-full rounded-2xl border border-red-500/30 bg-[#0b0b0b] p-5 text-left shadow-[0_0_40px_rgba(0,0,0,0.7)]">
                <p className="text-xs uppercase tracking-[0.25em] text-red-400/70">Scoreboard</p>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
                  <span>Match</span>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-200">
                    {score}%
                  </span>
                </div>
                <p className="mt-4 text-lg font-semibold text-slate-100">{result || "Try to center the block"}</p>
                <p className="mt-2 text-xs text-slate-400">
                  Aim for 90% or higher to win.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3">
                <button
                  onClick={applyCSS}
                  className="inline-flex items-center justify-center rounded-full border border-red-500/60 bg-red-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Apply CSS
                </button>

                <button
                  onClick={checkMatch}
                  className="inline-flex items-center justify-center rounded-full border border-green-500/50 bg-emerald-500/90 px-6 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                >
                  Check Match
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  );
}
