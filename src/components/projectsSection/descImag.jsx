import { Eye, FileEarmarkCode } from "react-bootstrap-icons";


const DescImag = ({ linkWeb, linkCode }) => {

    return <div className='option-card bg-dark' >
        {linkWeb &&
        <a className='option-card__option text-warning' href={!!!linkWeb ? '#' : linkWeb} target="_blank"><Eye /></a>
        }
        {linkCode &&
            <a className='option-card__option text-warning' href={!!!linkCode ? '#' : linkCode} target="_blank"><FileEarmarkCode /></a>
        }
    </div >
}
export default DescImag;