import { lazy, ReactNode } from 'react';
import { RouteObject as ReactRouteObject } from 'react-router-dom';
import { RouteObject } from './types';
import AnimatedPage from '../components/AnimatedPage';
import { getProjectSanitizedId } from '../constants/translations/projectsData';

const Home = lazy(() => import('../pages/Home'));
const Team = lazy(() => import('../pages/Team'));
const MonDesa = lazy(() => import('../pages/MonDesa'));
const Projects = lazy(() => import('../pages/Projects'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

const PUBLIC_ROUTES: Record<string, RouteObject> = {
  HOME: {
    path: '/',
    label: 'Home',
    description: 'Smart monitoring for a safer tomorrow. Leading innovation in natural disaster monitoring through cutting-edge IoT solutions.',
  },
  TEAM: {
    path: '/team',
    label: 'Team',
    description: 'Meet our team of specialists combining expertise in software engineering and IoT with a shared vision for disaster resilience solutions.',
  },
  MONDESA: {
    path: '/mondesa',
    label: 'About MonDesa',
    description: 'Pioneering the future of natural disaster monitoring through innovative IoT solutions and real-time data analysis.',
  },
  PROJECTS: {
    path: '/projects',
    label: 'Projects & Research',
    description: 'Exploring innovative solutions in IoT and disaster monitoring through practical applications and research.',
  },
  PROJECT_DETAIL: {
    path: '/projects/:projectId',
    label: 'Project Details',
    description: 'Detailed information about this innovative IoT project, including features, technology stack, and resources.',
  },
  CONTACT: {
    path: '/contact',
    label: 'Contact',
    description: 'Get in touch with MonDesa. Interested in collaboration or want to learn more about our disaster monitoring solutions?',
  },
  NOT_FOUND: {
    path: '*',
    label: 'Page Not Found',
    description: 'The page you are looking for doesn\'t exist or has been moved.',
  }
};

export const HOME_PATH = PUBLIC_ROUTES.HOME.path;
export const TEAM_PATH = PUBLIC_ROUTES.TEAM.path;
export const MONDESA_PATH = PUBLIC_ROUTES.MONDESA.path;
export const PROJECTS_PATH = PUBLIC_ROUTES.PROJECTS.path;
export const PROJECT_DETAIL_PATH = PUBLIC_ROUTES.PROJECT_DETAIL.path;
export const CONTACT_PATH = PUBLIC_ROUTES.CONTACT.path;

export const GetProjectDetailPath = (projectId: number | string) => {
  if (typeof projectId === 'string') {
    return `/projects/${projectId}`;
  }

  const sanitizedId = getProjectSanitizedId(projectId);

  if (!sanitizedId) {
    throw new Error(`Invalid project ID: ${projectId}`);
  }

  return `/projects/${sanitizedId}`;
};

const routeComponentMap: Record<string, ReactNode> = {
  [HOME_PATH]: <AnimatedPage><Home /></AnimatedPage>,
  [TEAM_PATH]: <AnimatedPage><Team /></AnimatedPage>,
  [MONDESA_PATH]: <AnimatedPage><MonDesa /></AnimatedPage>,
  [PROJECTS_PATH]: <AnimatedPage><Projects /></AnimatedPage>,
  [PROJECT_DETAIL_PATH]: <AnimatedPage><ProjectDetail /></AnimatedPage>,
  [CONTACT_PATH]: <AnimatedPage><Contact /></AnimatedPage>,
  [PUBLIC_ROUTES.NOT_FOUND.path]: <AnimatedPage><NotFound /></AnimatedPage>,
};

const ReactRouterRoutes: ReactRouteObject[] = Object.values(PUBLIC_ROUTES).map(route => ({
  path: route.path,
  element: routeComponentMap[route.path]
}));

const RouteConfig = {
  PUBLIC: PUBLIC_ROUTES,
  GetProjectDetailPath
};

export { ReactRouterRoutes, RouteConfig };
