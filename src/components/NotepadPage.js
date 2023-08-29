import React, {useEffect, useState} from 'react';
import './NotepadPage.css';

/**
 * The NotepadPage Component to allow the user to write notes
 * @returns The React Component
 */
export default function NotepadPage(props) {

  const { title, note, handleInputChange, handleTextareaResize, textareaRef, checkNewLines } = props;
  
  const [rows, setRows] = useState(20);

  useEffect(() => {
    const updateRows = () => {
      const textareaElement = document.querySelector('.Page textarea');
      if (textareaElement) {
        const remainingRows = Math.floor((window.innerHeight - textareaElement.offsetTop) / 24);
        setRows(remainingRows);
      }
    };

    window.addEventListener('resize', updateRows);
    updateRows();

    return () => {
      window.removeEventListener('resize', updateRows);
    };
  }, []);

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
            rows={checkNewLines(note) < rows ? rows : checkNewLines(note) + 1}
            ref={textareaRef}
          />
        </div>
      </div>
    </div>
  );
}
