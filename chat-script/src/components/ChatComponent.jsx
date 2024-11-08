import React, { useEffect } from 'react'

export const ChatComponent = (props) => {
    const messages = props.messages;
    const isCharging = props.isCharging;
    const setMessages = props.setMessages;

    useEffect(() => {
        if (isCharging) {
            // Añadimos un mensaje de ... que va cambiando . .. ...
            if (messages[messages.length - 1].text !== '...') {
                setMessages([...messages, { id: messages.length + 1, text: '...', type: 'message' }])
            }
            else {
                // Eliminamos el mensaje de ... si ya está
                setMessages(messages.slice(0, messages.length - 1))
            }
        }
    }, [isCharging])
  return (
    <div className='flex flex-col gap2 w-full mb-5'>
        {messages.map((message) => (
            <div key={message.id} 
            className={`flex ${message.type === 'message' ? 'justify-start' : 'justify-end'} rounded-lg`}>
                <div className='bg-white p-2 rounded-lg text-black'>
                    <p>{message.text}</p>
                </div>
            </div>
        ))}
    </div>
  )
}
