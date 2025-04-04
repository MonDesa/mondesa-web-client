import { Box, Grid, Typography, Paper, Chip, Avatar, Link, Stack } from '@mui/material';
import { Code, Cpu, Radio, Wifi, Image, Github, Linkedin, Mail, Brain, Camera, Activity } from '../utils/icons';
import { TeamMember } from '../constants/translations/teamData';
import { UseTranslation } from '../contexts/LanguageContext';

interface TeamMemberCardProps {
    member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
    const { t } = UseTranslation();
    const getSkillIcon = (iconType: string) => {
        const iconProps = { size: 16 };
        switch (iconType) {
            case 'cpu':
                return <Cpu {...iconProps} />;
            case 'radio':
                return <Radio {...iconProps} />;
            case 'wifi':
                return <Wifi {...iconProps} />;
            case 'code':
                return <Code {...iconProps} />;
            case 'brain':
                return <Brain {...iconProps} />;
            case 'camera':
                return <Camera {...iconProps} />;
            case 'activity':
                return <Activity {...iconProps} />;
            default:
                return <Code {...iconProps} />;
        }
    };

    const renderAvatar = () => {
        if (member.avatar) {
            return (
                <Avatar
                    src={member.avatar}
                    alt={member.name}
                    sx={{
                        width: 200,
                        height: 200,
                        mb: 2,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    }}
                />
            );
        }

        return (
            <Box
                sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    mb: 2,
                    bgcolor: 'rgba(163, 198, 212, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image size={80} color="#9FC1E0" strokeWidth={1.5} />
            </Box>
        );
    };

    return (
        <Paper
            elevation={0}
            sx={{
                p: 4,
                mb: 8,
                borderRadius: 4,
                bgcolor: 'background.paper',
                boxShadow: '0 8px 25px rgba(0,0,0,0.05)'
            }}
        >
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {renderAvatar()}
                        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, textAlign: 'center' }}>
                            {member.name}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
                            {member.role}
                        </Typography>

                        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                            {member.links.github && (
                                <Link href={member.links.github} target="_blank" rel="noopener noreferrer">
                                    <Github size={20} />
                                </Link>
                            )}
                            {member.links.linkedin && (
                                <Link href={member.links.linkedin} target="_blank" rel="noopener noreferrer">
                                    <Linkedin size={20} />
                                </Link>
                            )}
                            {member.links.email && (
                                <Link href={`mailto:${member.links.email}`}>
                                    <Mail size={20} />
                                </Link>
                            )}
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} md={9}>
                    {member.bio.map((paragraph, index) => (
                        <Typography
                            key={index}
                            variant="body1"
                            sx={{ mb: 3, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}
                        >
                            {paragraph}
                        </Typography>
                    ))}
                    <Box sx={{ mb: 1 }}>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                            {member.name === 'Samuel Rubens' ? t('team.technicalExpertise') : t('team.technicalFocus')}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {member.skills.map((skill) => (
                                <Chip
                                    key={skill.name}
                                    label={skill.name}
                                    icon={getSkillIcon(skill.icon)}
                                    sx={{
                                        bgcolor: 'primary.light',
                                        color: 'primary.dark',
                                        '& .MuiChip-icon': { color: 'primary.dark' },
                                        mb: 1,
                                        px: 1,
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default TeamMemberCard;
