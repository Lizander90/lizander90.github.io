// import React from 'react'
import { MagnetFill, Mailbox, PersonPlusFill, ThreeDotsVertical } from 'react-bootstrap-icons'
import logoImg from '../../assets/PORTADA.png'
import './style.scss'
import Emoji from '../emoji'

const BannerUi = () => {
    const bodyMail = 'Buenas, revisado tu perfil profesional me llamo la atención tu experiencia y habilidades técnicas. Me gustaría saber un poco más sobre ti mi nombre es, ';
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
                                sin importar el trabajo asignado <Emoji symbol='🤓' label='nerd' />.
                            </div>

                            Desarrollo webs minimalistas,
                            enfocadas al diseño limpio evitando confusiones, pérdidas y distracciones del usuario.<br />
                            <div>
                                {/* Equipado con soluciones creativas para los problemas. */}
                            </div>
                        </div>
                        <div className="button">
                            <a
                                className='myBtn btn btn-outline-warning'
                                href={`mailto:lizander.kmilo@gmail.com?subject='Hola Lizander!'&body=${bodyMail}`}>

                                <PersonPlusFill className='fs-5 me-3' />Contáctame
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BannerUi

