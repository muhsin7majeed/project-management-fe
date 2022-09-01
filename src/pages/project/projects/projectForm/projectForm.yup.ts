import * as YUP from "yup";

import { ProjectFormSource } from "types/project";
import { PROJECT_FORM_SOURCE } from "./constants";

/**
 * @returns YUP Schema based on source
 */
export const getProjectSchema = (source?: ProjectFormSource) => {
  return YUP.object().shape({
    description: YUP.string(),
    name: YUP.string().required("Name is required"),
    status: YUP.string().required("Status is required"),
    client: source === PROJECT_FORM_SOURCE.EDIT ? YUP.string().nullable() : YUP.string().required("Owner is required"),
  });
};
