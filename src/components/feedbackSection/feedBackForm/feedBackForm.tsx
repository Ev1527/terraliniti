import { defineComponent, ref, computed } from 'vue'
import { prop } from '../../../../types/prop-types'
import styles from './feedBackForm.module.css'
import MasterButton from '../../masterButton/masterButton'
import SuccessMessage from '../successMessage/successMessage'
import {
  sanitizeInput,
  processPhoneInput,
  formatPhone,
  handlePhoneKeyPress,
} from '../../../app/validation.ts'

interface FormData {
  name: string
  phone: string
  comment: string
}

const feedbackFormProps = {
  onSubmit: prop<(data: FormData) => void>().optional(),
  isModal: prop<boolean>().optional(false),
  onClose: prop<() => void>().optional(),
}

export default defineComponent({
  name: 'FeedBackForm',
  props: feedbackFormProps,

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
        alert('Пожалуйста, введите корректный номер телефона (10 цифр)')
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

        if (props.isModal && props.onClose) {
          setTimeout(() => {
            props.onClose!()
          }, 3000)
        }
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

    return () => (
      <div class={styles.feedbackForm}>
        {isSubmitted.value && (
          <SuccessMessage onButtonClick={handleCloseModal} show={isSubmitted.value} />
        )}

        <div class={styles.formWrapper}>
          {props.isModal && (
            <button class={styles.closeButton} onClick={handleCloseModal}>
              ×
            </button>
          )}

          <div class={styles.formFields}>
            <div class={styles.formField}>
              <label class={styles.formLabel}>Ваше имя</label>
              <input
                type="text"
                class={styles.formInput}
                placeholder="Введите ваше имя"
                value={formData.value.name}
                onInput={handleNameInput}
                maxlength="50"
              />
            </div>

            <div class={styles.formField}>
              <label class={styles.formLabel}>Номер телефона</label>
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

            <div class={styles.formField}>
              <label class={styles.formLabel}>Комментарий</label>
              <textarea
                class={styles.formTextarea}
                placeholder="В своём стремлении улучшить пользовательский опыт мы упускаем, что явные признаки победы могут быть..."
                rows={3}
                value={formData.value.comment}
                onInput={handleCommentInput}
                maxlength="210"
              />
            </div>

            <div class={styles.formSubmit}>
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
      </div>
    )
  },
})
