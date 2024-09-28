import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  identifier: Yup.string().email().min(3).max(30).required('email is a required field'),
  password: Yup.string().min(8).max(20).required(),
});

export default LoginSchema;
