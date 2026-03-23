"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { initPostHog, capture } from "@/lib/posthog";
import type { Question } from "@/lib/questions";

export default function PlayPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    initPostHog();
    fetch("/api/questions")
      .then((r) => r.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  const handleAnswer = useCallback(
    (option: string) => {
      if (selected !== null) return;
      setSelected(option);
      const correct = option === questions[current].correctAnswer;
      if (correct) setScore((s) => s + 1);
      capture("question_answered", { questionIndex: current, wasCorrect: correct });
    },
    [selected, questions, current]
  );

  function handleNext() {
    const next = current + 1;
    if (next >= questions.length) {
      const label = getLabel(score);
      capture("game_completed", {
        score,
        total: 5,
        percentage: Math.round((score / 5) * 100),
        label,
      });
      router.push(`/results?score=${score}`);
    } else {
      setCurrent(next);
      setSelected(null);
    }
  }

  /* ── Error ── */
  if (error) {
    return (
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-zinc-500 text-sm font-black uppercase tracking-widest">
            Failed to load questions
          </p>
          <button className="btn-volt" style={{ width: "auto", padding: "14px 32px" }} onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </main>
    );
  }

  /* ── Loading ── */
  if (loading || questions.length === 0) {
    return (
      <main className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin"
            style={{ borderColor: "#a3e635", borderTopColor: "transparent" }}
          />
          <p className="text-zinc-600 text-[10px] font-black tracking-widest uppercase">
            Loading...
          </p>
        </div>
      </main>
    );
  }

  const q = questions[current];
  const isLast = current === questions.length - 1;
  const answered = selected !== null;

  /* ── Game ── */
  return (
    <main
      className="flex-1 flex flex-col px-6 pt-6 pb-10"
      style={{ maxWidth: 480, margin: "0 auto", width: "100%" }}
    >
      <div className="flex flex-col gap-6 anim-entry" key={current}>

        {/* Status row */}
        <div className="flex items-center justify-between">
          <div className="badge-volt"
            style={{ fontSize: 10, padding: "4px 10px" }}>
            Quiz in Progress
          </div>
          <span
            className="font-black uppercase"
            style={{ fontSize: 10, letterSpacing: "0.2em", color: "#71717a" }}
          >
            {current + 1} OF {questions.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-zinc-900">
          <div
            className="h-full transition-all duration-500"
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
              background: "#a3e635",
            }}
          />
        </div>

        {/* Question card */}
        <div
          className="bg-zinc-900 px-5 py-5"
          style={{ borderLeft: "8px solid #a3e635" }}
        >
          <p
            className="text-xl font-black uppercase tracking-tight leading-snug"
            style={{ fontStyle: "italic" }}
          >
            {q.question}
          </p>
        </div>

        {/* Answer options */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {q.options.map((option) => {
            const isSelected = selected === option;
            const isCorrect = option === q.correctAnswer;

            let cls = "answer-btn";
            if (answered) {
              if (isCorrect) cls += " correct";
              else if (isSelected) cls += " wrong";
              else cls += " dimmed";
            }

            return (
              <button
                key={option}
                className={cls}
                onClick={() => handleAnswer(option)}
                disabled={answered}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Fact + Next — revealed after answer */}
        {answered && (
          <div className="flex flex-col gap-4 anim-slide">
            {/* Did you know */}
            <div className="bg-zinc-900" style={{ borderLeft: "4px solid #a3e635", padding: "12px 16px" }}>
              <p
                className="font-black uppercase mb-1"
                style={{ fontSize: 10, letterSpacing: "0.2em", color: "#a3e635" }}
              >
                Did You Know?
              </p>
              <p className="text-sm font-bold text-zinc-400 leading-relaxed">
                {q.fact}
              </p>
            </div>

            {/* Next / Results */}
            <button className="btn-volt" onClick={handleNext}>
              {isLast ? "SEE RESULTS" : "NEXT QUESTION"}
            </button>
          </div>
        )}

      </div>
    </main>
  );
}

function getLabel(score: number): string {
  if (score === 5) return "Bracket God 🧠⚡";
  if (score === 4) return "March Madness Sicko";
  if (score === 3) return "Respectable Hooper";
  if (score === 2) return "Casual lol";
  if (score === 1) return "Yikes brother";
  return "Zero Ball Knowledge";
}
