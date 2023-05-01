import React from 'react'

function UserGreating() {
    const isLoggedIn = false;
  return (
    <div>
    <h1>Welcome {isLoggedIn ?'keshav' : 'kiki'}</h1>
    </div>
  )
}

export default UserGreating
