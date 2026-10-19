import React from "react";
import { Dropdown, DropdownItem } from "flowbite-react";

export const DropdownFlowbite = ({ label, options, value, onChange }) => {
  return (
     <Dropdown className="bg-slate-800 text-white hover:bg-slate-700" label={value || label}>
      {options.map((option) => (
        <DropdownItem key={option} onClick={() => onChange(option)}>
          {option}
        </DropdownItem>
      ))}
    </Dropdown>
  );
};
