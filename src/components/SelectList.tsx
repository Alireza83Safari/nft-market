import React from "react";

type SelectListType = {
  options: [];
  value: string;
  name: string;
  defaultValue: string;
};

export default function SelectList(props: SelectListType) {
  const { options, value, name, defaultValue } = props;
  
  return (
    <select>
      <option value="">default</option>
    </select>
  );
}
