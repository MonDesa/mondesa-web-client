import { Box, Card, CardContent, Typography, Chip, Button } from '@mui/material';
import { ArrowRight, Mountain, Radio } from '../utils/icons';
import { Link } from 'react-router-dom';
import { GetProjectDetailPath } from '../routes';
import { PROJECT_IDS } from '../constants/translations/projectsData';

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        description: string;
        tech: string[];
        color: string;
        image: string | null;
    };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const renderIcon = () => {
        if (!project.image) {
            if (project.id === PROJECT_IDS.LANDSLIDE_MONITORING) {
                return <Mountain size={48} color={project.color} strokeWidth={1.5} />;
            }
            if (project.id === PROJECT_IDS.ENEMETER) {
                return <Radio size={48} color={project.color} strokeWidth={1.5} />;
            }
        }
        return null;
    };

    const getProjectIcon = () => {
        if (project.id === PROJECT_IDS.LANDSLIDE_MONITORING) {
            return <Mountain size={20} />;
        }
        if (project.id === PROJECT_IDS.ENEMETER || project.id === PROJECT_IDS.E_NOE) {
            return <Radio size={20} />;
        }
        return null;
    };

    return (
        <Card
            elevation={0}
            sx={{
                height: '100%',
                bgcolor: 'background.paper',
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                }
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <Box
                    sx={{
                        height: 200,
                        bgcolor: `${project.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        backgroundImage: project.image ? `url(${project.image})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {renderIcon()}
                </Box>
                <Box sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    bgcolor: 'rgba(255,255,255,0.8)',
                    borderRadius: 2,
                    px: 1.5,
                    py: 0.5,
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    {getProjectIcon()}
                    <Typography variant="subtitle2" sx={{ ml: 0.5 }}>
                        {project.title}
                    </Typography>
                </Box>
            </Box>
            <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
                    {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.tech.map((tech) => (
                        <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                                bgcolor: 'primary.light',
                                color: 'primary.dark'
                            }}
                        />
                    ))}
                </Box>
                <Button
                    variant="text"
                    color="primary"
                    endIcon={<ArrowRight size={16} />}
                    component={Link}
                    to={GetProjectDetailPath(project.id)}
                    sx={{ p: 0, minWidth: 'auto' }}
                >
                    Learn more
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;
