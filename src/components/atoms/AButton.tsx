import React from "react";

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

const AButton = ({ onClick, disabled }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-10/12 h-10 flex justify-center items-center bg-primary hover:bg-opacity-75 rounded shadow-sm text-white font-sans font-semibold"
    >
      Apply
    </button>
  );
};

export default AButton;
