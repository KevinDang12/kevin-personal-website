import React from 'react';
import Skills from '../Skills';
import { Context as ResponsiveContext } from 'react-responsive';
import { render, screen } from '@testing-library/react';

/**
 * Check all the icons on the Skills Page
 */
test('Check for the Skills icon on the Skills Page', () => {
    render(
        <ResponsiveContext.Provider value={{ width: 769 }}>
            <Skills />
        </ResponsiveContext.Provider>,
    );

    // Check that each icon is present
    expect(screen.getByTestId('jsImage')).toBeInTheDocument();
    expect(screen.getByTestId('reactImage')).toBeInTheDocument();
    expect(screen.getByTestId('javaImage')).toBeInTheDocument();
    expect(screen.getByTestId('androidImage')).toBeInTheDocument();
    expect(screen.getByTestId('pythonImage')).toBeInTheDocument();
    expect(screen.getByTestId('sqlImage')).toBeInTheDocument();
    expect(screen.getByTestId('cSharpImage')).toBeInTheDocument();
    expect(screen.getByTestId('cppImage')).toBeInTheDocument();
});