// import React from 'react'
import { ThreeDotsVertical } from 'react-bootstrap-icons'
import logoImg from '../../assets/PORTADA.png'
import './style.scss'

const BannerUi = () => {
    return (
        <>
            <div className="big-banner">
                <div className="big-banner__img">
                    <img src={logoImg} alt='logo' />
                </div>

                <div className="big-banner__contact">
                    <div className='baner-content-section'>

                        <div className="tittle">
                            HOLA, SOY <br /> LIZANDER
                        </div>
                        <div className="content">
                            <div >

                            </div>
                            <div className='mb-2'>
                                <span className='text-warning'>DESARROLLADOR WEB </span>entusiasta, autodidacta, que busca siempre dar lo mejor,
                                sin importar el trabajo asignado.
                            </div>

                            Desarrollo webs minimalistas,
                            enfocadas al diseño limpio evitando confusiones, perdidas y distracciones del usuario.<br />
                            <div>
                                {/* Equipado con soluciones creativas para los problemas. */}
                            </div>
                        </div>
                        <div className="button">
                            <button
                                className='myBtn btn btn-outline-warning'
                                type="button"
                            >
                                <ThreeDotsVertical className='me-3' />Leer mas
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BannerUi