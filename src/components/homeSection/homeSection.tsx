import { defineComponent } from 'vue'
import styles from './homeSection.module.css'

export default defineComponent({
  name: 'HomeSection',
  setup() {
    const handleLearnMore = () => {
      console.log('тут пока тоже хз')
    }

    return () => (
      <div class={styles.homeSection}>
        <div class={styles.content}>
          <div class={styles.titleContainer}>
            <h1 class={styles.title}>
              КОМПЛЕКСНЫЕ РЕШЕНИЯ
              <br />
              ДЛЯ СЕЛЬСКОГО ХОЗЯЙСТВА
            </h1>
          </div>
          
          <div class={styles.descriptionContainer}>
            <p class={styles.description}>
              В своём стремлении улучшить пользовательский опыт мы
              <br />
              упускаем, что явные признаки победы могут быть
            </p>
          </div>
          
          <div class={styles.buttonContainer}>
            <button class={styles.learnMoreButton} onClick={handleLearnMore}>
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    )
  },
})