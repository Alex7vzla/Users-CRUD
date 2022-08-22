import React from 'react'

const Button = ({handleOpenForm}) => {
  return (
    <div className='group1'> 
        <button onClick={handleOpenForm}>Open Form</button>
    </div>
  )
}

export default Button