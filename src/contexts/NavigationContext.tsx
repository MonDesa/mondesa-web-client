import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface NavigationContextType {
    isNavigating: boolean;
    setIsNavigating: (loading: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
};

interface NavigationProviderProps {
    children: React.ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
    const [isNavigating, setIsNavigating] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsNavigating(true);

        const timer = setTimeout(() => {
            setIsNavigating(false);
        }, 50);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    const value = {
        isNavigating,
        setIsNavigating,
    };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
};
