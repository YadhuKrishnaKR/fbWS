import React ,{useReducer,useState,useEffect,createContext } from 'react'
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Feed from '../components/feed/Feed';
import Rightbar from '../components/rightbar/Rightbar';
import './home.css'
export const UserContext = createContext();

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'login':
      return state + 1
    case 'logout':
      return null
    case 'reset':
      return initialState
    default:
      return state
  }
}
function Home() {
  const [user, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='home'>
      


        <Navbar></Navbar>
        <div className='homeContainer' >
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Rightbar />
        </div>
      
    </div>
  )
}

export default Home
