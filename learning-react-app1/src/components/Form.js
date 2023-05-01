import React, { useState } from 'react'

function Form() {
    const [username, setUsername] = useState('')
    const [userEmail, setUserEmail] = useState("")

    const handleSubmit =(event)=>{
        event.preventDefault()
        alert(`Form data is ${username}`)
        alert(`Email is ${userEmail}`)
    }

    return (
        
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" 
                value={username}
                onChange={(event)=> setUsername(event.target.value)}
                />
                <br />
                <label>E-mail</label>
                <input type='email'
                value={userEmail}
                onChange={(event)=> setUserEmail(event.target.value)}
                >

                </input>
            <button type='submit'>Submit the form</button>
            </form>
        
    )
}

export default Form
