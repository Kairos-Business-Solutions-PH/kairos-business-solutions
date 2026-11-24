import Image from "next/image";

// Logo assets are trimmed + sized by scripts/prepare-logos.mjs into /public/brand.
// "dark.png" = navy + blue artwork (for light surfaces).
// "light.png" = white + blue artwork (for dark surfaces and the navy footer).
const ASPECT = 2.95; // width / height of trimmed logo

type Props = {
  height?: number;
  /** "auto" swaps by theme; "on-dark" always uses the white-and-blue logo (footer). */
  variant?: "auto" | "on-dark";
  priority?: boolean;
  className?: string;
};

export function Logo({ height = 44, variant = "auto", priority = false, className = "" }: Props) {
  const width = Math.round(height * ASPECT);
  const common = { width, height, priority, sizes: `${width}px`, style: { height, width: "auto" } } as const;

  if (variant === "on-dark") {
    return (
      <Image
        src="/brand/logo-light.png"
        alt="Kairos Business Solutions"
        className={className}
        {...common}
      />
    );
  }

  return (
    <>
      <Image
        src="/brand/logo-dark.png"
        alt="Kairos Business Solutions"
        className={`dark:hidden ${className}`}
        {...common}
      />
      <Image
        src="/brand/logo-light.png"
        alt=""
        aria-hidden="true"
        className={`hidden dark:block ${className}`}
        {...common}
        priority={false}
        loading="lazy"
      />
    </>
  );
}
