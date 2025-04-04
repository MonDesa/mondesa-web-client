interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

export const homeTranslations: Translations = {
  'home.title': {
    pt: 'Pesquisa e Desenvolvimento em Prevenção de Desastres',
    en: 'Research and Development in Disaster Prevention'
  },
  'home.subtitle': {
    pt: 'Utilizamos tecnologia IoT avançada para criar sistemas de monitoramento que protegem comunidades vulneráveis através de alertas precoces e análise preditiva.',
    en: 'We use advanced IoT technology to create monitoring systems that protect vulnerable communities through early warning alerts and predictive analysis.'
  },
  'home.cta.explore': {
    pt: 'Explore Nossos Projetos',
    en: 'Explore Our Projects'
  },
  'home.cta.learn': {
    pt: 'Saiba Mais',
    en: 'Learn More'
  }
};
