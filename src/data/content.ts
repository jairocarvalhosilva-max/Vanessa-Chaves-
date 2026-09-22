import { Treatment, Differential, Step, Testimonial, FaqItem } from '../types';

export const CLINIC_INFO = {
  name: "Vanessa Chaves",
  brandName: "Vanessa Chaves | Pós-operatório",
  role: "Especialista em Pré e Pós-operatório",
  tagline: "Menos inchaço, mais definição.",
  city: "Imperatriz",
  state: "MA",
  locationDisplay: "Imperatriz – MA",
  whatsappNumber: "5599992220195",
  whatsappFormatted: "(99) 99222-0195",
  whatsappDirectUrl: "https://api.whatsapp.com/send/?phone=5599992220195&text&type=phone_number&app_absent=0",
  instagramHandle: "@vanessacrestetica",
  instagramPostUrl: "https://www.instagram.com/p/DZqbetWgx-w/",
  reelVideoUrl: "https://www.instagram.com/reel/DW2OjslAPbM/",
  instagramProfileUrl: "https://www.instagram.com/vanessacrestetica/",
  defaultMessage: "Olá, Vanessa! Vim pelo seu site e gostaria de saber mais sobre os atendimentos de pré e pós-operatório.",
  medicalDisclaimer: "Os resultados e a indicação de técnicas podem variar de acordo com cada pessoa e procedimento. O atendimento não substitui o acompanhamento médico e é realizado em consonância com as orientações do seu cirurgião.",
};

export const getWhatsAppUrl = (customMessage?: string) => {
  if (!customMessage) {
    return `https://api.whatsapp.com/send/?phone=${CLINIC_INFO.whatsappNumber}&text&type=phone_number&app_absent=0`;
  }
  return `https://api.whatsapp.com/send/?phone=${CLINIC_INFO.whatsappNumber}&text=${encodeURIComponent(customMessage)}&type=phone_number&app_absent=0`;
};

export const DIFFERENTIALS: Differential[] = [
  {
    title: "Atendimento humanizado",
    description: "Cada pessoa recebe atenção individualizada e escuta sensível.",
    iconName: "HeartHandshake",
  },
  {
    title: "Cuidado personalizado",
    description: "O atendimento é adaptado às necessidades e evolução de cada cliente.",
    iconName: "Sparkles",
  },
  {
    title: "Especialização",
    description: "Foco integral e aprofundado em cuidados pré e pós-operatórios.",
    iconName: "Award",
  },
  {
    title: "Atendimento em Imperatriz-MA",
    description: "Facilidade, proximidade e acolhimento para clientes da nossa região.",
    iconName: "MapPin",
  },
];

