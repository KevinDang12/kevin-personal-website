import React, { useState, useEffect, useRef } from 'react'
import './Chatbot.css'
import axios from 'axios';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";

/**
 * Chatbot component
 * @returns Chatbot component
 */
export default function Chatbot() {
  const [ messages, setMessages ] = useState(["Hello, I am an OpenAI chatbot. I am here to answer any questions about Kevin. Please type in your question in the box below."]);
  const [chatopen, setChatopen] = useState(false);
  const [ prompt, setPrompt] = useState('');
  const messagesEndRef = useRef(null);

  // const local = 'http://localhost:5000'; // window.location.origin
  // const local = "http://127.0.0.1:5000/personal-website-aaeb4/us-central1/app";
  const local = "https://us-central1-personal-website-aaeb4.cloudfunctions.net/app";

  /**
   * Hide chatbot
   */
  let hide = {
    display: 'none',
  }

  /**
   * Show chatbot
   */
  let show = {
    display: 'block'
  }

  /**
   * Toggle chatbot message box
   */
  function toggle () {
    setChatopen(!chatopen)
  }
  
  /**
   * Send the user message to the chatbot
   */
  async function handleSend () {
    if (prompt === '') return;
    const text = prompt;
    setPrompt('');
    setMessages([...messages, prompt]);
    const response = await axios.post(`${local}/api/openai`, { text });
    setMessages([...messages, prompt, response.data])
  }

  function handleKeyPressed (e) {
    if (e.key === 'Enter') {
      handleSend();
    }
  }

  /**
   * Scroll to the bottom of the chat when a new message is sent
   */
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  /**
   * Scroll to the bottom of the chat
   */
  function scrollToBottom () {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
    
  return (
    <div id='chatCon'>
      <div className="chat-box" style={chatopen ? show : hide}>
        <div className="message-header">Ask me a question</div>
        <div className="msg-area">
          {
            messages.map((message, index) => (
              index % 2 ? (
                <p key={index} className="right"><span>{ message }</span></p>
              ) : (
                <p key={index} className="left"><span>{ message }</span></p>
              )
            ))
          }
        <div ref={messagesEndRef} />
        </div>
        <div className="footer">
          <input className='prompt-box' type="text" onKeyDown={handleKeyPressed} value={prompt} placeholder='Ask me anything...' onChange={e => setPrompt(e.target.value)} />
          <button className='send-prompt' onClick={handleSend}><FaArrowRightLong /></button>
        </div>
      </div>
      <br />
      <div className="pop">
        <button className='openai-button' onClick={toggle}>
          {chatopen ? <FaXmark className='icon'/> : <RiOpenaiFill className='icon'/>}
        </button>
      </div>
    </div>
  )
}
