// useReducer hook
import React, { Fragment, useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 }
        default:
            throw new Error('Invalid action');
    }
}

export default function DayThree() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Fragment>
            <div>
                <p>{state.count}</p>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Clear</button>
            </div>
        </Fragment>
    )
}
