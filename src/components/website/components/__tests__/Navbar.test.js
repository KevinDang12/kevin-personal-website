// NavBar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Context as ResponsiveContext } from 'react-responsive';
import NavBar from '../Navbar';

const navLinks = [
    { label: 'home', href: '#home' },
    { label: 'work', href: '#work' },
    { label: 'skills', href: '#skills' },
    { label: 'projects', href: '#projects' },
    { label: 'hobbies', href: '#hobbies' },
    { label: 'education', href: '#education' },
    { label: 'contact', href: '#contact' },
  ];

  /**
   * Check the anchor link has the correct href
   */
describe('Navbar navigation', () => {
    navLinks.forEach(({ label, href }) => {
        test(`Checking ${label} has correct anchor link ${href}`, () => {
            render(
                <ResponsiveContext.Provider value={{ width: 769 }}>
                    <NavBar />
                </ResponsiveContext.Provider>,
            );
            const link = screen.getByTestId(label);
            expect(link).toHaveAttribute('href', href);
        })
    })
});
