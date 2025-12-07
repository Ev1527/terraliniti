import { defineComponent } from 'vue'
import styles from './feedbackSection.module.css'
import FeedbackForm from './feedBackForm/feedBackForm'

export default defineComponent({
  name: 'FeedBackSection',
  setup() {
    const handleFormSubmit = (data: any) => {
      console.log(data)
    }

    return () => (
      <div class={styles.feedBackSection}>
        <div class={styles.content}>
          <div class={styles.leftContent}>
            <div class={styles.feedbackInfo}>
              <div class={styles.wrapperTitle}>
                <h1 class={styles.title}>Оставьте заявку на консультацию</h1>
              </div>
              <p class={styles.description}>
                Наш специалист свяжется с вами по телефону или в мессенджере. Обращаем внимание, что
                специалисты работают с 8:00 до 19:00.
              </p>

              <div class={styles.contactBlock}>
                <div class={styles.phoneContainer}>
                  <div class={styles.phoneIcon}>
                    <img src={'../../../public/icons/icon-PhoneFeedBack.svg'} alt="icon" />
                  </div>
                  <p class={styles.phoneNumber}>+7 (495) 796-72-22</p>
                </div>
              </div>
            </div>
          </div>
          <div class={styles.rightContent}>
            <FeedbackForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    )
  },
})
