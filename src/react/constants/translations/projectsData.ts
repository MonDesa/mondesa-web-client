import type { Language } from '../../contexts/LanguageContext';
import { MEDIA_BASE_URL } from '../media';
import { toKebabCase } from '../../utils/slugify';

export const PROJECT_IDS = {
  LANDSLIDE_MONITORING: 1,
  ENEMETER: 2,
  E_NOE: 3,
  FIRE_RISK_PREDICTOR: 4,
} as const;

export const PROJECT_TRANSLATION_KEYS = {
  [PROJECT_IDS.LANDSLIDE_MONITORING]: 'landslide',
  [PROJECT_IDS.ENEMETER]: 'enemeter',
  [PROJECT_IDS.E_NOE]: 'enoe',
  [PROJECT_IDS.FIRE_RISK_PREDICTOR]: 'fireRiskPredictor',
} as const;

// URL slug for a project (lower kebab-case), derived from its translation key.
// e.g. 'fireRiskPredictor' -> 'fire-risk-predictor'; the other keys are unchanged.
const projectSlug = (translationKey: string): string => toKebabCase(translationKey);

// Public URL for an article PDF served from the Cloudflare R2 bucket.
const articleUrl = (slug: string): string => `${MEDIA_BASE_URL}/articles/${slug}.pdf`;

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
        pdfUrl: articleUrl('multiprotocol-distributed-system-natural-disasters')
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
        pdfUrl: articleUrl('adaptive-energy-management-sensor-nodes')
      },
      {
        title: 'Wireless Sensor System Reliability Study',
        pdfUrl: articleUrl('unattended-outdoor-wsn-reliability')
      },
      {
        title: 'Low-Power Environmental Monitoring Design',
        pdfUrl: articleUrl('low-data-rate-environmental-monitoring')
      },
      {
        title: 'Wake-up Radio for Energy-Efficient Communication',
        pdfUrl: articleUrl('sub-ghz-wakeup-radio')
      },
      {
        title: 'Battery Power Management Techniques',
        pdfUrl: articleUrl('wsn-power-management-nonrechargeable-batteries')
      },
      {
        title: 'Scalable Low-Power Network Architecture',
        pdfUrl: articleUrl('ripple-2-scalable-low-duty-cycle-wsn')
      },
      {
        title: 'Wireless Sensor Network Research',
        pdfUrl: articleUrl('wsn-sa-paper')
      },
      {
        title: 'Energy Budget and Time–to–Failure Analysis',
        pdfUrl: articleUrl('energy-budget-time-to-failure-analysis')
      }
    ],
    image: '/projects/enemeter.png'
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
        pdfUrl: articleUrl('urban-floods-situational-awareness')
      },
      {
        title: 'Development of a Spatial Decision Support System for Flood Risk Management in Brazil That Combines Volunteered Geographic Information With Wireless Sensor Networks',
        pdfUrl: articleUrl('spatial-decision-wsn-brazil')
      },
      {
        title: 'An Accurate Flood Forecasting Model Using Wireless Sensor Networks and Chaos Theory: A Case Study with Real WSN Deployment in Brazil',
        pdfUrl: articleUrl('flood-forecasting-chaos-wsn')
      },
      {
        title: 'Water Level Identification with Laser Sensors, Inertial Units, and Machine Learning',
        pdfUrl: articleUrl('laser-inertial-water-ml')
      },
      {
        title: 'Improving Flood Forecasting Through Feature Selection by a Genetic Algorithm – Experiments Based on Real Data from an Amazon Rainforest River',
        pdfUrl: articleUrl('flood-forecasting-ga-amazon')
      },
      {
        title: 'How to Improve Fault Tolerance in Disaster Predictions: A Case Study about Flash Floods Using IoT, ML and Real Data',
        pdfUrl: articleUrl('fault-tolerance-flash-floods-iot')
      },
      {
        title: 'A Multiobjective and Hybrid Approach for Flooding Risk Management Based on WSN and ML',
        pdfUrl: articleUrl('hybrid-wsn-ml-flood-risk')
      },
      {
        title: 'A Semi-Supervised Deep Learning Approach for Flood Detection Using Multisource Data',
        pdfUrl: articleUrl('semi-supervised-flood-detection')
      },
      {
        title: 'Hybrid Deep Learning Approach for River Flood Forecasting Based on Wireless Sensor Networks',
        pdfUrl: articleUrl('hybrid-deep-river-forecasting')
      },
      {
        title: 'Data Fusion and Machine Learning Techniques for Flood Prediction Based on Wireless Sensor Networks',
        pdfUrl: articleUrl('fusion-ml-wsn-flood')
      },
      {
        title: 'Data-Driven Flood Forecasting Models Using Ensemble Machine Learning Techniques',
        pdfUrl: articleUrl('ensemble-ml-flood-models')
      },
      {
        title: 'A Smart Flood Monitoring System Using Wireless Sensor Networks and Cloud Integration',
        pdfUrl: articleUrl('smart-flood-monitoring-cloud')
      },
      {
        title: 'A Review on Deep Learning Models for Flood Monitoring and Prediction Systems',
        pdfUrl: articleUrl('dl-review-flood-monitoring')
      },
      {
        title: 'Deep Learning and Object Detection for Water Level Measurement Using Patterned Visual Markers',
        pdfUrl: articleUrl('patterned-markers-water-level')
      },
      {
        title: 'Flood Risk Prediction Using IoT and Machine Learning in Smart Cities',
        pdfUrl: articleUrl('iot-ml-smartcity-flood-risk')
      },
      {
        title: 'Ensuring Reliable Water Level Measurement for Flooding: A Redundancy-Based Approach with Pressure',
        pdfUrl: articleUrl('redundancy-pressure-water-level')
      }
    ],
    image: '/projects/enoe.jpg'
  },
  {
    id: PROJECT_IDS.FIRE_RISK_PREDICTOR,
    tech: ['Machine Learning', 'FastAPI', 'React', 'XGBoost', 'Real-time Prediction'],
    color: '#D4A373',
    github: [
      {
        title: 'Fire Risk Predictor',
        url: 'https://github.com/MonDesa/fire-risk-predictor'
      }
    ],
    websites: [
      {
        title: 'Fire Risk Predictor App',
        url: 'https://frp.mondesa.org'
      }
    ],
    relatedArticles: [
      {
        title: 'Fire Risk Predictor Report',
        pdfUrl: articleUrl('fire-risk-predictor-report')
      }
    ],
    image: null
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
  // Accept the canonical kebab-case slug and, for backward compatibility, the
  // raw translation key (e.g. legacy 'fireRiskPredictor' URLs).
  const projectEntry = Object.entries(PROJECT_TRANSLATION_KEYS).find(
    ([, translationKey]) =>
      projectSlug(translationKey) === sanitizedId || translationKey === sanitizedId
  );

  if (!projectEntry) return undefined;

  const numericId = parseInt(projectEntry[0]);
  const project = projectsBaseData.find(p => p.id === numericId);

  if (!project) return undefined;

  const keyPrefix = PROJECT_TRANSLATION_KEYS[numericId as keyof typeof PROJECT_TRANSLATION_KEYS];

  return {
    ...project,
    title: getTranslation(`projects.${keyPrefix}.title`, language),
    description: getTranslation(`projects.${keyPrefix}.description`, language),
    fullDescription: getTranslation(`projects.${keyPrefix}.fullDescription`, language)
  };
};

export const getProjectSanitizedId = (projectId: number): string | undefined => {
  const key = PROJECT_TRANSLATION_KEYS[projectId as keyof typeof PROJECT_TRANSLATION_KEYS];
  return key ? projectSlug(key) : undefined;
};
