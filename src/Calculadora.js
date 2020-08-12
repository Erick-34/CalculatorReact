import React, { useState } from 'react'
import Button from './Button'

export default function Calculadora() {

    const [display, setDisplay] = useState("");

    const calcRegex = /^([0-9]|-|\+|\*|\/|\.)*$/;

    const keyboard = [
        7, 8, 9, "/", "C",
        4, 5, 6, "*", "Del",
        1, 2, 3, "-", "",
        0, ".", "+", "=",
    ]

    const handleClick = (value) => {
        switch (value) {
            case "=":
                setDisplay(eval(display))
                break;
            case "C":
                setDisplay('')
                break;
            case "Del":
                setDisplay(display.substr(0, display.length - 1))
                break;
            default:
                setDisplay(`${display}${value}`)
        }
    }

    return (
        <div className="calculadora">
            <input
                type="text"
                value={display}
                className="display"
                onChange={event => {
                    const { value } = event.target;
                    if (calcRegex.test(value)) {
                        setDisplay(value);
                    }
                }}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        setDisplay(eval(display))
                    } else if (event.key.toLowerCase() === 'c') {
                        setDisplay("")
                    }
                }}
            />
            <div className="keyboard">
                {keyboard.map((value) => {
                    const span2Class = value === 0 ? "span2" : '';
                    const primaryClass = isNaN(value) ? "primay" : '';
                    return (
                        <Button
                            key={value}
                            value={value}
                            SetState={handleClick}
                            className={`${span2Class} ${primaryClass}`}
                        />
                    )
                }
                )}
            </div>
        </div>
    )
}