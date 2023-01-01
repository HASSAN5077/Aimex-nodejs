import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter valid email"),
  password: Yup.string()
    .min(6)
    .required("Password should be at least 6 characters long"),
});
export const signupSchema = Yup.object({
  first_name: Yup.string()
    .min(3)
    .max(25)
    .required("Please enter your first name"),
  last_name: Yup.string()
    .min(3)
    .max(25)
    .required("Please enter your last name"),

  email: Yup.string().email().required("Please enter a valid phone number"),

  password: Yup.string()
    .min(6)
    .required("Password must be at least 6 characters long"),
});
