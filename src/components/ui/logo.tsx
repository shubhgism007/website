import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconSize?: number;
  showTagline?: boolean;
}

export function Logo({ className, iconSize = 32, showTagline = false }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 hover:opacity-85 transition-opacity", className)}>
      <LogoIcon size={iconSize} />
      <div className="flex flex-col leading-none">
        <span className="font-bold text-[1.1rem] tracking-tight text-white">
          Avyu<span className="text-[#4f8ef7]">.ai</span>
        </span>
        {showTagline && (
          <span className="text-[10px] text-white/40 tracking-wide mt-0.5">
            Solutions That Speak Your Workflow.
          </span>
        )}
      </div>
    </Link>
  );
}

export function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lg-left" x1="20" y1="3" x2="4" y2="37" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="lg-right" x1="20" y1="3" x2="36" y2="37" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>

      {/* Left face of the A */}
      <path
        d="M20 3 L5 37 L13.5 37 L20 21 Z"
        fill="url(#lg-left)"
      />
      {/* Right face of the A */}
      <path
        d="M20 3 L35 37 L26.5 37 L20 21 Z"
        fill="url(#lg-right)"
      />
      {/* Crossbar negative space — small inner gap at apex */}
      {/* 4-pointed star / sparkle accent */}
      <path
        d="M20 14 L21.2 19 L20 24 L18.8 19 Z"
        fill="white"
        opacity="0.95"
      />
      <path
        d="M15 19 L20 17.8 L25 19 L20 20.2 Z"
        fill="white"
        opacity="0.95"
      />
    </svg>
  );
}
