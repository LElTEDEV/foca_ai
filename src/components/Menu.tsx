import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";

export function Menu() {
  return (
    <nav className="flex items-center justify-center gap-2">
      <a
        href="#"
        className="bg-primary text-text-over-primary p-4 rounded-lg hover:brightness-150 transition ease-in"
      >
        <HouseIcon size={30} />
      </a>

      <a
        href="#"
        className="bg-primary text-text-over-primary p-4 rounded-lg hover:brightness-150 transition ease-in"
      >
        <HistoryIcon size={30} />
      </a>

      <a
        href="#"
        className="bg-primary text-text-over-primary p-4 rounded-lg hover:brightness-150 transition ease-in"
      >
        <SettingsIcon size={30} />
      </a>

      <a
        href="#"
        className="bg-primary text-text-over-primary p-4 rounded-lg hover:brightness-150 transition ease-in"
      >
        <SunIcon size={30} />
      </a>
    </nav>
  );
}
