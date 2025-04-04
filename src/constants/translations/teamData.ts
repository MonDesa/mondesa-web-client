import { Language } from '../../contexts/LanguageContext';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string[];
  skills: { name: string; icon: string }[];
  avatar?: string;
  links: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const teamBaseData = [
  {
    id: 'samuel',
    name: 'Samuel Rubens',
    skills: [
      { name: 'Embedded Systems', icon: 'cpu' },
      { name: 'Sensor Networks', icon: 'wifi' },
      { name: 'DevOps', icon: 'code' }
    ],
    avatar: '/team/samuel-rubens.png',
    links: {
      github: 'https://github.com/rubenszinho',
      linkedin: 'https://www.linkedin.com/in/samuelrubens/',
      email: 'contact@rubenszinho.dev'
    }
  },
  {
    id: 'saulo',
    name: 'Saulo Neves Mattos',
    skills: [
      { name: 'Machine Learning', icon: 'brain' },
      { name: 'Instrumentation', icon: 'gauge' },
      { name: 'Time Series Analysis', icon: 'trending-up' }
    ],
    avatar: '/team/saulo-matos.jpg',
    links: {
      linkedin: 'https://www.linkedin.com/in/saulo-neves-matos-0046a114b/'
    }
  },
  {
    id: 'arthur',
    name: 'Arthur Rocha',
    skills: [
      { name: 'Deep Learning', icon: 'brain' },
      { name: 'Computer Vision', icon: 'camera' },
      { name: 'Training Techniques', icon: 'activity' }
    ],
    avatar: '/team/arthur-rocha.jpg',
    links: {
      linkedin: 'https://www.linkedin.com/in/arthur-lima-b42334168/',
      github: 'https://github.com/tucarthur'
    }
  },
  {
    id: 'pedro',
    name: 'Pedro Teodoro',
    skills: [
      { name: 'Embedded Systems', icon: 'cpu' },
      { name: 'ML', icon: 'code' },
      { name: 'Sensor Networks', icon: 'wifi' }
    ],
    avatar: '/team/pedro-teodoro.jpg',
    links: {
      linkedin: 'https://www.linkedin.com/in/pedro-teodoro-do-nascimento-a5a5012ba/',
      github: 'https://github.com/npteodoro/'
    }
  },
  {
    id: 'giovane',
    name: 'Giovane Moretto',
    skills: [
      { name: 'Electronics', icon: 'cpu' },
      { name: 'PCB Design', icon: 'circuit-board' },
      { name: 'Embedded Systems', icon: 'settings' },
    ],
    avatar: '/team/giovane-moretto.jpg',
    links: {
      linkedin: 'https://www.linkedin.com/in/giovane-moretto/'
    }
  }
];

export const getTeamMembers = (
  language: Language, 
  getTranslation: (key: string, language: Language, suppressWarning?: boolean) => string
): TeamMember[] => {
  return teamBaseData.map(member => {
    const bio: string[] = [];
    let bioIndex = 1;
    
    while (true) {
      const bioKey = `team.${member.id}.bio.${bioIndex}`;
      const bioText = getTranslation(bioKey, language, true);
      
      if (bioText === bioKey) {
        break;
      }
      
      bio.push(bioText);
      bioIndex++;
    }
    
    return {
      ...member,
      role: getTranslation(`team.${member.id}.role`, language),
      bio
    };
  });
};
