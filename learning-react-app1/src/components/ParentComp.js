import React from 'react'
import ChildComp from './ChildComp'

function ParentComp() {
    const greatParent = (childName) => {
        alert(`Hi kiki ${childName}`);
    }
    return (
        <ChildComp greatHandler={greatParent}></ChildComp>
    )
}

export default ParentComp
