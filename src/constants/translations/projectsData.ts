import { Language } from '../../contexts/LanguageContext';

export const PROJECT_IDS = {
  LANDSLIDE_MONITORING: 1,
  ENEMETER: 2,
  E_NOE: 3,
} as const;

export const PROJECT_TRANSLATION_KEYS = {
  [PROJECT_IDS.LANDSLIDE_MONITORING]: 'landslide',
  [PROJECT_IDS.ENEMETER]: 'enemeter',
  [PROJECT_IDS.E_NOE]: 'enoe',
} as const;

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  color: string;
  github?: { title: string; url: string }[];
  websites?: { title: string; url: string }[];
  relatedArticles?: { title: string; url?: string; pdfUrl?: string }[];
  image?: string | null;
}

export interface DisplayProject {
  id: number;
  title: string;
  description: string;
  tech: string[];
  color: string;
  image: string | null;
}

const projectsBaseData = [
  {
    id: PROJECT_IDS.LANDSLIDE_MONITORING,
    tech: ['IoT Sensors', 'Multi-Protocol', 'Wireless Networks', 'Real-time Data'],
    color: '#A3C6D4',
    github: [
      {
        title: 'Main Coordinator System',
        url: 'https://github.com/MonDesa/landslide-monitoring'
      },
      {
        title: 'Multi-Protocol Communication Unit',
        url: 'https://github.com/MonDesa/landslide-communication-unit'
      },
      {
        title: 'External Server & Data Processing',
        url: 'https://github.com/MonDesa/landslide-external-server'
      }
    ],
    relatedArticles: [
      {
        title: 'Evaluation of a Multiprotocol Agnostic Distributed System for Natural Disasters',
        pdfUrl: '/articles/MultiprotocolAgnosticDistributedSystem.pdf'
      }
    ],
    image: null
  },
  {
    id: PROJECT_IDS.ENEMETER,
    tech: ['Energy Profiling', 'Monitoring Systems', 'Solar Analysis', 'Research Tools'],
    color: '#B4C9A9',
    github: [
      {
        title: 'EneMeter Firmware',
        url: 'https://github.com/MonDesa/enemeter'
      },
      {
        title: 'Energy Profile Analysis Tools',
        url: 'https://github.com/MonDesa/enemeter-data-processing'
      }
    ],
    relatedArticles: [
      {
        title: 'Energy Management for Battery-Powered Devices',
        pdfUrl: '/articles/An Adaptive Energy-Management Framework for Sensor Nodes with Constrained Energy Scavenging Profiles.pdf'
      },
      {
        title: 'Wireless Sensor System Reliability Study',
        pdfUrl: '/articles/Case Study on the Reliability of Unattended Outdoor Wireless Sensor Systems.pdf'
      },
      {
        title: 'Low-Power Environmental Monitoring Design',
        pdfUrl: '/articles/Design of Low Data-Rate Environmental Monitoring Applications.pdf'
      },
      {
        title: 'Wake-up Radio for Energy-Efficient Communication',
        pdfUrl: '/articles/Duty-Cycled, Sub-GHz Wake-up Radio with -95dBm Sensitivity and Addressing Capability for Environmental Monitoring Applications.pdf'
      },
      {
        title: 'Battery Power Management Techniques',
        pdfUrl: '/articles/Power-Management Techniques forWireless Sensor Networks and Similar Low-Power Communication Devices Based on Nonrechargeable Batteries.pdf'
      },
      {
        title: 'Scalable Low-Power Network Architecture',
        pdfUrl: '/articles/Ripple-2 - A Non-Collaborative, Asynchronous, and Open Architecture for Highly-Scalable and Low Duty-Cycle WSNs.pdf'
      },
      {
        title: 'Wireless Sensor Network Research',
        pdfUrl: '/articles/WSN-SA-paper.pdf'
      }
    ],
    image: null
  },
  {
    id: PROJECT_IDS.E_NOE,
    tech: ['Sensor Networks', 'Machine Learning', 'Web Platform', 'Real-time Analytics'],
    color: '#9FC1E0',
    github: [
      {
        title: 'e-Noé Stable',
        url: 'https://github.com/otaviofcoletti/enoe-otavio'
      },
      {
        title: 'e-Noé Latest',
        url: 'https://github.com/MonDesa/enoe-central'
      }
    ],
    websites: [
      {
        title: 'Live Demo',
        url: 'http://enoe.icmc.usp.br:2021'
      }
    ],
    relatedArticles: [
      {
        title: 'Providing a Greater Precision of Situational Awareness of Urban Floods Through Multimodal Fusion',
        pdfUrl: '/projects/enoe/articles/urban-floods-situational-awareness.pdf'
      },
      {
        title: 'Development of a Spatial Decision Support System for Flood Risk Management in Brazil That Combines Volunteered Geographic Information With Wireless Sensor Networks',
        pdfUrl: '/projects/enoe/articles/spatial-decision-wsn-brazil.pdf'
      },
      {
        title: 'An Accurate Flood Forecasting Model Using Wireless Sensor Networks and Chaos Theory: A Case Study with Real WSN Deployment in Brazil',
        pdfUrl: '/projects/enoe/articles/flood-forecasting-chaos-wsn.pdf'
      },
      {
        title: 'Water Level Identification with Laser Sensors, Inertial Units, and Machine Learning',
        pdfUrl: '/projects/enoe/articles/laser-inertial-water-ml.pdf'
      },
      {
        title: 'Improving Flood Forecasting Through Feature Selection by a Genetic Algorithm – Experiments Based on Real Data from an Amazon Rainforest River',
        pdfUrl: '/projects/enoe/articles/flood-forecasting-ga-amazon.pdf'
      },
      {
        title: 'How to Improve Fault Tolerance in Disaster Predictions: A Case Study about Flash Floods Using IoT, ML and Real Data',
        pdfUrl: '/projects/enoe/articles/fault-tolerance-flash-floods-iot.pdf'
      },
      {
        title: 'A Multiobjective and Hybrid Approach for Flooding Risk Management Based on WSN and ML',
        pdfUrl: '/projects/enoe/articles/hybrid-wsn-ml-flood-risk.pdf'
      },
      {
        title: 'A Semi-Supervised Deep Learning Approach for Flood Detection Using Multisource Data',
        pdfUrl: '/projects/enoe/articles/semi-supervised-flood-detection.pdf'
      },
      {
        title: 'Hybrid Deep Learning Approach for River Flood Forecasting Based on Wireless Sensor Networks',
        pdfUrl: '/projects/enoe/articles/hybrid-deep-river-forecasting.pdf'
      },
      {
        title: 'Data Fusion and Machine Learning Techniques for Flood Prediction Based on Wireless Sensor Networks',
        pdfUrl: '/projects/enoe/articles/fusion-ml-wsn-flood.pdf'
      },
      {
        title: 'Data-Driven Flood Forecasting Models Using Ensemble Machine Learning Techniques',
        pdfUrl: '/projects/enoe/articles/ensemble-ml-flood-models.pdf'
      },
      {
        title: 'A Smart Flood Monitoring System Using Wireless Sensor Networks and Cloud Integration',
        pdfUrl: '/projects/enoe/articles/smart-flood-monitoring-cloud.pdf'
      },
      {
        title: 'A Review on Deep Learning Models for Flood Monitoring and Prediction Systems',
        pdfUrl: '/projects/enoe/articles/dl-review-flood-monitoring.pdf'
      },
      {
        title: 'Deep Learning and Object Detection for Water Level Measurement Using Patterned Visual Markers',
        pdfUrl: '/projects/enoe/articles/patterned-markers-water-level.pdf'
      },
      {
        title: 'Flood Risk Prediction Using IoT and Machine Learning in Smart Cities',
        pdfUrl: '/projects/enoe/articles/iot-ml-smartcity-flood-risk.pdf'
      },
      {
        title: 'Ensuring Reliable Water Level Measurement for Flooding: A Redundancy-Based Approach with Pressure',
        pdfUrl: '/projects/enoe/articles/redundancy-pressure-water-level.pdf'
      }
    ],
    image: '/projects/enoe.jpg'
  }
];

