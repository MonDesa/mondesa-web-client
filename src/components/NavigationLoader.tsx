import React, { Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loading from './Loading';

interface NavigationLoaderProps {
    children: React.ReactNode;
}

const NavigationLoader: React.FC<NavigationLoaderProps> = ({ children }) => {
    return (
        <Suspense fallback={<Loading fullScreen={true} message="Loading page..." />}>
            <AnimatePresence mode="wait">
                {children}
            </AnimatePresence>
        </Suspense>
    );
};

export default NavigationLoader;
