import React, { useState } from 'react'
import { MoviesComponent } from '../components/MoviesComponent';
import { ChatComponent } from '../components/ChatComponent';
import { InputComponent } from '../components/InputComponent';

export const MainView = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: 'Bienvenido a Chat Script, ¿en que puedo ayudarte?', type: 'message' }
    ]);
    const [isCharging, setIsCharging] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Chat Script</h1>
        <MoviesComponent />
        <ChatComponent messages={messages} setMessages={setMessages} isCharging={isCharging} />
        <InputComponent setMessages={setMessages} messages={messages} setIsCharging={setIsCharging} />
    </div>
  )
}
