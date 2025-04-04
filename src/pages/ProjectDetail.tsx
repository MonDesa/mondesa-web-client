import { useEffect, useState, useRef } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, Typography, Grid, Chip, Paper, Link, Divider } from '@mui/material';
import { ArrowLeft, Github, Globe, Download, FileText, Image, Mountain, Radio } from '../utils/icons';
import { PageHelmet } from '../components/PageHelmet';
import { PROJECTS_PATH } from '../routes';
import { getProjectById, getTranslation, ProjectData, PROJECT_IDS, PROJECT_TRANSLATION_KEYS } from '../constants/translations';
import { UseTranslation, UseLanguage } from '../contexts/LanguageContext';

const ProjectDetail = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const location = useLocation();
    const [project, setProject] = useState<ProjectData | null>(null);
    const [loading, setLoading] = useState(true);
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const { t } = UseTranslation();
    const { language } = UseLanguage();
    const mountedRef = useRef(true);

    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);

    useEffect(() => {
        if (!mountedRef.current || !location.pathname.startsWith('/projects/')) {
            return;
        }

        if (projectId) {
            const foundProject = getProjectById(projectId, language, getTranslation);
            if (mountedRef.current) {
                setProject(foundProject || null);
                setShouldRedirect(!foundProject);
            }
        } else {
            if (mountedRef.current) {
                setProject(null);
                setShouldRedirect(true);
            }
        }

        if (mountedRef.current) {
            setLoading(false);
        }
    }, [projectId, language, location.pathname]);

    const renderProjectIcon = (project: ProjectData) => {
        if (!project.image) {
            const iconProps = { size: 100, color: project.color, strokeWidth: 1 };
            switch (project.id) {
                case PROJECT_IDS.LANDSLIDE_MONITORING:
                    return <Mountain {...iconProps} />;
                case PROJECT_IDS.ENEMETER:
                    return <Radio {...iconProps} />;
                case PROJECT_IDS.E_NOE:
                    return <Radio {...iconProps} />;
                default:
                    return <Image {...iconProps} />;
            }
        }
        return null;
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
                <Typography variant="h6">{t('common.loading')}</Typography>
            </Box>
        );
    }

    if (shouldRedirect && location.pathname.startsWith('/projects/')) {
        return <Navigate to={PROJECTS_PATH} replace />;
    }

    if (!project) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
                <Typography variant="h6">{t('common.loading')}</Typography>
            </Box>
        );
    }

    return (
        <>
            <PageHelmet title={project.title} description={project.description} />
            <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Button
                        component={RouterLink}
                        to={PROJECTS_PATH}
                        startIcon={<ArrowLeft />}
                        sx={{ mb: 4 }}
                        color="inherit"
                    >
                        {t('common.backToProjects')}
                    </Button>

                    <Box sx={{ mb: 6 }}>
                        <Box
                            sx={{
                                height: 300,
                                bgcolor: `${project.color}15`,
                                borderRadius: 4,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 4,
                                position: 'relative',
                                overflow: 'hidden',
                                backgroundImage: project.image ? `url(${project.image})` : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {renderProjectIcon(project)}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    bgcolor: 'rgba(255,255,255,0.9)',
                                    py: 2,
                                    px: 4,
                                }}
                            >
                                <Typography variant="h3" sx={{ fontWeight: 600 }}>
                                    {project.title}
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                            {project.tech.map((tech) => (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    sx={{
                                        bgcolor: 'primary.light',
                                        color: 'primary.dark',
                                        fontWeight: 500,
                                    }}
                                />
                            ))}
                        </Box>

                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
                            {t('projectDetail.overview')}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', whiteSpace: 'pre-line' }}>
                            {project.fullDescription}
                        </Typography>
                    </Box>

                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    bgcolor: 'background.paper',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.05)'
                                }}
                            >
                                <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
                                    {t('projectDetail.keyFeatures')}
                                </Typography>
                                <Box component="ul" sx={{ pl: 2 }}>
                                    {[1, 2, 3, 4, 5].map((featureNum) => {
                                        const keyPrefix = PROJECT_TRANSLATION_KEYS[project.id as keyof typeof PROJECT_TRANSLATION_KEYS];
                                        const featureKey = `projects.${keyPrefix}.features.${featureNum}`;
                                        const featureText = t(featureKey);

                                        if (featureText !== featureKey) {
                                            return (
                                                <Box component="li" key={featureNum} sx={{ mb: 2, color: 'text.secondary' }}>
                                                    <Typography variant="body1">{featureText}</Typography>
                                                </Box>
                                            );
                                        }
                                        return null;
                                    })}
                                </Box>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    bgcolor: 'background.paper',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.05)'
                                }}
                            >
                                <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
                                    {t('projectDetail.resources')}
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    {project.github && project.github.map((link, index) => (
                                        <Button
                                            key={`github-${index}`}
                                            variant="outlined"
                                            color="inherit"
                                            startIcon={<Github size={16} />}
                                            component={Link}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ justifyContent: 'flex-start' }}
                                        >
                                            {link.title}
                                        </Button>
                                    ))}

                                    {project.websites && project.websites.map((link, index) => (
                                        <Button
                                            key={`website-${index}`}
                                            variant="outlined"
                                            color="inherit"
                                            startIcon={<Globe size={16} />}
                                            component={Link}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ justifyContent: 'flex-start' }}
                                        >
                                            {link.title}
                                        </Button>
                                    ))}
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>

                    {project.relatedArticles && project.relatedArticles.length > 0 && (
                        <Box sx={{ mt: 6 }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    bgcolor: 'background.paper',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.05)'
                                }}
                            >
                                <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
                                    {t('projectDetail.relatedArticles')}
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    {project.relatedArticles.map((article, index) => {
                                        const handleArticleClick = () => {
                                            if (article.url) {
                                                const newWindow = window.open(article.url, '_blank');
                                                if (!newWindow && article.pdfUrl) {
                                                    window.open(article.pdfUrl, '_blank');
                                                }
                                            } else if (article.pdfUrl) {
                                                window.open(article.pdfUrl, '_blank');
                                            }
                                        };

                                        return (
                                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Button
                                                    variant="text"
                                                    color="primary"
                                                    startIcon={<FileText size={16} />}
                                                    onClick={handleArticleClick}
                                                    sx={{
                                                        justifyContent: 'flex-start',
                                                        textAlign: 'left',
                                                        flex: 1
                                                    }}
                                                >
                                                    {article.title}
                                                </Button>
                                                {article.pdfUrl && (
                                                    <Button
                                                        variant="outlined"
                                                        size="small"
                                                        color="primary"
                                                        onClick={() => window.open(article.pdfUrl, '_blank')}
                                                        sx={{
                                                            minWidth: 'auto',
                                                            width: 40,
                                                            height: 40,
                                                            padding: 0
                                                        }}
                                                        title="View PDF"
                                                    >
                                                        <Download size={16} />
                                                    </Button>
                                                )}
                                            </Box>
                                        );
                                    })}
                                </Box>
                            </Paper>
                        </Box>
                    )}
                </Container>
            </Box>
        </>
    );
};

export default ProjectDetail;
