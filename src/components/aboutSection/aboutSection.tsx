// components/aboutSection/aboutSection.tsx
import { defineComponent } from 'vue'
import styles from './aboutSection.module.css'

export default defineComponent({
  name: 'AboutSection',
  setup() {
    return () => (
      <div class={styles.aboutSection}>
        <div class={styles.container}>
        ТУТ КОРОЧЕ БУДЕТ ДЖАЗ
        </div>
      </div>
    )
  },
})