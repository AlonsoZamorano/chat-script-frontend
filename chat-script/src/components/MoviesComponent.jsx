import React, { useEffect, useState } from 'react'

export const MoviesComponent = () => {
    // Small window that display the available movies
    const movies = [
        "Cinema Paradiso",
        "Indiana Jones and the Raiders of the Lost Ark",
        "Indiana Jones and the Temple of Doom",
        "Indiana Jones IV",
        "John Wick Chapter 4",
        "Liar Liar",
        "Speed Racer",
        "Spider Man",
        "Thor",
        "Wonder Woman"
    ]
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    const handlePointerDown = (e) => {
        setIsDragging(true);
        setStartPos({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    }

    const handlePointerUp = () => {
        setIsDragging(false);
    }

    const handlePointerMove = (e) => {
        if (isDragging) {
            const x = e.clientX - startPos.x;
            const y = e.clientY - startPos.y;
            setPosition({ x, y });
        }
    }

    useEffect(() => {
        document.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerup', handlePointerUp);
        return () => {
            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerup', handlePointerUp);
        };
    }, [isDragging, startPos]);

  return (
    // Con posición absoluta se muestra arriba a la izquierda
        <div 
            style={{
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
                cursor: isDragging ? 'grabbing' : 'grab'
            }}
            className='bg-white p-5 rounded-lg shadow-lg'
            onPointerDown={handlePointerDown}
        >
        <h2
            className='text-2xl font-bold text-gray-800'
        >Experto en las siguientes peliculas:</h2>
        <ul>
            {movies.map((movie, index) => (
                <li 
                    key={index}
                    className='italic text-gray-700'
                    >{movie}</li>
            ))}
        </ul>
    </div>
  )
}
