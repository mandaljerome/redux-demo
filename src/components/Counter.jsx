import React, { useState, useRef } from 'react'
import './Counter.css'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/index'

const Counter = () => {
   const counter = useSelector((state) => {
      return state.counter.counter
   })

   const textValue = useRef()
   const [value, setValue] = useState(0)
   const dispatch = useDispatch()

   const incrementHandler = (e) => {
      if (textValue.current.value < 0 || textValue.current.value > 0) {
         dispatch(counterActions.increment({ value: value }))
      } else {
         alert('Please type a value to the textbox')
      }
   }

   const decrementHandler = (e) => {
      if (textValue.current.value < 0 || textValue.current.value > 0) {
         dispatch(counterActions.decrement({ value: value }))
      } else {
         alert('Please type a value to the textbox')
      }
   }

   const valueHandler = (e) => {
      if (e.target.value < 0 || e.target.value > 0) {
         setValue(Number(e.target.value))
      } else if (e.target.value == null) {
         setValue(0)
      }
   }

   return (
      <div className='counter'>
         <div className='container'>
            <h1>{counter}</h1>
            <input
               type='number'
               className='input-text'
               name='input-text'
               id='input-text'
               placeholder='Input the increment value here'
               onChange={valueHandler}
               ref={textValue}
            />
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
