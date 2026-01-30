import React from 'react';

interface CustomCheckboxProps {
  checked: boolean;
  htmlFor: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="relative flex min-w-[20px] h-[20px] border-2 border-black justify-center items-center rounded-full cursor-pointer"
    >
      <span
        className="w-3 h-3 bg-black rounded-full transition-opacity duration-200"
        style={{ opacity: checked ? 1 : 0 }}
      />
    </label>
  );
};

export default CustomCheckbox;
