"use client";

import Link from "next/link";

export default function Home() {
	const handleReset = () => {
		localStorage.clear();
	};

	return (
		<div className="infesta-animated-bg relative min-h-screen w-full px-4 py-10 text-white sm:px-6 sm:py-12">
			<button
				type="button"
				onClick={handleReset}
				className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full border border-slate-600/60 bg-slate-800 px-3 py-2 text-[11px] font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300 sm:right-6 sm:top-6 sm:px-4 sm:text-sm"
			>
				Reset Progress
			</button>
			<div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-8 pt-14 text-center sm:gap-10 sm:pt-0">
				<div className="space-y-4">
					<p className="text-xs uppercase tracking-[0.4em] ">
						St. Antony's College Peruvanthanam
					</p>
					<h1 className="text-4xl font-extrabold tracking-widest text-white sm:text-5xl">
						Infesta: WebSprint Challenge
					</h1>
					<p className="mx-auto max-w-2xl text-center text-base text-slate-200 sm:text-lg">
						Welcome to Infesta, the official frontend development game at St. Antony&apos;s
						College Peruvanthanam. Push your UI skills, race the clock, and earn your
						bragging rights.
					</p>
				</div>

				<div className="w-full rounded-3xl border border-red-500/30 bg-black/70 p-8 shadow-[0_0_50px_rgba(255,26,26,0.15)] sm:p-10">
					<div className="grid gap-6 sm:grid-cols-3">
						<div className="rounded-2xl border border-red-500/20 bg-black/80 p-5">
							<p className="text-xs uppercase tracking-[0.25em] text-red-400/70">Format</p>
							<h3 className="mt-2 text-xl font-semibold text-red-100">Frontend Quiz</h3>
							<p className="mt-2 text-sm text-slate-300">UX, HTML, CSS, JS essentials.</p>
						</div>
						<div className="rounded-2xl border border-red-500/20 bg-black/80 p-5">
							<p className="text-xs uppercase tracking-[0.25em] text-red-400/70">Mission</p>
							<h3 className="mt-2 text-xl font-semibold text-red-100">WebSprint</h3>
							<p className="mt-2 text-sm text-slate-300">Fast thinking, clean design.</p>
						</div>
						<div className="rounded-2xl border border-red-500/20 bg-black/80 p-5">
							<p className="text-xs uppercase tracking-[0.25em] text-red-400/70">Rules</p>
							<h3 className="mt-2 text-xl font-semibold text-red-100">20 Questions</h3>
							<p className="mt-2 text-sm text-slate-300">Instant score at the end.</p>
						</div>
					</div>

					<div className="mt-8 flex flex-col items-center gap-4">
						<Link
							href="/Quiz"
							className="inline-flex items-center justify-center rounded-full border border-red-500/50 bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
						>
						Lvl:1 Enter the Quiz Arena
						</Link>
						<Link
							href="/CenterDiv"
							className="inline-flex items-center justify-center rounded-full border border-red-500/50 bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
						>
						Lvl:2 Enter the Center Match Game
						</Link>
						<Link
							href="/Lvl3Game"
							className="inline-flex items-center justify-center rounded-full border border-red-500/50 bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
						>
						Lvl:3 Enter the Frontend Challenge (UI Making)
						</Link>
						<p className="text-xs text-red-400/70">
							Tap to start the Infesta frontend game.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