export const TREATMENTS: Treatment[] = [
  {
    id: "taping",
    title: "Taping Terapêutico",
    subtitle: "Controle de edema e conforto mecânico",
    shortDescription: "Recurso complementar de bandagem elástica neuromuscular aplicado de maneira estratégica e responsável, conforme rigorosa avaliação profissional.",
    fullDescription: "O taping no pós-operatório atua como um excelente recurso auxiliar. A aplicação de fitas elásticas terapêuticas com tensões e sentidos adequados promove o alívio da pressão intersticial, auxilia no direcionamento do fluxo linfático, previne a formação de dobras cutâneas e proporciona maior sensação de estabilidade e segurança para a paciente nas primeiras semanas.",
    benefits: [
      "Auxilia na redução e contenção do inchaço (edema)",
      "Promove sensação de firmeza e segurança nos movimentos",
      "Ajuda a prevenir equimoses extensas e dobras teciduais",
      "Aplicação personalizada segundo a fase cirúrgica",
    ],
    recommendation: "Indicado tanto no intra/pós-imediato quanto em fases subsequentes, sempre respeitando as condições da pele e orientações médicas.",
    iconName: "Ribbon",
  },
  {
    id: "fibrose",
    title: "Tratamento de Fibrose",
    subtitle: "Manejo tecidual e maleabilidade cutânea",
    shortDescription: "Cuidados direcionados para a região que apresenta fibrose, sempre considerando a avaliação individual e o momento do pós-operatório.",
    fullDescription: "A fibrose cicatricial é uma resposta natural do organismo ao trauma cirúrgico, mas quando desorganizada pode gerar irregularidades, endurecimento e desconforto. O manejo correto utiliza técnicas manuais suaves, remodelagem tecidual gradual e recursos fisioterapêuticos que respeitam a vascularização e reorganizam as fibras colágenas sem causar dor agressiva.",
    benefits: [
      "Suavização de retrações e áreas endurecidas",
      "Melhora da maleabilidade e uniformidade do tecido",
      "Respeito absoluto à integridade vascular e linfática",
      "Acompanhamento da evolução com registro visual comparativo",
    ],
    recommendation: "Avaliado clinicamente para intervenção no momento biológico exato, evitando manobras excessivamente traumáticas.",
    iconName: "Fingerprint",
  },
  {
    id: "drenagem",
    title: "Drenagem Linfática",
    subtitle: "Técnica manual pós-cirúrgica especializada",
    shortDescription: "Técnica realizada de forma cuidadosa e personalizada, respeitando as condições e orientações relacionadas ao período pós-operatório.",
    fullDescription: "Diferente de uma drenagem estética convencional, a drenagem linfática reversa no pós-operatório requer profundo conhecimento anatômico. É realizada através de manobras lentas, rítmicas e extremamente suaves para captar e desviar a linfa das áreas operadas para linfonodos viáveis, reduzindo a dor provocada pelo acúmulo de líquidos e acelerando o bem-estar.",
    benefits: [
      "Alívio significativo da tensão e sensação de peso do edema",
      "Estímulo fisiológico das vias linfáticas colaterais",
      "Promoção de relaxamento profundo e conforto geral",
      "Respeito estrito às incisões, drenos e curativos",
    ],
    recommendation: "Iniciada conforme a autorização expressa do cirurgião plástico, normalmente nos primeiros dias após a cirurgia.",
    iconName: "Droplets",
  },
  {
    id: "pre-operatorio",
    title: "Cuidados Pré-operatórios",
    subtitle: "Preparo corporal e orientações preventivas",
    shortDescription: "Orientações e cuidados para preparar o corpo e proporcionar uma experiência mais organizada antes do procedimento.",
    fullDescription: "Um pós-operatório de sucesso começa antes mesmo de entrar no centro cirúrgico. No pré-operatório, realizamos a desintoxicação tecidual, hidratação profunda da pele, medidas basais e orientações essenciais sobre o uso de cintas, placas contensivas, posicionamento no leito e expectativas realistas para os primeiros dias em casa.",
    benefits: [
      "Preparo da vascularização e oxigenação dos tecidos",
      "Instruções práticas sobre repouso, cintas e pós-imediato",
      "Redução da ansiedade através de esclarecimento seguro",
      "Registro detalhado das medidas e tônus pré-cirúrgicos",
    ],
    recommendation: "Recomendado entre 15 a 30 dias antes da data agendada para o procedimento cirúrgico.",
    iconName: "CalendarClock",
  },
  {
    id: "pos-operatorio",
    title: "Cuidados Pós-operatórios",
    subtitle: "Acompanhamento individual e integral",
    shortDescription: "Acompanhamento individualizado durante uma fase que exige atenção, cuidado e respeito ao tempo de recuperação de cada pessoa.",
    fullDescription: "O pós-operatório é um período vulnerável que necessita de acompanhamento próximo, carinho e responsabilidade técnica. Desde o alívio imediato do inchaço até o acabamento estético final, cada sessão é adaptada à velocidade de regeneração do seu corpo, garantindo suporte físico e emocional para uma recuperação serena.",
    benefits: [
      "Atenção contínua à cicatrização e aspecto cutâneo",
      "Ajuste e orientação diária do uso de órteses e modeladores",
      "Respeito irrestrito ao tempo biológico de cada organismo",
      "Comunicação fluida para sanar dúvidas diárias da paciente",
    ],
    recommendation: "Cronograma de sessões planejado sob medida após anamnese detalhada e alinhamento com a equipe cirúrgica.",
    iconName: "ShieldCheck",
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: "Atendimento humanizado",
    description: "Empatia e acolhimento genuíno para um momento sensível de transformação.",
  },
  {
    title: "Avaliação individualizada",
    description: "Análise minuciosa de cada paciente, tipo de cirurgia e características biológicas.",
  },
  {
    title: "Técnicas personalizadas",
    description: "Condutas terapêuticas selecionadas especificamente para sua fase de cicatrização.",
  },
  {
    title: "Acompanhamento cuidadoso",
    description: "Atenção próxima e monitoramento constante de cada detalhe da sua recuperação.",
  },
  {
    title: "Ambiente acolhedor",
    description: "Espaço tranquilo, higienizado, climatizado e pensado para seu absoluto conforto.",
  },
  {
    title: "Atenção aos detalhes",
    description: "Cuidado delicado com curativos, integridade da pele, postura e bem-estar.",
  },
  {
    title: "Respeito ao tempo de cada corpo",
    description: "Sem pressões ou procedimentos invasivos; respeitamos o ritmo natural da sua cura.",
  },
];

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    stepNumber: "01",
    title: "Entre em contato",
    description: "Clique no botão do WhatsApp e envie uma mensagem com suas dúvidas e planos.",
  },
  {
    stepNumber: "02",
    title: "Converse com Vanessa",
    description: "Explique suas necessidades, seu procedimento já realizado ou data da cirurgia planejada.",
  },
  {
    stepNumber: "03",
    title: "Avaliação",
    description: "Será definido o plano de atendimento mais adequado, seguro e personalizado para você.",
  },
  {
    stepNumber: "04",
    title: "Cuidados personalizados",
    description: "O acompanhamento será realizado de forma individualizada com total atenção a cada etapa.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "Mariana S.",
    procedure: "Lipoaspiração HD & Mastopexia",
    comment: "O acolhimento da Vanessa fez toda a diferença no meu pós-operatório em Imperatriz. O alívio do inchaço após cada sessão de drenagem foi surreal e me senti cuidada do início ao fim!",
    rating: 5,
    isExample: true,
  },
  {
    id: "2",
    author: "Camila R.",
    procedure: "Abdominoplastia",
    comment: "Estava muito insegura com a recuperação e o medo de fibroses. O cuidado da Vanessa com a aplicação do taping e as manobras suaves me trouxeram muita segurança e conforto.",
    rating: 5,
    isExample: true,
  },
  {
    id: "3",
    author: "Juliana M.",
    procedure: "Prótese de Mama",
    comment: "Profissionalismo impecável, pontualidade e uma sensibilidade rara. Ela realmente escuta a paciente e respeita o tempo do nosso corpo. Super recomendo!",
    rating: 5,
    isExample: true,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quando devo começar o acompanhamento pós-operatório?",
    answer: "A orientação depende do procedimento realizado e das recomendações da equipe responsável pela cirurgia. Em muitos casos, o taping pode ser colocado logo no pós-imediato ou as primeiras sessões de drenagem iniciadas entre 48h e 7 dias após o procedimento, sempre com autorização do seu médico. O ideal é conversar previamente para planejar o momento adequado.",
  },
  {
    question: "A drenagem linfática pode ser feita após qualquer cirurgia?",
    answer: "Cada caso deve ser avaliado individualmente e respeitar as orientações do médico responsável. A técnica pós-cirúrgica é suave, indolor e adaptada especificamente às vias linfáticas preservadas em cada procedimento.",
  },
  {
    question: "O atendimento é personalizado?",
    answer: "Sim, absolutamente. Não trabalhamos com protocolos engessados. Cada atendimento considera o tipo de cirurgia realizada, as queixas do dia, o nível de edema, o momento da cicatrização e as necessidades fisiológicas únicas de cada paciente.",
  },
  {
    question: "Atende em Imperatriz-MA?",
    answer: "Sim! O atendimento é realizado em Imperatriz – MA, em consultório estruturado com todo o conforto, privacidade, normas de biossegurança e acolhimento que você merece.",
  },
  {
    question: "Como posso agendar?",
    answer: "É muito simples: basta clicar em qualquer botão de WhatsApp nesta página para conversar diretamente conosco. Tiraremos suas dúvidas, checaremos a disponibilidade na agenda e organizaremos seu atendimento com todo carinho.",
  },
];
