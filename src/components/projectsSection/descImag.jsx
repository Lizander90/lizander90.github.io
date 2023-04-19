import { Eye, FileEarmarkCode } from "react-bootstrap-icons";


const DescImag = () => {
    function alertMantenimiento() {
        swal({
            title: "Upps!",
            text: "Estas funciones están en construcción!",
            icon: "warning",
            button: "Acpetar!",
        });

    }
    return <div onClick={alertMantenimiento} className='option-card bg-dark' >
        <span className='option-card__option text-warning'><Eye /></span>
        <span className='option-card__option text-warning'><FileEarmarkCode /></span>
    </div>
}
export default DescImag;