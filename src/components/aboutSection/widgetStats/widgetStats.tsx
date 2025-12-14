import { defineComponent } from 'vue'
import { prop } from '../../../../types/prop-types'
import styles from './widgetStats.module.css'

export default defineComponent({
  name: 'WidgetStats',
  props: {
    value: prop<string>().required(),
    label: prop<string>().required(),
  },
  setup(props) {
    return () => (
      <div class={styles.widget}>
        <div class={styles.content}>
          <div class={styles.statValue}>{props.value}</div>
          <div class={styles.statLabel}>{props.label}</div>
        </div>
      </div>
    )
  },
})
