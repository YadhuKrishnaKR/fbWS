import React from 'react'
import "./Storycard.scss";
function Storycard({ user }) {
  return (
    <div>
      <div className="storyCard">
      <div className="overlay"></div>
      <img src={user.profilePicture} alt="" className="storyProfile" />
      <img src={user.profilePicture} alt="" className="storybackground" />
      <span className="text">{user.username}</span>
    </div>
    </div>
  )
}

export default Storycard
