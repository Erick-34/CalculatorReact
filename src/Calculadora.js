import React, { useState } from 'react'

import Button from './Button'

export default function Calculadora(){

    const [display, setDisplay] = useState("");

    const keyboard = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

    const handleNumberClick = (value) => {
        setDisplay(`${display}${value}`)
    }
    
    const handleDelete = () => {
        setDisplay("")
    }

    const handleDeleteOne = () => {
        const value = display.length;
        setDisplay(display.substr(0, value -1))
    }

    return (
        <div className="calculadora">
            <div className="display">
                {display}
            </div>
            <div  className="keyboard">
                { keyboard.map((value) => <Button key={value} value={value} SetState={handleNumberClick} /> )}
                <button onClick={() => handleDeleteOne()}>Delete</button>
                <button onClick={() => handleDelete()}>C</button>
            </div>
        </div>
    )
}