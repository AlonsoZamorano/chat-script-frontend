import React, { useEffect, useState } from 'react'

export const ChatComponent = (props) => {
    const messages = props.messages;
    const isCharging = props.isCharging;
    const setMessages = props.setMessages;
    const [loadingText, setLoadingText] = useState('...');

    useEffect(() => {
        if (isCharging) {
          const interval = setInterval(() => {
            setLoadingText(prev => {
              if (prev === '.') return '..';
              if (prev === '..') return '...';
              return '.';
            });
          }, 500); // Cambia la duración si quieres que se actualice más rápido o más lento
    
          return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta o `isCharging` cambia
        }
      }, [isCharging]);
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
        {isCharging && (
            <div className='flex justify-start rounded-lg'>
                <div className='bg-white p-2 rounded-lg text-black'>
                    <p>{loadingText}</p>
                </div>
            </div>
        )}
    </div>
  )
}
