import type { ReactNode } from "react";

import { Menu } from "../components/Menu";
import { Logo } from "../components/Logo";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";

type MainTemplate = {
  children: ReactNode;
};

export function MainTemplate({ children }: MainTemplate) {
  return (
    <>
      <Container className="mt-6">
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
