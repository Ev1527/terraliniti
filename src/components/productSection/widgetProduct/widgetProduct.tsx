import { defineComponent } from 'vue'
import { prop } from '../../../../types/prop-types'
import styles from './widgetProduct.module.css'

export default defineComponent({
  name: 'WidgetProduct',
  props: {
    value: prop<string>().required(),
    label: prop<string>().required(),
    img: prop<string>().required(),
  },

  setup(props) {
    return () => (
      <div class={styles.widget}>
        <div
          class={styles.imageWrapper}
          style={{
            backgroundImage: `url(${props.img})`,
          }}
        />

        <div class={styles.content}>
          <div class={styles.contentInner}>
            <span class={styles.title}>{props.label}</span>
            <div class={styles.text}>{props.value}</div>
          </div>
        </div>
      </div>
    )
  },
})
