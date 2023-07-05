import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/index'

import './Login.css'

const Login = () => {
   const dispatch = useDispatch()

   const submitHandler = (e) => {
      e.preventDefault()

      dispatch(authActions.validAuth())
   }

   return (
      <div className='login'>
         <div className='container'>
            <form onSubmit={submitHandler}>
               <input type='text' placeholder='Username' />
               <input type='text' placeholder='Password' />
               <button>LOGIN</button>
            </form>
         </div>
      </div>
   )
}

export default Login
