import * as Yup from "yup";

const ContactSchema = Yup.object().shape({

    name: Yup.string().min(3).max(15).required(),
    phone: Yup.number().required(),
    email: Yup.string().email().min(10).max(30).required(),
    body: Yup.string().min(5,'Message must be at least 4 characters').max(30,'Message must be at most 20 characters').required("Message is Required"),

});

export default ContactSchema;
