"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	const [accessChecked, setAccessChecked] = useState(false);
    const [accessDenied, setAccessDenied] = useState(false);


	useEffect(() => {
		const hasWon = localStorage.getItem("lvl") === "00x2";
		if (!hasWon) {
	    setAccessDenied(true);
        setAccessChecked(true);
			return;
		}

		setAccessChecked(true);
	}, [router]);

	const handleReset = () => {
		localStorage.clear();
		router.replace("/");
	};

	return (
    !accessChecked ? (
      <div className="infesta-animated-bg min-h-screen flex items-center justify-center px-4 py-8 text-white sm:px-6">
        <div className="w-full max-w-sm rounded-2xl border border-slate-900 bg-[#0b0b0b] p-8 text-center shadow-xl">
          <p className="text-slate-400 text-sm uppercase tracking-widest">Checking access</p>
          <h2 className="mt-2 text-xl font-semibold">Preparing your game…</h2>
        </div>
      </div>
    ) : accessDenied ? (
      <div className="infesta-animated-bg min-h-screen flex items-center justify-center px-4 py-8 text-white sm:px-6">
        <div className="w-full max-w-md rounded-2xl border border-red-500/40 bg-[#0b0b0b] p-8 text-center shadow-xl">
          <p className="text-red-400 text-xs uppercase tracking-[0.3em]">Access denied</p>
          <h2 className="mt-3 text-2xl font-semibold">Not allowed to play this level</h2>
          <p className="mt-2 text-sm text-slate-400">
            Finish the previous level to unlock this game.
          </p>
          <button
            onClick={() => router.replace("/")}
            className="mt-5 inline-flex items-center justify-center rounded-full border border-red-500/50 bg-red-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Go to Home
          </button>
        </div>
      </div>
    ) : (
		<div className="infesta-animated-bg relative min-h-screen w-full px-4 py-10 text-white sm:px-6 sm:py-12">
			<div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-8 pt-14 text-center sm:gap-10 sm:pt-0">
				<div className="space-y-4">
					<p className="text-xs uppercase tracking-[0.4em] ">
						St. Antony's College Peruvanthanam
					</p>
					<h1 className="text-4xl font-extrabold tracking-widest text-white sm:text-5xl">
						Infesta: WebSprint Challenge
					</h1>
					<p className="max-w-2xl text-base text-slate-200 sm:text-lg">
						Welcome to Infesta, the official frontend development game at St. Antony&apos;s
						College Peruvanthanam. Push your UI skills, race the clock, and earn your
						bragging rights.
					</p>
				</div>

					<div className="mt-8 flex flex-col items-center gap-4">
						<Link
							href="/api/download/logo"
							className="inline-flex items-center justify-center rounded-full border border-red-500/50 bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
						>
						DOWNLOAD LOGO
						</Link>
						<Link
							href="/api/download/bg"
							className="inline-flex items-center justify-center rounded-full border border-red-500/50 bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
						>
          DOWNLOAD BACKGROUND IMG
						</Link>

						<p className="text-xs text-red-400/70">
							Tap to start the Infesta frontend game.
						</p>
					</div>
				</div>
		</div>
	)
	);
}
