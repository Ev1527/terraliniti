import { defineComponent } from 'vue'
import { prop } from '../../../types/prop-types'
import styles from './masterButton.module.css'

export default defineComponent({
  name: 'MasterButton',
  props: {
    text: prop<string>().required(),
    width: prop<string>().required(),
    height: prop<string>().required(),
    icon: prop<string>().optional(),
    font: prop<string>().optional(),
    gap: prop<string>().optional(),
    iconWidth: prop<string>().optional(),
    iconHeight: prop<string>().optional(),
    type: prop<'button' | 'submit' | 'reset'>().optional(),
    onClick: prop<() => void>().optional(),
  },

  setup(props) {
    const handleClick = () => {
      if (props.onClick) {
        props.onClick()
      }
    }

    return () => (
      <div class={styles.buttonContainer}>
        <button
          class={styles.masterButton}
          style={{ width: props.width, height: props.height, fontSize: props.font, gap: props.gap }}
          type={props.type}
          onClick={handleClick}
        >
          <span class={styles.buttonText}>{props.text}</span>

          {props.icon && (
            <span class={styles.icon}>
              <img
                src={props.icon}
                alt="icon"
                class={styles.iconImage}
                style={{ minWidth: props.iconWidth, minHeight: props.iconHeight }}
              />
            </span>
          )}
        </button>
      </div>
    )
  },
})
