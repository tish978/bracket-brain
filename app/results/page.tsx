"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Trophy, Share2, RotateCcw } from "lucide-react";
import { initPostHog, capture } from "@/lib/posthog";

const LABELS: Record<number, string> = {
  5: "Bracket God 🧠⚡",
  4: "March Madness Sicko",
  3: "Respectable Hooper",
  2: "Casual lol",
  1: "Yikes brother",
  0: "Zero Ball Knowledge",
};

function ResultsContent() {
  const router = useRouter();
  const params = useSearchParams();
  const [copied, setCopied] = useState(false);

  const score = Math.min(5, Math.max(0, Number(params.get("score") ?? 0)));
  const label = LABELS[score] ?? LABELS[0];

  useEffect(() => {
    initPostHog();
  }, []);

  async function handleShare() {
    capture("share_clicked");
    const url = window.location.origin;
    const text = `I got ${score}/5 on BracketBrain — "${label}" 😭 can you beat me?\n${url}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copy this:", text);
    }
  }

  return (
    <main
      className="flex-1 flex flex-col items-center justify-center px-6 py-10"
      style={{ maxWidth: 480, margin: "0 auto", width: "100%" }}
    >
      <div className="w-full flex flex-col items-center gap-8 anim-entry">

        {/* Trophy with glow */}
        <div className="relative flex items-center justify-center">
          <div
            className="absolute anim-glow"
            style={{
              width: 140,
              height: 140,
              background: "#a3e635",
              filter: "blur(48px)",
              opacity: 0.28,
              borderRadius: "50%",
            }}
          />
          <div
            className="relative flex items-center justify-center"
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              border: "2px solid #a3e635",
              background: "#18181b",
            }}
          >
            <Trophy size={44} strokeWidth={1.5} color="#a3e635" />
          </div>
        </div>

        {/* Score */}
        <div className="flex flex-col items-center gap-3">
          <p
            className="font-black uppercase"
            style={{ fontSize: 10, letterSpacing: "0.3em", color: "#71717a" }}
          >
            Final Verdict
          </p>

          <div className="flex items-end leading-none">
            <span className="font-black" style={{ fontSize: 90, lineHeight: 1 }}>
              {score}
            </span>
            <span
              className="font-black mb-2"
              style={{ fontSize: 36, color: "#52525b" }}
            >
              /5
            </span>
          </div>

          {/* Skewed label badge */}
          <div className="badge-volt" style={{ fontSize: 14, padding: "6px 18px" }}>
            {label}
          </div>
        </div>

        {/* Actions */}
        <div className="w-full flex flex-col gap-4">
          <button className="btn-outline" onClick={handleShare}>
            <Share2 size={18} strokeWidth={2} />
            {copied ? "COPIED!" : "CHALLENGE FRIENDS"}
          </button>

          <button className="btn-ghost" onClick={() => router.push("/play")}>
            <RotateCcw size={18} strokeWidth={2} />
            RETRY QUIZ
          </button>
        </div>

        {copied && (
          <p
            className="font-black uppercase anim-slide"
            style={{ fontSize: 10, letterSpacing: "0.2em", color: "#a3e635" }}
          >
            Copied — paste it anywhere ⚡
          </p>
        )}

      </div>
    </main>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <main className="flex-1 flex items-center justify-center">
          <div
            className="w-8 h-8 border-2 rounded-full animate-spin"
            style={{ borderColor: "#a3e635", borderTopColor: "transparent" }}
          />
        </main>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
