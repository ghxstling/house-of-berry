"use client";

import { useState, useEffect } from 'react';

type Breakpoints = {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

export function useMediaQuery(breakpoints = {
    mobile: 640,
    tablet: 768,
    desktop: 1024,
}): Breakpoints {
    const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : Infinity);

    useEffect(()=>{
        if (typeof window ==='undefined') return;
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const states = {
        isMobile: width < breakpoints.tablet,
        isTablet: width >= breakpoints.tablet && width < breakpoints.desktop,
        isDesktop: width >= breakpoints.desktop,
    }

    return states;
}