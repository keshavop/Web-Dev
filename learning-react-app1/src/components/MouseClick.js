import React from 'react'

function MouseClick() {
    function EventHandler(){
        console.log("Button Clicked");
    }
    return (
        <div>
            <button onClick={EventHandler}>Click</button>
        </div>
    )
}

export default MouseClick
