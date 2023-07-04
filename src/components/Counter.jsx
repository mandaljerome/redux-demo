import React from 'react'
import './Counter.css'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch()

    const incrementHandler = (e) => {
        e.preventDefault()
        dispatch({ type: 'increment' })
    }

    const decrementHandler = (e) => {
        e.preventDefault()

        dispatch({ type: 'decrement' })
    }

    const counter = useSelector((state) => {
        return state.counter
    })

    return (
        <div className='counter'>
            <div className='container'>
                <h1>{counter}</h1>
                <button className='button' onClick={decrementHandler}>
                    - Decrement
                </button>
                <button className='button' onClick={incrementHandler}>
                    + Increment
                </button>
            </div>
        </div>
    )
}

export default Counter
