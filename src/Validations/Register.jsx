import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({

    name: Yup.string().min(3).max(15).required(),
    phone: Yup.number().required(),
    username: Yup.string().min(3).max(15).required(),
    email: Yup.string().email().min(10).max(30).required(),
    password: Yup.string().min(8).max(20).required(),
});

export default RegisterSchema;
