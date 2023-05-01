import './style.scss'
import footerImg from '../../assets/footer.png'

import cardImg_devSafio from '../../assets/DevSafio.png'
import cardImg_vs from '../../assets/vs-card.png'
import cardImg_Portafolio from '../../assets/Portafolio.png'
import DescImag from './descImag'

const ProjectSection = () => {
    return (
        <>
            <div id='projects' className='footer'>


                <div className='footer__section'>
                    <div className='footer__section-tittle marker-tittle'>
                        PROYECTOS
                    </div>

                    <div className='footer__section-desc'>
                        Sin duda alguna,<mark className='bg-warning'>la clave
                        </mark> para mejorar tus
                        habilidades es la constante construcción de proyectos.
                        Les comparto algunos
                        de mis trabajos web más reconocidos.
                    </div>
                </div>

                <div className='footer__content'>
                    <div className='footer__content-card'>
                        <img className='card-image' src={cardImg_devSafio} alt='DevSafio' />
                        <DescImag
                            linkCode={'https://github.com/dlab-team/c7-frontend'}
                            linkWeb={'https://devsafio.us'}
                        />
                    </div>
                    <div className='footer__content-card'>
                        <img className='card-image' src={cardImg_vs} alt='Valeria Smile' />
                        <DescImag
                            linkWeb={'https://clinicavaleriasmile.com'}
                        />
                    </div>
                    <div className='footer__content-card'>
                        <img className='card-image' src={cardImg_Portafolio} alt='Mi Portafolio' />
                        <DescImag
                            linkCode={'https://github.com/Lizander90/lizander90.github.io'}
                        />
                    </div>
                </div>

                <div className='footer__img'>
                    <img src={footerImg} alt='Proyectos' />
                </div>
            </div>
        </>
    )
}

export default ProjectSection