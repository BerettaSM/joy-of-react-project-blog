import React from 'react';
import clsx from 'clsx';
import { Rss } from 'react-feather';

import Logo from '@/components/Logo';
import DarkLightToggle from '../DarkLightToggle';
import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './Header.module.css';

function Header({ theme, className, ...delegated }) {
    return (
        <header className={clsx(styles.wrapper, className)} {...delegated}>
            <Logo />

            <div className={styles.actions}>
                <button className={styles.action}>
                    <a href="/rss.xml" target='_blank'>
                        <Rss
                            size="1.5rem"
                            style={{
                                // Optical alignment
                                transform: 'translate(2px, -2px)',
                            }}
                        />
                        <VisuallyHidden>View RSS feed</VisuallyHidden>
                    </a>
                </button>
                <DarkLightToggle
                    initialTheme={theme}
                    className={styles.action}
                />
            </div>
        </header>
    );
}

export default Header;