export const getProjectsData = (
  language: Language, 
  getTranslation: (key: string, language: Language) => string
): ProjectData[] => {
  return projectsBaseData.map(project => {
    const keyPrefix = PROJECT_TRANSLATION_KEYS[project.id as keyof typeof PROJECT_TRANSLATION_KEYS];
    
    return {
      ...project,
      title: getTranslation(`projects.${keyPrefix}.title`, language),
      description: getTranslation(`projects.${keyPrefix}.description`, language),
      fullDescription: getTranslation(`projects.${keyPrefix}.fullDescription`, language)
    };
  });
};

export const getDisplayProjects = (
  language: Language,
  getTranslation: (key: string, language: Language) => string
): DisplayProject[] => {
  return projectsBaseData.map(project => {
    const keyPrefix = PROJECT_TRANSLATION_KEYS[project.id as keyof typeof PROJECT_TRANSLATION_KEYS];
    
    return {
      id: project.id,
      title: getTranslation(`projects.${keyPrefix}.title`, language),
      description: getTranslation(`projects.${keyPrefix}.description`, language),
      tech: project.tech,
      color: project.color,
      image: project.image
    };
  });
};

export const getProjectById = (
  sanitizedId: string, 
  language: Language,
  getTranslation: (key: string, language: Language) => string
): ProjectData | undefined => {
  const projectEntry = Object.entries(PROJECT_TRANSLATION_KEYS).find(
    ([_, translationKey]) => translationKey === sanitizedId
  );
  
  if (!projectEntry) return undefined;
  
  const numericId = parseInt(projectEntry[0]);
  const project = projectsBaseData.find(p => p.id === numericId);
  
  if (!project) return undefined;
  
  return {
    ...project,
    title: getTranslation(`projects.${sanitizedId}.title`, language),
    description: getTranslation(`projects.${sanitizedId}.description`, language),
    fullDescription: getTranslation(`projects.${sanitizedId}.fullDescription`, language)
  };
};

export const getProjectSanitizedId = (projectId: number): string | undefined => {
  return PROJECT_TRANSLATION_KEYS[projectId as keyof typeof PROJECT_TRANSLATION_KEYS];
};
