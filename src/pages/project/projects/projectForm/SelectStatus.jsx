import PropTypes from "prop-types";
import { Select } from "@chakra-ui/react";

import { PROJECT_STATUS_LIST } from "helpers/constants/project";

function SelectStatus({ value, onChange }) {
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

SelectStatus.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectStatus;
