import skillImg from '../../assets/skillsSection.png'
import Emoji from '../emoji'
import './style.scss'

const SkillSection = () => {
    return (
        <>
            <div id="skills" className="skill-container">
                <div className="skill-container__section">
                    <div className="skill-container__section-tittle marker-tittle">
                        Stack de Habilidades
                    </div>
                    <div className="skill-container__section-desc">
                        <span className='text-warning'>La mejor </span> habilidad
                        que puedes desarrollar es aprender
                        de los errores y estar
                        dispuesto a convertir tus debilidades en fortalezas.
                        Esta es una <span className='text-warning'> actitud
                        </span> importante para cualquier
                        campo, incluyendo el <span className='text-warning'>

                            desarrollo web <Emoji label='wink' symbol="😉" />.</span>
                    </div>
                </div>

                <img src={skillImg} alt={'Skill Section'} />
            </div>
        </>
    )
}

export default SkillSection