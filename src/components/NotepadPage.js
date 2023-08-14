import React from 'react';
import './NotepadPage.css';

/**
 * The NotepadPage Component to allow the user to write notes
 * @returns The React Component
 */
export default function NotepadPage(props) {

    const { title, note, handleInputChange, handleTextareaResize, textareaRef, checkNewLines } = props;

    return (
        <div className='Notepad'>
            <div className='Notepad-Title'>
                <input 
                    name='title'
                    type='text' 
                    placeholder="Untitled"
                    onChange={handleInputChange}
                    value={title}
                />
            </div>
            <div className='lines'>
                <div className='Page'>
                    <textarea
                        name='note'
                        value={note}
                        onInput={handleTextareaResize}
                        onChange={handleInputChange}
                        autoFocus
                        rows={checkNewLines(note) < 20 ? 20 : checkNewLines(note) + 1}
                        ref={textareaRef}
                    />
                </div>
            </div>
        </div>
    );
}
