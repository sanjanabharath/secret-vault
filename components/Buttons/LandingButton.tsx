import React from 'react'
import '@/style/buttonStyle.css'

interface IProps{
    className?: string,
    text: string,
    onClick?: () => void;
}

const LandingButton = ({className, text, onClick}: IProps) => {
  return (
    <div className={`buttonNeon ${className}`}
            onClick={onClick}
        >
            <div> <span></span>
                <span></span>
                <span></span>
                <span></span>
                {text}
            </div>
        </div>
  )
}

export default LandingButton