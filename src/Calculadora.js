import React, { useState } from 'react'

import Button from './Button'

export default function Calculadora(){

    const [display, setDisplay] = useState("");

    const keyboard = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

    const handleNumberClick = (value) => {
        setDisplay(`${display}${value}`)
    }

    return (
        <div className="calculadora">
            <div className="display">
                {display}
            </div>
            <div  className="keyboard">
                <Button value="7" SetState={handleNumberClick} />
                <Button value="8" SetState={handleNumberClick} />
                <Button value="9" SetState={handleNumberClick} />
                <Button value="4" SetState={handleNumberClick} />
                <Button value="5" SetState={handleNumberClick} />
                <Button value="6" SetState={handleNumberClick} />
                <Button value="1" SetState={handleNumberClick} />
                <Button value="2" SetState={handleNumberClick} />
                <Button value="3" SetState={handleNumberClick} />
                <Button value="0" SetState={handleNumberClick} />
            </div>
        </div>
    )
}