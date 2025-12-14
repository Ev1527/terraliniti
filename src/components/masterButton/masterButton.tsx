import { defineComponent } from 'vue'
import { prop } from '../../../types/prop-types'
import styles from './masterButton.module.css'

export default defineComponent({
  name: 'MasterButton',
  props: {
    text: prop<string>().required(),
    width: prop<string>().optional('auto'),
    height: prop<string>().optional('auto'),
    fontSize: prop<string>().optional('20px'),
    fontWeight: prop<string>().optional('500'),
    color: prop<string>().optional('#1f1f1f'),
    background: prop<string>().optional('#ddf28a'),
    borderRadius: prop<string>().optional('32px'),
    padding: prop<string>().optional('16px 32px'),
    gap: prop<string>().optional('18px'),
    icon: prop<string>().optional(),
    justifyContent: prop<string>().optional('space-between'),
    iconWidth: prop<string>().optional('32px'),
    iconHeight: prop<string>().optional('32px'),
    type: prop<'button' | 'submit' | 'reset'>().optional('button'),
    onClick: prop<() => void>().optional(),
  },

  setup(props) {
    const handleClick = () => {
      props.onClick?.()
    }

    return () => (
      <button
        class={styles.masterButton}
        style={{
          width: props.width,
          height: props.height,
          fontSize: props.fontSize,
          fontWeight: props.fontWeight,
          color: props.color,
          background: props.background,
          borderRadius: props.borderRadius,
          padding: props.padding,
          gap: props.gap,
          justifyContent: props.justifyContent,
        }}
        type={props.type}
        onClick={handleClick}
      >
        <span class={styles.buttonText}>{props.text}</span>

        {props.icon && (
          <span class={styles.icon}>
            <img
              src={props.icon}
              alt="icon"
              style={{ width: props.iconWidth, height: props.iconHeight }}
            />
          </span>
        )}
      </button>
    )
  },
})
