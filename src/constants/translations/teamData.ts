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
    id: 'marco',
    name: 'Marco Spohn',
    skills: [
      { name: 'Computer Networks', icon: 'wifi' },
      { name: 'IoT', icon: 'cpu' },
      { name: 'Research', icon: 'brain' }
    ],
    avatar: '/team/marcospohn.png',
    links: {}
  },
  {
    id: 'agnelo',
    name: 'Agnelo Rocha',
    skills: [
      { name: 'Wireless Sensing', icon: 'radio' },
      { name: 'Spectroscopy', icon: 'activity' },
      { name: 'Sensor Networks', icon: 'wifi' }
    ],
    avatar: '/team/agnelorocha.jpg',
    links: {}
  },
  {
    id: 'joueyama',
    name: 'Jó Ueyama',
    skills: [
      { name: 'IoT', icon: 'cpu' },
      { name: 'Security', icon: 'code' },
      { name: 'Blockchain', icon: 'brain' }
    ],
    avatar: '/team/joueyama.png',
    links: {}
  },
  {
    id: 'pedrofrancoso',
    name: 'Pedro Françoso',
    skills: [
      { name: 'Embedded Systems', icon: 'cpu' },
      { name: 'IoT', icon: 'wifi' },
      { name: 'Firmware', icon: 'code' }
    ],
    avatar: undefined,
    links: {}
  },
  {
    id: 'giovane',
    name: 'Giovane Moretto',
    skills: [
      { name: 'Electronics', icon: 'cpu' },
      { name: 'PCB Design', icon: 'activity' },
      { name: 'Embedded Systems', icon: 'code' },
    ],
    avatar: '/team/giovane-moretto.jpg',
    links: {
      linkedin: 'https://www.linkedin.com/in/giovane-moretto/'
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
