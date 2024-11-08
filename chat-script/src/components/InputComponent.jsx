import React, { useState } from 'react'

export const InputComponent = (props) => {
    const messages = props.messages;
    const setMessages = props.setMessages;
    const setIsCharging = props.setIsCharging;
    const [message, setMessage] = useState('');
    const handleSubmit = async (e) => {
        // http://127.0.0.1:8000
        setIsCharging(true);
        fetch(import.meta.env.VITE_API + '/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ texto: message })
        })
        .then(response => response.json())
        .then(data => {
            setMessages([...messages, { id: messages.length + 1, text: message, type: 'query' }])
            setMessages([...messages, { id: messages.length + 1, text: data.text, type: 'message' }])
            setMessage('');
            console.log(data)
        })
        .catch(error => console.log(error))
        .finally(() => setIsCharging(false));
    }
  return (
    <div className='flex flex-col items-center justify-center'>
        <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={handleSubmit}>Send</button>
    </div>
  )
}
