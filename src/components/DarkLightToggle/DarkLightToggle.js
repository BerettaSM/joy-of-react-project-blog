'use client';
import React from 'react';
import { Sun, Moon } from 'react-feather';
import VisuallyHidden from '../VisuallyHidden';

import { LIGHT_TOKENS, DARK_TOKENS } from '@/constants';

import Cookie from 'js-cookie';

function DarkLightToggle({ initialTheme, ...delegated }) {
    const [theme, setTheme] = React.useState(initialTheme);

    function handleClick() {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        Cookie.set('color-theme', nextTheme, {
            expires: 1000,
        });
        const root = document.documentElement;
        const colors = nextTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;
        root.dataset.colorTheme = nextTheme;
        Object.entries(colors).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
    }

    return (
        <button {...delegated} onClick={handleClick}>
            {theme === 'light' ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
            <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>
    );
}

export default DarkLightToggle;
