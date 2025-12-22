// Chatbot.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Context as ResponsiveContext } from 'react-responsive';
import Chatbot from '../chatbot/Chatbot';

jest.mock('axios');
window.HTMLElement.prototype.scrollIntoView = function() {};

beforeEach(() => {
    jest.clearAllMocks();
});

/**
 * Open and close the AI Chat Box
 */
test('Check that pressing the button opens and closes the chat box', () => {
    render(
        <ResponsiveContext.Provider value={{ width: 769 }}>
            <Chatbot />
        </ResponsiveContext.Provider>,
    );

    // The chat box should be hidden initially
    const chatBox = screen.getByTestId('chat-box')
    expect(chatBox).toHaveStyle('display: none');

    // Find the toggle button
    const toggleButton = screen.getByTestId('openai-button');
    expect(toggleButton).toBeInTheDocument();

    // Click to open
    fireEvent.click(toggleButton);
    expect(chatBox).toHaveStyle('display: block');

    // Click to close
    fireEvent.click(toggleButton);
    expect(chatBox).toHaveStyle('display: none');
});