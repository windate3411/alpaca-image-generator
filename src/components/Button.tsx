import React from 'react'

import './Button.scss'

interface ButtonProps {
  text: string
  isActive?: boolean
  onClick?: () => void
  icon?: React.ReactNode
  type?: 'round' | 'square'
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  isActive,
  icon,
  type = 'round',
}) => {
  return (
    <div
      className={`component-button ${isActive ? 'active' : ''} ${type}`}
      onClick={onClick}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span className="button-text">{text}</span>
    </div>
  )
}
