"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Quiz() {
  const questions = [
    { q: "HTML stands for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark"], answer: 0 },
    { q: "CSS is used for?", options: ["Structure", "Styling", "Database"], answer: 1 },
    { q: "JS is?", options: ["Programming Language", "Database", "Browser"], answer: 0 },
    { q: "React is?", options: ["Library", "Database", "Server"], answer: 0 },
    { q: "Next.js is based on?", options: ["React", "Angular", "Vue"], answer: 0 },
    { q: "Which tag is paragraph?", options: ["<p>", "<h1>", "<div>"], answer: 0 },
    { q: "Which is CSS file extension?", options: [".js", ".css", ".html"], answer: 1 },
    { q: "Which is JS file?", options: [".js", ".css", ".html"], answer: 0 },
    { q: "Which is heading tag?", options: ["<h1>", "<p>", "<span>"], answer: 0 },
    { q: "Which is list tag?", options: ["<ul>", "<img>", "<table>"], answer: 0 },

    { q: "Which is image tag?", options: ["<img>", "<p>", "<h1>"], answer: 0 },
    { q: "Which is link tag?", options: ["<a>", "<link>", "<href>"], answer: 0 },
    { q: "Which is button tag?", options: ["<button>", "<btn>", "<click>"], answer: 0 },
    { q: "Which is form tag?", options: ["<form>", "<input>", "<submit>"], answer: 0 },
    { q: "Which is input tag?", options: ["<input>", "<text>", "<form>"], answer: 0 },
    { q: "Which is JavaScript keyword?", options: ["let", "css", "html"], answer: 0 },
    { q: "Which is array?", options: ["[]", "{}", "()"], answer: 0 },
    { q: "Which is object?", options: ["{}", "[]", "()"], answer: 0 },
    { q: "Which is comment in Html?", options: ["//", "<!-- -->", "##"], answer: 1 },
    { q: "Which is console log?", options: ["console.log()", "print()", "echo()"], answer: 0 },
    { q: "Which HTML tag makes a line break?", options: ["<br>", "<hr>", "<lb>"], answer: 0 },
    { q: "Which tag creates an ordered list?", options: ["<ol>", "<ul>", "<li>"], answer: 0 },
    { q: "Which tag is used for a table row?", options: ["<tr>", "<td>", "<th>"], answer: 0 },
    { q: "Which HTML tag adds a horizontal line?", options: ["<hr>", "<line>", "<br>"], answer: 0 },
    { q: "Which CSS property changes text color?", options: ["color", "background", "font-style"], answer: 0 },
    { q: "Which CSS property sets the background color?", options: ["background-color", "color", "border"], answer: 0 },
    { q: "Which CSS property sets font size?", options: ["font-size", "text-size", "size"], answer: 0 },
    { q: "Which unit is relative to the root font size?", options: ["rem", "px", "cm"], answer: 0 },
    { q: "Which CSS value makes an element a flex container?", options: ["display: flex", "position: flex", "flex: display"], answer: 0 },
    { q: "Which JS keyword declares a constant?", options: ["const", "var", "let"], answer: 0 },
    { q: "Which JS keyword declares a block-scoped variable?", options: ["let", "var", "const"], answer: 0 },
    { q: "Which symbol is used for strict equality in JS?", options: ["===", "==", "="], answer: 0 },
    { q: "Which method adds an item to the end of an array?", options: ["push()", "pop()", "shift()"], answer: 0 },
    { q: "Which method removes the last item from an array?", options: ["pop()", "push()", "unshift()"], answer: 0 },
    { q: "What does DOM stand for?", options: ["Document Object Model", "Data Object Method", "Document Oriented Map"], answer: 0 },
    { q: "Which event fires on a button click?", options: ["click", "hover", "focus"], answer: 0 },
    { q: "Which tag links a CSS file?", options: ["<link>", "<style>", "<css>"], answer: 0 },
    { q: "Which tag adds a script file?", options: ["<script>", "<js>", "<code>"], answer: 0 },
    { q: "Which HTML attribute sets an image source?", options: ["src", "href", "alt"], answer: 0 },
    { q: "Which attribute opens a link in a new tab?", options: ["target=\"_blank\"", "new=\"tab\"", "open=\"new\""], answer: 0 },
    { q: "Which is a valid JSON value?", options: ["{ \"name\": \"Ada\" }", "{ name: Ada }", "(name: 'Ada')"], answer: 0 },
    { q: "Which CSS property adds space inside an element?", options: ["padding", "margin", "gap"], answer: 0 },
    { q: "Which CSS property adds space outside an element?", options: ["margin", "padding", "border"], answer: 0 },
    { q: "Which HTML tag is used for the main heading?", options: ["<h1>", "<h6>", "<head>"], answer: 0 },
    { q: "Which HTML tag wraps the main content?", options: ["<main>", "<section>", "<div>"], answer: 0 },
  ];

  const [quizQuestions, setQuizQuestions] = useState([]);

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [timeoutHandled, setTimeoutHandled] = useState(false);

  useEffect(() => {
    const copy = [...questions];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    const randomized = copy.slice(0, 20).map((question) => {
      const correctOption = question.options[question.answer];
      const baseOptions = question.options.length < 4
        ? [...question.options, "None of the above"]
        : [...question.options];
      const correctAnswerIndex = baseOptions.indexOf(correctOption);
      const indices = baseOptions.map((_, idx) => idx);
      for (let i = indices.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      const options = indices.map((idx) => baseOptions[idx]);
      const answer = indices.indexOf(correctAnswerIndex);
      return {
        ...question,
        options,
        answer,
      };
    });

    setQuizQuestions(randomized);
  }, []);

  useEffect(() => {
    if (finish || quizQuestions.length === 0) {
      return undefined;
    }

    setTimeoutHandled(false);
    setTimeLeft(15);

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [current, finish, quizQuestions.length]);

  useEffect(() => {
    if (!finish) {
      return;
    }

    if (score >= 10) {
      localStorage.setItem("won", "true");
    } else {
      localStorage.removeItem("won");
    }
  }, [finish, score]);

  useEffect(() => {
    if (finish || quizQuestions.length === 0) {
      return;
    }

    if (timeLeft <= 0 && !timeoutHandled) {
      setTimeoutHandled(true);
      if (current + 1 < quizQuestions.length) {
        setCurrent((prev) => prev + 1);
      } else {
        setFinish(true);
      }
    }
  }, [timeLeft, current, finish, quizQuestions.length, timeoutHandled]);

  function handleAnswer(index) {
    if (index === quizQuestions[current].answer) {
      setScore((prev) => prev + 1);
    }

    if (current + 1 < quizQuestions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setFinish(true);
    }
  }

  if (quizQuestions.length === 0) {
    return (
      <div className="infesta-animated-bg min-h-screen flex items-center justify-center px-4 py-8 text-white sm:px-6">
        <div className="w-full max-w-sm rounded-2xl border border-slate-900 bg-[#0b0b0b] p-8 text-center shadow-xl">
          <p className="text-slate-400 text-sm uppercase tracking-widest">Loading</p>
          <h2 className="mt-2 text-xl font-semibold">Preparing your quiz…</h2>
        </div>
      </div>
    );
  }

  if (finish) {
    return (
      <div className="infesta-animated-bg min-h-screen flex items-center justify-center px-4 py-8 text-white sm:px-6">
        <div className="w-full max-w-md rounded-2xl border border-red-900 bg-[#0b0b0b] p-8 text-center shadow-xl sm:p-10">
          <h1 className="mb-4 text-2xl font-bold sm:text-3xl">Quiz Finished 🎉</h1>

          <h2 className="text-xl mb-2">
            Score: {score} / {quizQuestions.length}
          </h2>

          <h2 className={`text-2xl font-bold ${score >= 10 ? "text-green-400" : "text-red-400"}`}>
            {score >= 10 ? "WON" : "FAIL ❌"}
          </h2>

          <div className="mt-6 rounded-2xl border border-red-500/30 bg-black/60 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-red-400/70">Score Arena</p>
            <p className="mt-2 text-sm text-slate-300">
              Keep the momentum going with a quick centering challenge.
            </p>
            <Link
              href="/CenterMatchGame"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-red-500/50 bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Center Match Game
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="infesta-animated-bg min-h-screen px-4 py-8 text-white sm:px-6 sm:py-12">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-6 text-center sm:mb-10">
          <p className="text-[11px] uppercase tracking-[0.4em] text-red-400/80 sm:text-xs">
            St. Antony's College Peruvanthanam
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-widest text-white sm:text-4xl md:text-5xl">
            Infesta: WebSprint Challenge
          </h1>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400 sm:text-sm">
            Simple Quiz Game
          </p>
          <p className="text-base font-semibold sm:text-xl">WebSprint</p>
        </div>
        <div className="rounded-2xl border border-red-900 bg-[#0b0b0b] p-5 shadow-[0_0_40px_rgba(0,0,0,0.8)] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 text-slate-300">
            <span className="text-sm">Question {current + 1} / {quizQuestions.length}</span>
            <div className="flex items-center gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${timeLeft <= 5 ? "bg-red-600/80 text-white" : "bg-slate-800 text-slate-200"}`}>
                Time: {timeLeft}s
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200">Score: {score}</span>
            </div>
          </div>

          <h2 className="mt-6 text-center text-xl font-semibold leading-snug sm:text-2xl">
            {quizQuestions[current].q}
          </h2>

          <p className="mt-3 text-center text-sm text-slate-400">
            Choose the best answer from the options below.
          </p>

          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
            {quizQuestions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="group rounded-xl border border-slate-900 bg-[#050505] px-4 py-3 text-left font-medium text-slate-100 transition hover:border-red-500/70 hover:bg-red-600/20 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
              >
                <span className="text-slate-400 group-hover:text-red-300">{String.fromCharCode(65 + i)}.</span>{" "}
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
