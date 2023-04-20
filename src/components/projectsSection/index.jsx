import './style.scss'
import footerImg from '../../assets/footer.png'

import cardImg_travel from '../../assets/travel-card.png'
import cardImg_vs from '../../assets/vs-card.png'
import cardImg_landing from '../../assets/landing-card.png'
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
                        <img className='card-image' src={cardImg_travel} alt='Travel Project' />
                        <DescImag />
                    </div>
                    <div className='footer__content-card'>
                        <img className='card-image' src={cardImg_vs} alt='Travel Project' />
                        <DescImag />
                    </div>
                    <div className='footer__content-card'>
                        <img className='card-image' src={cardImg_landing} alt='Travel Project' />
                        <DescImag />
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