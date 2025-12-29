// Contact.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Context as ResponsiveContext } from 'react-responsive';
import Contact from '../Contact';
import * as contactText from '../text/contactText';

beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });

    Object.assign(navigator, {
        clipboard: {
            writeText: jest.fn(),
        },
    });
});

beforeEach(() => {
    jest.clearAllMocks();
});

/**
 * Copy the Email after selecting the button
 */
test('Clicking the email button copies the correct email address', () => {
    render(
        <ResponsiveContext.Provider value={{ width: 769 }}>
            <Contact />
        </ResponsiveContext.Provider>,
    );
    const emailButton = screen.getByTestId('email');
    expect(emailButton).toHaveTextContent(contactText.EMAIL);

    fireEvent.click(emailButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(contactText.EMAIL_LINK);
});

/**
 * Check for the correct link for GitHub
 */
test('GitHub button links to the correct URL and opens in a new tab', () => {
    render(
        <ResponsiveContext.Provider value={{ width: 769 }}>
            <Contact />
        </ResponsiveContext.Provider>,
    );
    const githubLink = screen.getByTestId('github');
    expect(githubLink).toHaveAttribute('href', contactText.GITHUB_LINK);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noreferrer');
});

/**
 * Check for the correct link for LinkedIn
 */
test('LinkedIn button links to the correct URL and opens in a new tab', () => {
    render(
        <ResponsiveContext.Provider value={{ width: 769 }}>
            <Contact />
        </ResponsiveContext.Provider>,
    );
    const linkedinLink = screen.getByTestId('linkedin');
    expect(linkedinLink).toHaveAttribute('href', contactText.LINKEDIN_LINK);
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noreferrer');
});

/**
 * Check for the correct link for the Resume
 */
test('Resume button links to the resume document and opens in a new tab', () => {
    render(
        <ResponsiveContext.Provider value={{ width: 769 }}>
            <Contact />
        </ResponsiveContext.Provider>,
    );
    const resumeLink = screen.getByTestId('resume');
    expect(resumeLink).toHaveAttribute('href');

    expect(resumeLink.getAttribute('href')).toMatch(/Resume\.pdf$/);
    expect(resumeLink).toHaveAttribute('target', '_blank');
    expect(resumeLink).toHaveAttribute('rel', 'noreferrer');
});
