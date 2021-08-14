import React from 'react'

import './Button.scss'

interface ButtonProps {
  text: string
  isActive?: boolean
  onClick?: () => void
  icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  isActive,
  icon,
}) => {
  return (
    <div
      className={`component-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <span className="button-text">{text}</span>
    </div>
  )
}
