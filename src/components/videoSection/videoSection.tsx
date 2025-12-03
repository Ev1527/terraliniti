import { defineComponent } from 'vue'
import styles from './videoSection.module.css'
import MasterButton from '../masterButton/masterButton'

export default defineComponent({
  name: 'VideoSection',
  setup() {
    return () => (
      <div class={styles.videoSection}>
        <div class={styles.content}>
          <h1 class={styles.title}>Больше о Терралинити</h1>
          <MasterButton
                        text="Связаться с команией"
                        width="381px"
                        icon={"../../../public/icons/icon-rightArrow.svg"}
                      />
        </div>
        <div class={styles.video}>
          <div class={styles.videoPlaceholder}>
            <span>Видео будет здесь, наверное</span>
          </div>
        </div>
      </div>
    )
  },
})
