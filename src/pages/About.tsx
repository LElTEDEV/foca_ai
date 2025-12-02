import { MainTemplate } from "../templates/MainTemplate";

export function About() {
  return (
    <MainTemplate>
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 md:pt-14">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 p-6 md:p-10">
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
                SOBRE A TÉCNICA
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Técnica Pomodoro:
                <span className="text-primary-light">
                  {" "}
                  foco em blocos curtos
                </span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-gray-200 md:text-base">
                A técnica Pomodoro é um método de gestão de tempo criado por{" "}
                <span className="font-semibold">Francesco Cirillo</span> no
                final dos anos 1980. A ideia é trabalhar em períodos de foco
                total, chamados de{" "}
                <span className="font-semibold">pomodoros</span>, intercalados
                com pausas curtas para manter o cérebro descansado e produtivo.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-100 md:text-sm">
                <div className="flex items-center gap-2 rounded-2xl border border-gray-700 bg-gray-800 px-3 py-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold">
                    25
                  </span>
                  <span>minutos de foco intenso</span>
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-gray-700 bg-gray-800 px-3 py-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-light/15 text-xs font-semibold">
                    5
                  </span>
                  <span>minutos de pausa curta</span>
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-gray-700 bg-gray-800 px-3 py-2">
                  <span className="inline-flex items-center justify-center rounded-full bg-primary-dark/20 text-[11px] font-semibold">
                    15 / 30
                  </span>
                  <span>minutos de pausa longa</span>
                </div>
              </div>
            </div>

            {/* Side card */}
            <aside className="h-fit rounded-3xl border border-primary/40 bg-gray-900/90 p-5 shadow-[0_0_45px_rgba(13,161,112,0.35)]">
              <h2 className="text-sm font-semibold tracking-tight">
                Como funciona um ciclo Pomodoro
              </h2>

              <ol className="mt-4 space-y-3 text-xs text-gray-200 md:text-sm">
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-[11px] font-bold text-text-over-primary">
                    1
                  </span>
                  <p>
                    Escolha uma tarefa e defina um{" "}
                    <strong>timer de 25 minutos</strong>. Durante esse tempo,
                    foque apenas nessa atividade.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-[11px] font-bold text-text-over-primary">
                    2
                  </span>
                  <p>
                    Quando o tempo acabar, marque 1 pomodoro concluído e faça
                    uma <strong>pausa de 5 minutos</strong>.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-[11px] font-bold text-text-over-primary">
                    3
                  </span>
                  <p>
                    Após <strong>4 pomodoros</strong>, faça uma{" "}
                    <strong>pausa longa</strong> de 15 a 30 minutos.
                  </p>
                </li>
              </ol>

              <p className="mt-5 text-xs text-gray-300">
                Esse padrão ajuda a reduzir a procrastinação, manter o foco e
                diminuir o cansaço mental ao longo do dia.
              </p>
            </aside>
          </div>
        </section>

        {/* Benefícios */}
        <section className="mt-12 md:mt-14">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Por que usar a técnica Pomodoro?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-200 md:text-base">
            Em vez de tentar ser produtivo por horas seguidas, o Pomodoro assume
            que o cérebro trabalha melhor em blocos curtos e focados. Isso torna
            o trabalho mais leve, previsível e menos estressante.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <article className="flex flex-col gap-2 rounded-2xl border border-gray-800 bg-gray-800/70 p-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-base">🎯</span>
                Foco de verdade
              </h3>
              <p className="text-xs leading-relaxed text-gray-200 md:text-sm">
                Com tempo limitado, você reduz distrações e concentra sua
                energia em uma tarefa por vez.
              </p>
            </article>

            <article className="flex flex-col gap-2 rounded-2xl border border-gray-800 bg-gray-800/70 p-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-base">🧠</span>
                Menos cansaço mental
              </h3>
              <p className="text-xs leading-relaxed text-gray-200 md:text-sm">
                As pausas frequentes evitam o esgotamento, ajudando a manter a
                clareza mental ao longo do dia.
              </p>
            </article>

            <article className="flex flex-col gap-2 rounded-2xl border border-gray-800 bg-gray-800/70 p-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-base">📊</span>
                Visão clara do seu esforço
              </h3>
              <p className="text-xs leading-relaxed text-gray-200 md:text-sm">
                Cada pomodoro é uma unidade de medida do seu trabalho,
                facilitando estimar quanto tempo as tarefas realmente levam.
              </p>
            </article>
          </div>
        </section>

        {/* Como aplicar */}
        <section className="mt-12 md:mt-14">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Como aplicar Pomodoro no dia a dia
          </h2>

          <div className="mt-5 grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="space-y-4 text-sm text-gray-200 md:text-base">
              <p>
                Você pode usar a técnica Pomodoro para estudar, programar,
                trabalhar, ler ou qualquer tarefa que exija concentração.
              </p>
              <ul className="space-y-2 text-xs md:text-sm">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    <strong>Liste suas tarefas</strong> e defina o que é mais
                    importante fazer primeiro.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Estime quantos <strong>pomodoros</strong> cada tarefa deve
                    levar.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Durante o pomodoro, evite{" "}
                    <strong>celular, redes sociais e notificações</strong>.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Se for interrompido, anote o que surgiu e volte ao foco até
                    o timer tocar.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-800/80 p-4 text-xs text-gray-200 md:text-sm">
              <h3 className="text-sm font-semibold">Exemplo de rotina</h3>

              <div className="mt-4 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">Manhã</p>
                    <p className="text-[11px] text-gray-300 md:text-xs">
                      4 pomodoros para trabalho profundo ou estudo.
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-[11px] font-medium text-primary-light">
                    4 × 25 min
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">Tarde</p>
                    <p className="text-[11px] text-gray-300 md:text-xs">
                      3 pomodoros para tarefas mais operacionais.
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-[11px] font-medium text-primary-light">
                    3 × 25 min
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">Fechamento do dia</p>
                    <p className="text-[11px] text-gray-300 md:text-xs">
                      1 pomodoro para revisar o dia e planejar o próximo.
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-[11px] font-medium text-primary-light">
                    1 × 25 min
                  </span>
                </div>
              </div>

              <p className="mt-4 text-[11px] leading-relaxed text-gray-300 md:text-xs">
                A quantidade ideal de pomodoros varia de pessoa para pessoa. Use
                como referência e vá ajustando conforme seu ritmo.
              </p>
            </div>
          </div>
        </section>

        {/* Dicas finais */}
        <section className="mt-12 md:mt-14">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Dicas para aproveitar melhor a técnica
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-800 bg-gray-800/70 p-4 text-xs text-gray-200 md:text-sm">
              <h3 className="font-semibold">🧩 Adapte à sua realidade</h3>
              <p className="mt-2 text-gray-200">
                25 minutos é o padrão, mas você pode testar blocos maiores se já
                tiver boa capacidade de foco. Só não elimine as pausas.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gray-800/70 p-4 text-xs text-gray-200 md:text-sm">
              <h3 className="font-semibold">📵 Proteja seus pomodoros</h3>
              <p className="mt-2 text-gray-200">
                Ative o modo “não perturbe”, feche abas desnecessárias e deixe o
                celular longe da mesa enquanto o timer estiver rodando.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gray-800/70 p-4 text-xs text-gray-200 md:text-sm">
              <h3 className="font-semibold">📝 Registre o que fez</h3>
              <p className="mt-2 text-gray-200">
                Anote quantos pomodoros cada tarefa consumiu. Isso ajuda a ter
                previsões mais realistas de tempo no futuro.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gray-800/70 p-4 text-xs text-gray-200 md:text-sm">
              <h3 className="font-semibold">😌 Pausas de verdade</h3>
              <p className="mt-2 text-gray-200">
                Evite usar a pausa para rolar feed infinito. Levante, beba água,
                alongue-se ou simplesmente descanse a mente por alguns minutos.
              </p>
            </div>
          </div>
        </section>
      </main>
    </MainTemplate>
  );
}
