import React from 'react';

interface CustomRadioProps {
  checked: boolean;
  htmlFor: string;
}

const CustomRadio: React.FC<CustomRadioProps> = ({ checked, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="relative inline-block w-[20px] h-[20px] cursor-pointer"
    >
      {/* Outer circle */}
      <span
        className="absolute inset-0 border-2 border-black rounded-full transition-colors duration-200"
        style={{ backgroundColor: checked ? '#000' : '#fff' }}
      />
      {/* Inner circle */}
      <span
        className="absolute w-[10px] h-[10px] rounded-full bg-white left-[3px] top-1/2 transition-opacity duration-200"
        style={{ 
          transform: 'translateY(-50%)',
          opacity: checked ? 1 : 0 
        }}
      />
    </label>
  );
};

export default CustomRadio;
