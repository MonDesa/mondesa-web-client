import { HOME_PATH, TEAM_PATH, MONDESA_PATH, PROJECTS_PATH, CONTACT_PATH } from '../../routes';

export interface NavigationLink {
    title: string;
    titleKey: string;
    path: string;
    isButton?: boolean;
}

export const NAVIGATION_LINKS: NavigationLink[] = [
    { title: 'Home', titleKey: 'nav.home', path: HOME_PATH },
    { title: 'Team', titleKey: 'nav.team', path: TEAM_PATH },
    { title: 'MonDesa', titleKey: 'nav.mondesa', path: MONDESA_PATH },
    { title: 'Projects', titleKey: 'nav.projects', path: PROJECTS_PATH },
    { title: 'Contact', titleKey: 'nav.contact', path: CONTACT_PATH, isButton: true },
];
