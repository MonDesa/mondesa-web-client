import React, { useState } from 'react';
import {
    Box,
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import { ChevronDown } from '../utils/icons';
import { UseLanguage, Language } from '../contexts/LanguageContext';

interface LanguageOption {
    code: Language;
    name: string;
    flag: string;
}

const languageOptions: LanguageOption[] = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
];

const LanguageSelector: React.FC = () => {
    const { language, setLanguage } = UseLanguage();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (newLanguage: Language) => {
        setLanguage(newLanguage);
        handleClose();
    };

    const currentLanguage = languageOptions.find(lang => lang.code === language) || languageOptions[1];

    return (
        <Box>
            <Button
                onClick={handleClick}
                endIcon={<ChevronDown size={16} />}
                sx={{
                    color: 'text.primary',
                    textTransform: 'none',
                    minWidth: 'auto',
                    px: 1,
                    py: 0.5,
                    '&:hover': {
                        bgcolor: 'action.hover'
                    }
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography component="span" sx={{ fontSize: '16px' }}>
                        {currentLanguage.flag}
                    </Typography>
                    <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {currentLanguage.code.toUpperCase()}
                    </Typography>
                </Box>
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                PaperProps={{
                    sx: {
                        mt: 1,
                        minWidth: 160,
                        borderRadius: 2,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }
                }}
            >
                {languageOptions.map((option) => (
                    <MenuItem
                        key={option.code}
                        onClick={() => handleLanguageChange(option.code)}
                        selected={option.code === language}
                        sx={{
                            py: 1.5,
                            px: 2,
                            '&.Mui-selected': {
                                bgcolor: 'action.selected',
                                '&:hover': {
                                    bgcolor: 'action.selected'
                                }
                            }
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: 36 }}>
                            <Typography component="span" sx={{ fontSize: '18px' }}>
                                {option.flag}
                            </Typography>
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="body2" sx={{ fontWeight: option.code === language ? 600 : 400 }}>
                                {option.name}
                            </Typography>
                        </ListItemText>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default LanguageSelector;
