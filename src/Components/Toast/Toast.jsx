import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const useToast = () => {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const showToast = (title, icon, goTo) => {
        const Toast = MySwal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        Toast.fire({
            title,
            icon,
        }).then(() => {
            goTo && navigate(goTo)
        });
    };

    return showToast;
};

export default useToast;
