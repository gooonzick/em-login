import { FormValues } from "../types";

export const validtor = (values: FormValues) => {
  const errors: Record<string, any> = {};

  if (
    !values.email ||
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
  ) {
    errors.email = "Must be a valid email";
  }

  if (!values.password) {
    errors.password = "Must not be empty";
  }
  return errors;
};
