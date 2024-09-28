import * as Yup from 'yup';

const TicketSchema = () => {
    return Yup.object().shape({
        body: Yup.string().min(4,'Answer must be at least 4 characters').max(20,'Answer must be at most 20 characters').required("Answer is Required"),
    })
}
export default TicketSchema