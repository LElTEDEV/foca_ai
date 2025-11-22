import { TimerIcon } from "lucide-react";

export function Logo() {
  return (
    <div>
      <a
        href="#"
        className="flex flex-col items-center justify-center gap-4 text-primary hover:brightness-125 transition ease-in"
      >
        <TimerIcon size={64} />
        <span className="text-4xl font-bold">Foca Ai</span>
      </a>
    </div>
  );
}
