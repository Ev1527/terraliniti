import { defineComponent } from 'vue'
import Stub from '../components/stub/stub'
import styles from './app.module.css'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div class={styles.app}>
        <Stub />
      </div>
    )
  },
})
