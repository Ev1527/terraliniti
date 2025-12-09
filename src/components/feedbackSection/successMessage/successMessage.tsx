import { defineComponent } from 'vue'
import { prop } from '../../../../types/prop-types'
import styles from './successMessage.module.css'
import MasterButton from '../../masterButton/masterButton'

export default defineComponent({
  name: 'SuccessMessage',
  props: {
    title: prop<string>().optional('Спасибо за заявку!'),
    description: prop<string>().optional(
      'Специалисты Терралинити свяжутся с вами в ближайшее время для уточнения деталей.',
    ),
    buttonText: prop<string>().optional('Готово'),
    onButtonClick: prop<() => void>().optional(),
    show: prop<boolean>().optional(true),
  },

  setup(props) {
    return () => {
      if (!props.show) return null

      return (
        <div class={styles.modalOverlay}>
          <div class={styles.successContainer}>
            <div class={styles.textBlock}>
              <h1 class={styles.title}>{props.title}</h1>
              <p class={styles.description}>{props.description}</p>
            </div>
            <div class={styles.buttonBlock}>
              {props.onButtonClick && (
                <MasterButton
                  text={props.buttonText}
                  width="531px"
                  height="66px"
                  fontSize='24px'
                  fontWeight='600'
                  justifyContent='center'
                  onClick={props.onButtonClick}
                />
              )}
            </div>
          </div>
        </div>
      )
    }
  },
})
