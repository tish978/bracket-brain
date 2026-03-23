import posthog from "posthog-js";

let initialized = false;

export function initPostHog() {
  if (initialized || typeof window === "undefined") return;
  try {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "phc_placeholder", {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      capture_pageview: false,
      loaded: () => {
        initialized = true;
      },
    });
  } catch {
    // analytics failures must not break the app
  }
}

export function capture(event: string, properties?: Record<string, unknown>) {
  try {
    posthog.capture(event, properties);
  } catch {
    // silent
  }
}
