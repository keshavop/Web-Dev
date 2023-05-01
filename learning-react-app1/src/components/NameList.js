import React from 'react'

export default function NameList() {
  const names = ['keshav', 'kiki', 'kk']
  return (
    <div>
    {names.map((name)=>{
      return <h2 key={name}>{name}</h2>
    })}
    </div>
  )
}
