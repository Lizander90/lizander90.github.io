import './style.scss'
import myPhoto from '../../assets/myphoto.jpg'
import { Download } from 'react-bootstrap-icons'
import resumePDF from '../../assets/lizander_cv.pdf'

const AboutSection = () => {

    return (
        <div id="about" className="about-section">
            <div className="about-container">

                <div className="about-container__img">
                    <img src={myPhoto} alt='personal photo' />
                </div>

                <div className="about-container__data">

                    <div className="data-title marker-tittle">
                        Desarrollo personal
                    </div>

                    <div className="data-sub-title">
                        Después de graduarme de <span className='text-warning'>Ingeniero de Software</span> , comencé
                        a trabajar de forma independiente como desarrollador web
                        freelance.
                    </div>

                    <div className="data-description">
                        <div className='mt-5'>
                            Mientras trabajaba, descubrí que mi pasión estaba en crear proyectos con un
                            <span className='text-warning'> diseño elegante </span>y una solución precisa.
                            Ahora, estoy emocionado de enfocar mi carrera en un ámbito más profesional, trabajando
                            en proyectos desafiantes que me permitan seguir creciendo y mejorando mis habilidades.
                        </div>

                    </div>


                    <div className="data-fast-skill">
                        <div className="left">
                            <div className="fast-skill-item">
                                <span className="fast-skill-item__skill" > Tipo: </span>
                                <span className=" fast-skill-item__description" > Desarrollo web</span>
                            </div>
                            <div className="fast-skill-item">
                                <span className="fast-skill-item__skill" > Escolaridad: </span>
                                <span className=" fast-skill-item__description" > Ing. Informática</span>
                            </div>
                        </div>

                        <div className="right">
                            <div className="fast-skill-item">
                                <span className="fast-skill-item__skill" > Stack: </span>
                                <span className=" fast-skill-item__description" >ReactJs Full-Stack</span>
                            </div>
                            <div className="fast-skill-item">
                                <span className="fast-skill-item__skill" > Preferencia: </span>
                                <span className=" fast-skill-item__description" > UI/UX Minimalista</span>
                            </div>
                        </div>



                    </div>
                    <div className="data-button">
                        <a href={resumePDF} download={'Lizander curriculum Software Engineer'}>
                            <button
                                className='myBtn btn btn-warning'
                                type="button"
                            >
                                <Download className='me-3' />Descargar CV
                            </button>
                        </a>

                    </div>
                </div>

            </div>
        </div>
    )



}

export default AboutSection