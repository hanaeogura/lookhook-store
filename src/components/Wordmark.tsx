import Image from "next/image";

export function Wordmark() {
  return (
    <Image
      src="/logo.svg"
      alt="lookhook"
      width={180}
      height={138}
      className="h-8 w-auto"
      priority
      unoptimized
    />
  );
}

