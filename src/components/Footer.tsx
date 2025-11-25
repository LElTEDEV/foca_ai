export function Footer() {
  return (
    <footer className="flex flex-col gap-2 items-center justify-center text-[1.2rem] text-text-muted ">
      <a href="#" className="hover:text-text-default transition ease-in">
        Entenda como funciona a técnica pomodoro.
      </a>
      <a href="#" className="hover:text-text-default transition ease-in">
        Foca ai &copy; {new Date().getFullYear()} - Feito com 💚
      </a>
    </footer>
  );
}
