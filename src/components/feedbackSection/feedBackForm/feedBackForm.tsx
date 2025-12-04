import { defineComponent, ref } from 'vue'
import { prop } from '../../../../types/prop-types'
import styles from './feedbackForm.module.css'
import MasterButton from '../../masterButton/masterButton'

interface FormData {
  name: string
  phone: string
  comment: string
}

export default defineComponent({
  name: 'FeedBackForm',
  props: {
    onSubmit: prop<(data: FormData) => void>().optional(),
  },

  setup(props) {
    const formData = ref<FormData>({
      name: '',
      phone: '',
      comment: '',
    })

    const handleSubmit = () => {
      if (props.onSubmit) {
        props.onSubmit(formData.value)
      }
      console.log('Form submitted:', formData.value)

      formData.value = {
        name: '',
        phone: '',
        comment: '',
      }
    }

    return () => (
      <div class={styles.feedbackForm}>
        <div class={styles.formWrapper}>
          <div class={styles.formFields}>
            <div class={styles.formField}>
              <label class={styles.formLabel}>Ваше Имя</label>
              <input
                type="text"
                class={styles.formInput}
                placeholder="Введите ваше имя"
                v-model={formData.value.name}
              />
            </div>

            <div class={styles.formField}>
              <label class={styles.formLabel}>Номер телефона</label>
              <input
                type="tel"
                class={styles.formInput}
                placeholder="+7 (___) ___-__-__"
                v-model={formData.value.phone}
              />
            </div>

            <div class={styles.formField}>
              <label class={styles.formLabel}>Комментарий</label>
              <textarea
                class={styles.formTextarea}
                placeholder="Опишите ваш вопрос или комментарий"
                rows={4}
                v-model={formData.value.comment}
              />
            </div>

            <div class={styles.formSubmit}>
              <MasterButton
                text="Отправить заявку"
                width="520px"
                onClick={handleSubmit}
                icon="../../../public/icons/icon-arrowUp.svg"
              />
            </div>
          </div>
        </div>
      </div>
    )
  },
})
