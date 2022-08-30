import * as YUP from "yup";
import { PROJECT_FORM_SOURCE_EDIT } from "./constants";
/**
 *
 * @param {'PROJECT_FORM_SOURCE_EDIT'} source - Source where the form is opened from
 * @returns YUP Schema
 */
export const GET_PROJECT_SCHEMA = (source) => {
  return YUP.object().shape({
    name: YUP.string().required("Name is required"),
    client: source === PROJECT_FORM_SOURCE_EDIT ? null : YUP.string().required("Owner is required"),
    status: YUP.string().required("Status is required"),
    description: YUP.string(),
  });
};
