import { defineComponent } from 'vue'
import { prop } from '../../../../types/prop-types'
import styles from './successMessage.module.css'
import MasterButton from '../../masterButton/masterButton'

export default defineComponent({
  name: 'SuccessMessage',
  props: {
    title: prop<string>().optional(),
    description: prop<string>().optional(),
    buttonText: prop<string>().optional(),
    onButtonClick: prop<() => void>().optional(),
    show: prop<boolean>().optional(true),
  },

  setup(props) {
    return () => {
      if (!props.show) return null

      return (
        <div class={styles.modalOverlay}>
          <div class={styles.successModal}>
            <div class={styles.successMessage}>
              <h2 class={styles.successTitle}>Спасибо за заявку!</h2>

              <p class={styles.successDescription}>
                Специалисты Терралинити свяжутся с вами в ближайшее время для уточнения деталей.
              </p>

              {props.onButtonClick && (
                <div class={styles.successButton}>
                  <MasterButton
                    text="Готово"
                    width="531px"
                    height="66px"
                    onClick={props.onButtonClick}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }
  },
})
