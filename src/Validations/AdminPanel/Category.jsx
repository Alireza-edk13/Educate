import * as Yup from 'yup';

const CategorySchema = () => {
    return Yup.object().shape({
        title: Yup.string().min(4).max(20).required(),
        name: Yup.string().min(4).max(10).required(),
    })
}
export default CategorySchema