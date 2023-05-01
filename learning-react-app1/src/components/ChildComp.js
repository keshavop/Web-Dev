import React from 'react'

function ChildComp(props) {
    return (
        <div>
            <button onClick={()=>props.greatHandler('child')}>Greet parent</button>
        </div>
    )
}

export default ChildComp
