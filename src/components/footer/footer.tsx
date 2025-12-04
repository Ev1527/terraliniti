import { defineComponent } from 'vue'
import styles from './footer.module.css'

export default defineComponent({
  name: 'Footer',
  setup() {
    return () => (
      <footer class={styles.footer}>
        2025, ООО «Терралинити»
      </footer>
    )
  },
})