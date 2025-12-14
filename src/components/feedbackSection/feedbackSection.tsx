import { defineComponent } from 'vue'
import styles from './feedbackSection.module.css'
import FeedbackForm from './feedBackForm/feedBackForm'

export default defineComponent({
  name: 'FeedBackSection',
  setup() {
    const handleFormSubmit = (data: any) => {
      console.log('Form submitted:', data)
    }

    return () => (
      <section class={styles.feedBackSection}>
        <div class={styles.content}>
          <div class={styles.leftContent}>
            <div class={styles.leftTextBox}>
              <h1 class={styles.title}>Оставьте заявку на консультацию</h1>
              <p class={styles.description}>
                Наш специалист свяжется с вами по телефону или в мессенджере. Обращаем внимание, что
                специалисты работают с 8:00 до 19:00.
              </p>
            </div>

            <div class={styles.contactBlock}>
              <div class={styles.phoneContainer}>
                <div class={styles.phoneIcon}>
                  <img src="/icons/icon-PhoneFeedBack.svg" alt="Телефон" />
                </div>
                <a href="tel:+74957967222" class={styles.phoneNumber}>
                  +7 (495) 796-72-22
                </a>
              </div>
            </div>
          </div>

          <div class={styles.rightContent}>
            <FeedbackForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </section>
    )
  },
})
