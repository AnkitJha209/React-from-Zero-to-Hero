import React from 'react'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-card' style={props.style}>
      {/* Class is Reserved KeyWord */}
      <h3 id='title'>{props.name}</h3>
      <img id='img' src="" alt="" />
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
