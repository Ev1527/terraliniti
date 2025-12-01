import { defineComponent, onMounted, ref } from 'vue'
import styles from './app.module.css'
import Header from '../components/header/header'
import HomeSection from '../components/homeSection/homeSection'
import AboutSection from '../components/aboutSection/aboutSection'


export default defineComponent({
  name: 'App',
  setup() {
    const homeRef = ref<HTMLElement>();
    const aboutRef = ref<HTMLElement>();

    const sections = [
      { id: 'home', name: 'Главная', ref: homeRef },
      { id: 'about', name: 'О нас', ref: aboutRef },
    ]

    const scrollToSection = (id: string) => {
      const section = sections.find(s => s.id === id)
      if (section && section.ref.value) {
        section.ref.value.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    const handleScroll = () => {
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    })

    return () => (
      <div class={styles.app}>
        <Header onNavigate={scrollToSection} />
        <div ref={homeRef} id="home">
          <HomeSection />
        </div>

        <div ref={aboutRef} id="about">
          <AboutSection />
        </div>
        
      </div>
    )
  },
})