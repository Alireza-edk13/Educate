import * as Yup from 'yup';

const RoleSchema = () => {
    return Yup.object().shape({
        role: Yup.string().min(4).max(10).required(),
    })
}
export default RoleSchema