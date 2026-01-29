import React from 'react'

const Button = ({
    disabled,
    children,
    onClick 
}) => {
  return (
    <div onClick={onClick} className={`px-32 py-8 text-white pointer ${disabled ? "bg-blue-200" : "bg-green-400" }`} >
        {children}
    </div>
  )
}

export default Button