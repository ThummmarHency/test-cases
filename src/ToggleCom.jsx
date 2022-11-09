import React, { useState } from 'react'

const ToggleCom = () => {
    const [isToggle, setIsToggle] = useState(false)
    const handleToggle = () => {
        setIsToggle(!isToggle)
    }
  return (
    <div className='testClass'>
        <button onClick={handleToggle}>{isToggle?"Hide":"Show"}</button>
        <h1>{"This will be toggled"}</h1>
    </div>
  )
}

export default ToggleCom