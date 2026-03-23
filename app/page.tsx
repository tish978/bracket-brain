"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Zap } from "lucide-react";
import { initPostHog, capture } from "@/lib/posthog";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    initPostHog();
  }, []);

  function handlePlay() {
    capture("game_started");
    router.push("/play");
  }

  return (
    <main
      className="flex-1 flex flex-col items-center justify-center px-6"
      style={{ maxWidth: 480, margin: "0 auto", width: "100%" }}
    >
      <div className="w-full flex flex-col items-center gap-7 anim-entry">

        {/* Hero icon with glow */}
        <div className="relative flex items-center justify-center">
          {/* glow */}
          <div
            className="absolute rounded-full anim-glow"
            style={{
              width: 120,
              height: 120,
              background: "#a3e635",
              filter: "blur(40px)",
              opacity: 0.3,
            }}
          />
          {/* icon tile */}
          <div
            className="relative flex items-center justify-center"
            style={{
              width: 80,
              height: 80,
              background: "#a3e635",
              borderRadius: 12,
            }}
          >
            <Zap size={40} strokeWidth={2} color="#000" fill="#000" />
          </div>
        </div>

        {/* Headline */}
        <div className="flex flex-col items-center gap-4 text-center w-full">
          <h1
            className="text-5xl font-black uppercase tracking-tighter leading-none"
            style={{ fontStyle: "italic" }}
          >
            ARE YOU A REAL{" "}
            <span style={{ color: "#a3e635" }}>
              MARCH<br />MADNESS
            </span>{" "}
            FAN?
          </h1>

          {/* Skewed badge */}
          <div className="badge-outline">
            <span>MOST PEOPLE CAN&apos;T GET 5/5</span>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full">
          <button className="btn-volt" onClick={handlePlay}>
            PLAY NOW
          </button>
        </div>

      </div>
    </main>
  );
}
