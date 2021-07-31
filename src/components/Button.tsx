import React from 'react'

import './Button.scss'

interface ButtonProps {
  text: string
  isActive?: boolean
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, isActive }) => {
  return (
    <div
      className={`component-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <span className="button-text">{text}</span>
    </div>
  )
}
