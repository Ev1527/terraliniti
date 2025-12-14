import { defineComponent } from 'vue'
import { prop } from '../../../types/prop-types'
import styles from './homeSection.module.css'
import MasterButton from '../masterButton/masterButton'

export default defineComponent({
  name: 'HomeSection',
  props: {
    onLearnMore: prop<() => void>().optional(),
  },
  setup(props) {
    const handleLearnMore = () => {
      console.log('Переходим к продуктам')
      if (props.onLearnMore) {
        props.onLearnMore()
      }
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
            <MasterButton
              text="Узнать больше"
              width="284px"
              icon="../../../public/icons/icon-rightArrow.svg"
              onClick={handleLearnMore}
            />
          </div>
        </div>
      </div>
    )
  },
})