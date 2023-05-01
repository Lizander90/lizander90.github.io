// import React from 'react'
import { MenuApp, PlusCircleFill } from 'react-bootstrap-icons'
import './style.scss'
import { useEffect, useState } from 'react'

const NavBar = () => {
    const [offcanvas, setOffcanvas] = useState()

    const hideOffCanvas = () => {
        offcanvas.hide()
    }
    useEffect(() => {
        const offcanvas_el = document.getElementById("menuLateral")
        setOffcanvas(new bootstrap.Offcanvas(offcanvas_el))
    }, [])

    return (
        <>
            <nav id="home" className="navbar navbar-expand-lg navbar-dark bg-transparent">


                <div className="container-fluid">
                    {/* <a href="" className="navbar-brand text-info fw-semibold fs-4">Lizander</a> */}

                    <div
                        className='navbar-toggler'
                        id="toogler-button">
                        <PlusCircleFill
                            // type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#menuLateral"
                        />
                    </div>

                    <section
                        className="offcanvas offcanvas-start"
                        id="menuLateral"
                        tabIndex="-1"
                    >
                        <div className="offcanvas-header" data-bs-theme="dark">
                            <h5 className="offcanvas-title text-warning" href={`#home`}>LIZANDER CAMILO</h5>
                            <button
                                className="btn-close bg-warning"
                                type="button"
                                aria-label="Close"
                                data-bs-dismiss="offcanvas"
                            ></button>
                        </div>

                        <div
                            className="offcanvas-body d-flex flex-column px-0 "
                            onClick={() => hideOffCanvas()}
                        >
                            <ul className="navbar-nav fs-5 justify-content-end pe-5">

                                <li className="nav-item p-3 py-md-1">
                                    <a href={`#home`} className="nav-link">HOME</a>
                                </li>
                                <li className="nav-item p-3 py-md-1">
                                    <a href={`#about`} className="nav-link">ACERCA DE MI</a>
                                </li>
                                <li className="nav-item p-3 py-md-1">
                                    <a href={`#skills`} className="nav-link">HABILIDADES</a>
                                </li>
                                <li className="nav-item p-3 py-md-1">
                                    <a href={`#projects`} className="nav-link">PROYECTOS</a>
                                </li>
                            </ul>

                            <div className="d-lg-none align-self-center py-3">
                                <a href=""><i className="bi bi-twitter px-2 text-info fs-2"></i></a>
                                <a href=""><i className="bi bi-facebook px-2 text-info fs-2"></i></a>
                                <a href=""><i className="bi bi-github px-2 text-info fs-2"></i></a>
                                <a href=""><i className="bi bi-whatsapp px-2 text-info fs-2"></i></a>
                            </div>
                        </div>
                    </section>
                </div>
            </nav>
        </>
        // <div classNameName="navbar-top">

        //     <nav classNameName="navbar navbar-expand-md  navbar-dark bg-transparent">
        //         <div classNameName="container-fluid">
        //             <a classNameName="navbar-brand" href="#">  </a>

        //             <div
        //                 classNameName="navbar-toggler"
        //                 data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"
        //             >
        //             </div>

        //             <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
        //                 <div className="offcanvas-header">
        //                     <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5>
        //                     <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        //                 </div>
        //                 <div className="offcanvas-body">
        //                     <p>.....</p>
        //                 </div>
        //             </div>

        //         </div>
        //     </nav>

        // </div>
    )
}



export default NavBar




