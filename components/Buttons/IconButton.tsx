import React from "react";

interface IProps {
  icon: JSX.Element;
  onClick: () => void;
  className?: string;
}

const IconButton = ({ icon, onClick, className }: IProps) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      {icon}
    </button>
  );
};

export default IconButton;
