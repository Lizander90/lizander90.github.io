import skillImg from '../../assets/skillsSection.png'
import './style.scss'

const SkillSection = () => {
    return (
        <>
            <div id="skills" className="skill-container">
                <div className="skill-container__title">
                    Stack de Habilidades
                </div>

                <img src={skillImg} alt={'Skill Section'} />
            </div>
        </>
    )
}

export default SkillSection