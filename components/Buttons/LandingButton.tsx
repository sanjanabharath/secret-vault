import React from 'react'

interface IProps{
    className?: string,
    text: string,
    onClick?: () => void;
}

const LandingButton = ({className, text, onClick}: IProps) => {
  return (
    <div className={`btnNeon ${className}`} onClick={onClick}><div>{text}</div></div>
  )
}

export default LandingButton