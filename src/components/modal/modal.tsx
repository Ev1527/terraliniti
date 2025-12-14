import { defineComponent, ref, computed } from 'vue'
import { prop } from '../../../types/prop-types'
import styles from './modal.module.css'
import MasterButton from '../masterButton/masterButton'
import SuccessMessage from '../feedbackSection/successMessage/successMessage'
import {
  sanitizeInput,
  processPhoneInput,
  formatPhone,
  handlePhoneKeyPress,
} from '../../app/validation.ts'

interface FormData {
  name: string
  phone: string
  comment: string
}

const modalFormProps = {
  onSubmit: prop<(data: FormData) => void>().optional(),
  onClose: prop<() => void>().optional(),
  showCloseButton: prop<boolean>().optional(true),
  show: prop<boolean>().optional(false),
}

export default defineComponent({
  name: 'ModalForm',
  props: modalFormProps,

  setup(props) {
    const formData = ref<FormData>({
      name: '',
      phone: '',
      comment: '',
    })

    const isSubmitted = ref(false)
    const isLoading = ref(false)

    const handlePhoneInput = (e: Event) => {
      const target = e.target as HTMLInputElement
      const value = target.value
      const cleanPhone = processPhoneInput(value)
      formData.value.phone = cleanPhone
    }

    const handleCommentInput = (e: Event) => {
      const target = e.target as HTMLTextAreaElement
      let value = target.value
      value = sanitizeInput(value)
      formData.value.comment = value
    }

    const handleNameInput = (e: Event) => {
      const target = e.target as HTMLInputElement
      let value = target.value

      value = value.replace(/[^а-яА-ЯёЁ\s\-]/g, '')

      value = sanitizeInput(value)
      formData.value.name = value
      target.value = value
    }

    const formattedPhone = computed(() => {
      return formatPhone(formData.value.phone)
    })

    const handleSubmit = async () => {
      if (formData.value.phone.length !== 10) {
        return
      }

      isLoading.value = true

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        if (props.onSubmit) {
          props.onSubmit(formData.value)
        }

        console.log('Form submitted:', formData.value)
        isSubmitted.value = true
      } catch (error) {
        console.error('Error submitting form:', error)
      } finally {
        isLoading.value = false
      }
    }

    const handleCloseModal = () => {
      isSubmitted.value = false
      formData.value = {
        name: '',
        phone: '',
        comment: '',
      }

      if (props.onClose) {
        props.onClose()
      }
    }

    const handleOverlayClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains(styles.modalOverlay!)) {
        if (!isSubmitted.value) {
          handleCloseModal()
        }
      }
    }

    return () => {
      if (!props.show) return null

      return (
        <div class={styles.modalOverlay} onClick={handleOverlayClick}>
          <div class={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {isSubmitted.value ? (
              <div class={styles.successContainer}>
                <SuccessMessage
                  onButtonClick={handleCloseModal}
                  show={isSubmitted.value}
                  buttonText="Готово"
                />
              </div>
            ) : (
              <div class={styles.modalWrapper}>
                <div class={styles.modalHeader}>
                  <h2 class={styles.modalTitle}>Оставьте заявку на консультацию</h2>
                  <p class={styles.modalDescription}>
                    Мы свяжемся с вами по телефону или в мессенджере. Обращаем внимание, что
                    специалисты работают с 8:00 до 19:00.
                  </p>
                </div>

                <div class={styles.modalFields}>
                  <div class={styles.modalField}>
                    <label class={styles.modalLabel}>Ваше имя</label>
                    <input
                      type="text"
                      class={styles.modalInput}
                      placeholder="Введите ваше имя"
                      value={formData.value.name}
                      onInput={handleNameInput}
                      maxlength="50"
                    />
                  </div>

                  <div class={styles.modalField}>
                    <label class={styles.modalLabel}>Номер телефона</label>
                    <div class={styles.phoneInputWrapper}>
                      <span class={styles.phonePrefix}>+7</span>
                      <input
                        type="tel"
                        class={styles.phoneInput}
                        placeholder="(000) 000-00-00"
                        value={formattedPhone.value}
                        onInput={handlePhoneInput}
                        onKeypress={handlePhoneKeyPress}
                        maxlength="15"
                        inputmode="numeric"
                      />
                    </div>
                  </div>

                  <div class={styles.modalField}>
                    <label class={styles.modalLabel}>Комментарий</label>
                    <textarea
                      class={styles.modalTextarea}
                      placeholder="В своём стремлении улучшить пользовательский опыт мы упускаем, что явные признаки победы могут быть..."
                      rows={3}
                      value={formData.value.comment}
                      onInput={handleCommentInput}
                      maxlength="210"
                    />
                  </div>

                  <div class={styles.modalSubmit}>
                    <MasterButton
                      text={isLoading.value ? 'Отправка...' : 'Отправить'}
                      width="520px"
                      height="66px"
                      iconHeight="46px"
                      iconWidth="46px"
                      onClick={handleSubmit}
                      icon="/icons/icon-arrowUp.svg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    }
  },
})
