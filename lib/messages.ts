export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";
export const localeStorageKey = "portfolio-locale";

export const messages = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      role: "Engenheiro de software",
      titleBefore: "Oi, meu nome é",
      name: "Jean Patrick",
      description:
        "Amo tecnologia e gosto de projetar, estruturar e construir com ela.",
      viewProjects: "Ver projetos",
      contact: "Contato",
    },
    about: {
      eyebrow: "Sobre mim",
      heading: "Quem sou eu",
      p1: "Sou estudante de Engenharia da Computação com forte interesse em Engenharia de Software. Gosto de arquitetar, estruturar e construir sistemas modernos, sempre com organização e boas práticas de desenvolvimento.",
      p2: "Trabalho principalmente com tecnologias modernas como TypeScript e React. Também tenho experiência com Python, que uso quando é a melhor opção para diferentes tipos de problemas.",
      technologies: "Tecnologias",
    },
    projects: {
      eyebrow: "Portfólio",
      heading: "Projetos em destaque",
      code: "Código",
      demo: "Demo",
      items: [
        {
          title: "Jfinance",
          description:
            "App de gestão financeira para acompanhar receitas, despesas e metas em um painel simples — visão mensal e saldo sem planilhas complicadas.",
        },
        {
          title: "Event Manager",
          description:
            "Gerenciador de eventos para registrar datas e detalhes e manter tudo em um só fluxo — ideal para quem organiza a agenda e compromissos.",
        },
        {
          title: "Morzen",
          description:
            "Landing page da Morzen, empresa que co-fundei: quem somos, o que entregamos e como contratar nossos serviços.",
        },
        {
          title: "NLW 20",
          description:
            "App que integra a API do Gemini para o usuário tirar dúvidas sobre jogos e obter respostas contextuais — feito em torno da curiosidade e descoberta.",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      heading: "Vamos conversar",
      blurb:
        "Se quiser trocar uma ideia ou falar sobre um projeto, pode me mandar um e-mail quando quiser.",
    },
    footer: { rights: "Todos os direitos reservados." },
    language: {
      label: "EN",
      aria: "Mudar idioma para inglês",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      role: "Software Engineer",
      titleBefore: "Hi, my name is",
      name: "Jean Patrick",
      description:
        "I love technology and designing, structuring, and building with it.",
      viewProjects: "View projects",
      contact: "Contact",
    },
    about: {
      eyebrow: "About me",
      heading: "Who I am",
      p1: "I'm a Computer Engineering student with a strong interest in Software Engineering. I enjoy architecting, structuring, and building modern systems, always aiming for organization and solid practices in development.",
      p2: "I work mainly with modern technologies like TypeScript and React. I also have experience with Python, which I use when it's the better fit for different kinds of problems.",
      technologies: "Technologies",
    },
    projects: {
      eyebrow: "Portfolio",
      heading: "Featured projects",
      code: "Code",
      demo: "Demo",
      items: [
        {
          title: "Jfinance",
          description:
            "Financial management app to track income, expenses, and goals in a simple dashboard — monthly view and balance without complicated spreadsheets.",
        },
        {
          title: "Event Manager",
          description:
            "Event manager to register dates and details and keep everything in one flow — ideal for anyone organizing their schedule and commitments.",
        },
        {
          title: "Morzen",
          description:
            "Morzen landing page — a company I co-founded: who we are, what we deliver, and where you can hire our services.",
        },
        {
          title: "NLW 20",
          description:
            "App that integrates the Gemini API so users can ask questions about games and get contextual answers — built around curiosity and discovery.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's talk",
      blurb:
        "If you'd like to chat or discuss a project, feel free to send me an email anytime.",
    },
    footer: { rights: "All rights reserved." },
    language: {
      label: "PT",
      aria: "Switch language to Portuguese",
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];
