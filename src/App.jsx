import './App.scss'
import NavBar from './components/navBar'
import BannerUi from './components/banerUI'
import AboutSection from './components/aboutSection'
import SkillSection from './components/skillsection'
import ProjectSection from './components/projectsSection'

function App() {

  return (
    <div className="App">
      <NavBar />
      <BannerUi />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
    </div>
  )
}

export default App
