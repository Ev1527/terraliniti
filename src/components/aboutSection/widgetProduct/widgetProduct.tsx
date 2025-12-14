import { defineComponent } from 'vue'
import { prop } from '../../../../types/prop-types'
import styles from './widgetProduct.module.css'

export default defineComponent({
  name: 'WidgetProduct',
  props: {
    value: prop<string>().required(),
    label: prop<string>().required(),
    img: prop<string>().required(),
    bgColor: prop<string>().optional('#3e5133'),
  },

  setup(props) {
    return () => (
      <div class={styles.widget}>
        <div class={styles.imageWrapper}>
          <img src={props.img} alt={props.label} class={styles.image} />
        </div>

        <div class={styles.content} style={{ background: props.bgColor }}>
          <div class={styles.title}>{props.label}</div>
          <div class={styles.text}>{props.value}</div>
        </div>
      </div>
    )
  },
})