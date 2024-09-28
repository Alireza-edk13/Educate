import * as Yup from 'yup';



const fileSiza = 1024 * 1024; // 1MB
const supportedFormats = ['image/jpg', 'image/jpeg', 'image/webp', 'image/png'];


const CourseSchema = () => {
    return Yup.object().shape({
        name: Yup.string().min(5).max(30).required(),
        shortName: Yup.string().min(5).max(30).required(),
        desc: Yup.string().min(5).max(15).required(),
        price: Yup.number().required(),
        support: Yup.string().min(5).max(30).required(),
        categoryId: Yup.mixed().required(),
        status: Yup.string().required(),
        cover: Yup.mixed()
            .required()
            .test(
                'fileSize',
                'image size should not over 1 MB',
                value => value && value.size <= fileSiza
            )
            .test(
                'fileFormat', 'image format is not support',
                value => value && supportedFormats.includes(value.type)
            )
    })
}
export default CourseSchema