import React, { ChangeEventHandler } from "react";
import { Select } from "@chakra-ui/react";

import { PROJECT_STATUS_LIST } from "helpers/constants/project";

interface PropTypes {
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

function SelectStatus({ value, onChange }: PropTypes) {
  return (
    <Select placeholder="Select status" onChange={onChange} value={value}>
      {PROJECT_STATUS_LIST.map((status) => (
        <option key={status.value} value={status.value}>
          {status.label}
        </option>
      ))}
    </Select>
  );
}

export default SelectStatus;
