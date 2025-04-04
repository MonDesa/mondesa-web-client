interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

export const projectsTranslations: Translations = {
  'projects.title': {
    pt: 'Projetos & Pesquisa',
    en: 'Projects & Research'
  },
  'projects.subtitle': {
    pt: 'Explorando soluções inovadoras em IoT e monitoramento de desastres através de aplicações práticas e pesquisa.',
    en: 'Exploring innovative solutions in IoT and disaster monitoring through practical applications and research.'
  },

  'projectDetail.overview': {
    pt: 'Visão Geral',
    en: 'Overview'
  },
  'projectDetail.keyFeatures': {
    pt: 'Características Principais',
    en: 'Key Features'
  },
  'projectDetail.technologies': {
    pt: 'Tecnologias',
    en: 'Technologies'
  },
  'projectDetail.resources': {
    pt: 'Recursos',
    en: 'Resources'
  },
  'projectDetail.relatedArticles': {
    pt: 'Artigos Relacionados',
    en: 'Related Articles'
  },

  'projects.landslide.title': {
    pt: 'Monitoramento de Deslizamentos',
    en: 'Landslide Monitoring'
  },
  'projects.landslide.description': {
    pt: 'Sistema de cinco camadas com sensores ruggedizados, coordenadores MQTT locais, unidades multi-protocolo, e backend centralizado para monitoramento contínuo de encostas.',
    en: 'Five-layer system with ruggedized sensors, local MQTT coordinators, multi-protocol units, and centralized backend for continuous slope monitoring.'
  },
  'projects.landslide.fullDescription': {
    pt: 'O projeto de monitoramento de deslizamentos conecta cinco camadas em um caminho contínuo de dados. Na face da encosta, nós sensores ruggedizados amostram umidade do solo, inclinação, vibração e outros sinais de alerta, publicando leituras via MQTT para um coordenador local de baixo consumo. Unidades de Comunicação (CUs) baseadas em ESP32 operam três opções de rádio—LoRa para longa distância, Wi-Fi para alta velocidade, e 4G para alcance móvel—medindo qualidade do link em tempo real e selecionando automaticamente o melhor canal disponível. Os dados são escritos diretamente em um banco relacional central que armazena pelo menos 24h de entradas. Um serviço backend leve monitora novas entradas, dispara alertas e expõe interface web/API para dashboards e ferramentas de gestão de emergência. Cada camada tem uma responsabilidade específica, tornando o sistema tolerante a falhas de link, cortes de energia e terreno hostil, operando com microcontroladores de baixo consumo e custo.',
    en: 'The landslide-monitoring project links five layers into one continuous data path. At the slope face, ruggedized sensor nodes sample soil moisture, tilt, vibration and other warning signs, publishing readings via MQTT to a low-power local coordinator. Communication Units (CUs) built around ESP32 operate three radio options—LoRa for long-range, Wi-Fi for high speed, and 4G for mobile reach—measuring link quality in real time and automatically selecting the best available channel. Data is written directly into a central relational database that stores at least 24h of entries. A lightweight backend service monitors new entries, triggers alerts, and exposes web/API interface for dashboards and emergency-management tools. Each layer has one tight responsibility, making the system tolerant of link failures, power cuts and harsh terrain while running on inexpensive, low-power microcontrollers.'
  },
  'projects.landslide.features.1': {
    pt: 'Sensores ruggedizados para umidade do solo, inclinação e vibração em condições extremas',
    en: 'Ruggedized sensors for soil moisture, tilt and vibration in extreme conditions'
  },
  'projects.landslide.features.2': {
    pt: 'Coordenadores locais MQTT de baixo consumo coletando dados dos sensores',
    en: 'Low-power local MQTT coordinators collecting sensor data'
  },
  'projects.landslide.features.3': {
    pt: 'Unidades multi-protocolo ESP32 com LoRa, Wi-Fi e 4G para comunicação adaptativa',
    en: 'Multi-protocol ESP32 units with LoRa, Wi-Fi and 4G for adaptive communication'
  },
  'projects.landslide.features.4': {
    pt: 'Banco de dados central relacional com 24h+ de armazenamento para continuidade',
    en: 'Central relational database with 24h+ storage for continuity'
  },
  'projects.landslide.features.5': {
    pt: 'Backend leve com alertas automáticos e API web para dashboards e gestão de emergência',
    en: 'Lightweight backend with automatic alerts and web API for dashboards and emergency management'
  },

  'projects.enemeter.title': {
    pt: 'EneMeter',
    en: 'EneMeter'
  },
  'projects.enemeter.description': {
    pt: 'Medidor inteligente de energia para sistemas críticos de monitoramento - estuda perfis de energia entre baterias, painéis solares e equipamentos.',
    en: 'Smart power meter for critical monitoring systems - studies energy profiles between batteries, solar panels and equipment.'
  },
  'projects.enemeter.fullDescription': {
    pt: 'O EneMeter é um medidor eletrônico que se posiciona entre uma bateria, um painel solar e equipamentos de monitoramento crítico. Ele registra precisamente o consumo de energia do sistema e a energia fornecida pelo painel solar. Isso evita falhas de bateria através do perfil de consumo energético do sistema, economiza dinheiro, reduz viagens de manutenção e - mais importante - ajuda a manter sensores de alerta precoce funcionando quando são mais necessários.',
    en: 'EneMeter is an electronic meter that sits between a battery, a solar panel and critical monitoring equipment. It precisely records the system\'s energy consumption and the energy supplied by the solar panel. This avoids battery failure through system energy consumption profiling, saves money, reduces maintenance trips and—most importantly—helps keep early-warning sensors alive when they are most needed.'
  },
  'projects.enemeter.features.1': {
    pt: 'Evita falhas de bateria através do perfil detalhado de consumo energético do sistema',
    en: 'Prevents battery failure through detailed system energy consumption profiling'
  },
  'projects.enemeter.features.2': {
    pt: 'Dimensionamento adequado de bateria e painel solar baseado em dados reais',
    en: 'Proper battery and solar panel sizing based on real data'
  },
  'projects.enemeter.features.3': {
    pt: 'Reduz custos e viagens de manutenção para sistemas críticos remotos',
    en: 'Reduces costs and maintenance trips for remote critical systems'
  },
  'projects.enemeter.features.4': {
    pt: 'Mantém sensores de alerta precoce funcionando quando são mais necessários',
    en: 'Keeps early-warning sensors alive when they are most needed'
  },
  'projects.enemeter.features.5': {
    pt: 'Produz dados confiáveis para validação e otimização de sistemas críticos',
    en: 'Produces reliable data for validation and optimization of critical systems'
  },

  'projects.enoe.title': {
    pt: 'e-Noé',
    en: 'e-Noé'
  },
  'projects.enoe.description': {
    pt: 'Plataforma multi-camadas completa para monitoramento hidrológico usando redes de sensores sem fio, machine learning, e dashboards web interativos.',
    en: 'Complete multi-tier platform for hydrological monitoring using wireless sensor networks, machine learning, and interactive web dashboards.'
  },
  'projects.enoe.fullDescription': {
    pt: 'O e-Noé é uma arquitetura multi-camadas sofisticada que combina sensores ESP32 com comunicação LoRa, processamento distribuído em Kubernetes, e aprendizado de máquina para monitoramento hidrológico avançado. A plataforma integra múltiplos protocolos de comunicação (LoRa, MQTT, HTTP), armazenamento robusto (InfluxDB, MinIO), processamento assíncrono (Celery), e visualização interativa (React, Mapbox) para criar um sistema completo de prevenção a enchentes. O sistema suporta desde sensores de campo até dashboards web, permitindo monitoramento em tempo real, análise preditiva e alertas antecipados através de uma arquitetura escalável e tolerante a falhas.',
    en: 'e-Noé is a sophisticated multi-tier architecture combining ESP32 sensors with LoRa communication, distributed Kubernetes processing, and machine learning for advanced hydrological monitoring. The platform integrates multiple communication protocols (LoRa, MQTT, HTTP), robust storage (InfluxDB, MinIO), asynchronous processing (Celery), and interactive visualization (React, Mapbox) to create a complete flood prevention system. The system supports everything from field sensors to web dashboards, enabling real-time monitoring, predictive analysis, and early warnings through a scalable, fault-tolerant architecture.'
  },
  'projects.enoe.features.1': {
    pt: 'Arquitetura distribuída tolerante a falhas com Kubernetes e containers Docker',
    en: 'Fault-tolerant distributed architecture with Kubernetes and Docker containers'
  },
  'projects.enoe.features.2': {
    pt: 'Comunicação multi-protocolo: LoRa para longa distância, MQTT para tempo real',
    en: 'Multi-protocol communication: LoRa for long-range, MQTT for real-time'
  },
  'projects.enoe.features.3': {
    pt: 'Pipeline completo de dados: coleta, processamento assíncrono, machine learning',
    en: 'Complete data pipeline: collection, asynchronous processing, machine learning'
  },
  'projects.enoe.features.4': {
    pt: 'Armazenamento híbrido: séries temporais (InfluxDB) e objetos (MinIO)',
    en: 'Hybrid storage: time series (InfluxDB) and object storage (MinIO)'
  },
  'projects.enoe.features.5': {
    pt: 'Visualização interativa com mapas Mapbox e streaming HLS para câmeras',
    en: 'Interactive visualization with Mapbox maps and HLS streaming for cameras'
  },
  'projects.enoe.features.6': {
    pt: 'Sensores ESP32 com conectividade LoRa para monitoramento remoto robusto',
    en: 'ESP32 sensors with LoRa connectivity for robust remote monitoring'
  },
  'projects.enoe.features.7': {
    pt: 'API REST escalável e sistema de alertas em tempo real baseado em eventos',
    en: 'Scalable REST API and real-time event-driven alert system'
  }
};
