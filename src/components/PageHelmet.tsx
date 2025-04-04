import { Helmet } from 'react-helmet-async';
import { RouteConfig } from '../routes';

interface PageHelmetProps {
    title?: string;
    description?: string;
    routeKey?: keyof typeof RouteConfig.PUBLIC;
}

export const PageHelmet = ({ title, description, routeKey }: PageHelmetProps) => {
    const siteTitle = 'MonDesa';

    let pageTitle = title;
    let pageDescription = description;

    if (routeKey && RouteConfig.PUBLIC[routeKey]) {
        if (!pageTitle) pageTitle = RouteConfig.PUBLIC[routeKey].label;
        if (!pageDescription) pageDescription = RouteConfig.PUBLIC[routeKey].description;
    }

    const fullTitle = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            {pageDescription && <meta name="description" content={pageDescription} />}
        </Helmet>
    );
};
