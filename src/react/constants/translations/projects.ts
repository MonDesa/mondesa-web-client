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
  },

  'projects.fireRiskPredictor.title': {
    pt: 'Preditor de Risco de Incêndio',
    en: 'Fire Risk Predictor'
  },
  'projects.fireRiskPredictor.description': {
    pt: 'Sistema baseado em machine learning para predição de risco de incêndios florestais no Brasil usando dados ambientais e atmosféricos, com API REST e interface web interativa.',
    en: 'Machine learning-based system for predicting wildfire risk in Brazil using environmental and atmospheric data, with REST API and interactive web interface.'
  },
  'projects.fireRiskPredictor.fullDescription': {
    pt: 'O Brasil enfrenta uma crise crescente de incêndios florestais, com 278.229 focos de calor registrados apenas em 2024, o maior número em 14 anos segundo o INPE. A região amazônica foi o bioma mais afetado, com mais de 140.000 focos representando um aumento de 77% em relação a 2023.\n\nEste projeto aborda o desafio da detecção reativa de incêndios usando aprendizado de máquina para prever onde incêndios são mais prováveis de ocorrer com base em condições ambientais, permitindo ação preventiva antes que os incêndios se espalhem. O sistema utiliza dados do SISAM (Sistema de Informações de Saúde Ambiental), contendo registros de focos de calor em todo o Brasil desde 2003, com 14 variáveis ambientais e atmosféricas incluindo concentrações de gases (CO, NO₂, O₃, PM2.5, SO₂), dados meteorológicos (precipitação, temperatura, umidade, vento) e coordenadas geográficas.\n\nTrês modelos de ML foram treinados com validação cruzada K-Fold: Random Forest, MLP (Rede Neural com camadas 100x100) e XGBoost, todos com otimização de limiar para maximizar o F1 score. A arquitetura inclui um backend FastAPI para inferência do modelo e uma interface React para predições interativas, comparação de modelos e visualização de métricas.',
    en: 'Brazil faces an increasing wildfire crisis, with 278,229 heat spots recorded in 2024 alone, the highest number in 14 years according to INPE. The Amazon region was the most affected biome, with over 140,000 spots representing a 77% increase compared to 2023.\n\nThis project addresses the challenge of reactive fire detection by using machine learning to predict where fires are most likely to occur based on environmental conditions, enabling preventive action before fires spread. The system uses data from SISAM (Sistema de Informações de Saúde Ambiental), containing heat spot records across Brazil since 2003, with 14 environmental and atmospheric variables including gas concentrations (CO, NO₂, O₃, PM2.5, SO₂), meteorological data (precipitation, temperature, humidity, wind) and geographic coordinates.\n\nThree ML models were trained with K-Fold cross validation: Random Forest, MLP (Neural Network with 100x100 layers) and XGBoost, all with threshold optimization to maximize F1 score. The architecture includes a FastAPI backend for model inference and a React frontend for interactive predictions, model comparison and metrics visualization.'
  },
  'projects.fireRiskPredictor.features.1': {
    pt: 'Três modelos de ML treinados: Random Forest, MLP (Rede Neural) e XGBoost com validação cruzada K-Fold',
    en: 'Three trained ML models: Random Forest, MLP (Neural Network) and XGBoost with K-Fold cross validation'
  },
  'projects.fireRiskPredictor.features.2': {
    pt: 'API REST para predições em lote, comparação de modelos e otimização de limiar de classificação',
    en: 'REST API for batch predictions, model comparison and classification threshold optimization'
  },
  'projects.fireRiskPredictor.features.3': {
    pt: 'Interface web interativa com upload de dados, teste com dados de amostra e visualização de métricas',
    en: 'Interactive web interface with data upload, sample data testing and metrics visualization'
  },
  'projects.fireRiskPredictor.features.4': {
    pt: 'Dataset de 2.6M+ registros do SISAM com 14 variáveis ambientais e atmosféricas',
    en: 'Dataset of 2.6M+ records from SISAM with 14 environmental and atmospheric variables'
  },
  'projects.fireRiskPredictor.features.5': {
    pt: 'Matrizes de confusão, gráficos F1 score vs limiar e comparação multi-modelo em tempo real',
    en: 'Confusion matrices, F1 score vs threshold charts and real-time multi-model comparison'
  }
};
