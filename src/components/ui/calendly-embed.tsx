"use client";

import { useEffect } from "react";

interface CalendlyEmbedProps {
  url: string;
  height?: number;
}

export function CalendlyEmbed({ url, height = 660 }: CalendlyEmbedProps) {
  useEffect(() => {
    const existing = document.getElementById("calendly-script");
    if (existing) return;

    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // leave script in DOM — removing it causes issues on re-mount
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-lg overflow-hidden"
      data-url={url}
      style={{ minWidth: 320, height }}
    />
  );
}
