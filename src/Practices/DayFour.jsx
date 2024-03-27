import React, { useRef, useState } from 'react'

export default function DayFour() {
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)

    const handleFocus = () => {
        inputRef.current.focus()
    }
    return (
        <>
            <input type='text' value={inputValue} ref={inputRef} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleFocus}>Focus</button>
        </>
    )
}
