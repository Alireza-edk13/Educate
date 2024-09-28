import * as Yup from 'yup';



const fileSiza = 30 * 1024 * 1024; // 30MB
const supportedFormats = ['video/mp4'];


const SessionSchema = () => {
    return Yup.object().shape({
        name: Yup.string().min(5).max(30).required(),
        time: Yup.string().matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Format should be HH:MM').required(),
        courseId: Yup.mixed().required(),
        status: Yup.string().required(),
        video: Yup.mixed()
            .required()
            .test(
                'fileSize',
                'video size should not over 30 MB',
                value => value && value.size <= fileSiza
            )
            .test(
                'fileFormat', 'video format is not support',
                value => value && supportedFormats.includes(value.type)
            )
    })
}
export default SessionSchema