import Image from "next/image";

export function Wordmark() {
  return (
    <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)]">
      <Image
        src="/brand-mark.svg"
        alt="Brand mark"
        width={20}
        height={20}
        priority
      />
    </span>
  );
}

