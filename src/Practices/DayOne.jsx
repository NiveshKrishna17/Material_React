// useState & useCallback Hook
import React, { useState, useCallback } from "react";
export default function DayOne() {
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState("");
    const [state, setState] = useState({ hello: "world" });

    const counterFunction = useCallback((type) => {
        if (type === "Increment") {
            if (counter > 0) setError("");
            setCounter(counter + 1);
        } else {
            if (counter === 0) {
                setError("Not Further Decrement");
            } else {
                setCounter(counter - 1);
            }
        }
    },
        [counter]
    );

    return (
        <div className="App">
            <p>{counter}</p>
            <h3>{error}</h3>
            {/* <div>{state}</div> */}
            <button onClick={() => counterFunction("Increment")}>Increment</button>
            <button onClick={() => counterFunction("Decrement")}>Decrement</button>
        </div>
    );
}
