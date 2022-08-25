import * as YUP from "yup";

export const PROJECT_SCHEMA = YUP.object().shape({
  name: YUP.string().required("Name is required"),
  client: YUP.string().required("Owner is required"),
  status: YUP.string().required("Status is required"),
  description: YUP.string(),
});
