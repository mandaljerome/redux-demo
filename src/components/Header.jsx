import React from 'react'

import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store'

const Header = () => {
   const validShow = useSelector((state) => {
      return state.auth.isValid
   })

   const dispatch = useDispatch()

   const logoutHandler = () => {
      dispatch(authActions.invalidAuth())
   }

   return (
      <div className='header'>
         <div className='container'>
            <h1>Logo</h1>
            {validShow && (
               <nav>
                  <ul>
                     <li>Home</li>
                     <li>Profile</li>
                     <li>Settings</li>
                     <li className='button' onClick={logoutHandler}>
                        Logout
                     </li>
                  </ul>
               </nav>
            )}
         </div>
      </div>
   )
}

export default Header
