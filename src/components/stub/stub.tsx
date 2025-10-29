import { defineComponent } from 'vue'
import styles from './stub.module.css'

export default defineComponent({
  name: 'Stub',
  setup() {
    return () => (
      <div class={styles.stub}>
        <div class={styles.header}>
          <img src="/icons/icon-earth.svg" alt="earth" class={styles.icon} />
          <p class={styles.title}>ООО «Терралинити»</p>
        </div>
        <div class={styles.content}>
          <div class={styles.textContainer}>
            <div class={styles.text}>
              <p class={styles.textTitle}>
                КОМПЛЕКСНЫЕ РЕШЕНИЯ <br />
                ДЛЯ СЕЛЬСКОГО ХОЗЯЙСТВА
              </p>
              <p class={styles.textDescription}>
                Приносим свои извинения, сайт компании «Терралинити» находится в разработке.
              </p>
            </div>
            <div class={styles.contact}>
              <div class={styles.contactTitle}>
                <p class={styles.contactTitleText}>По всем вопросам свяжитесь с нами</p>
              </div>
              <div class={styles.contactItems}>
                <div class={styles.contactItemContainer}>
                  <div class={styles.contactItem}>
                    <img src="/icons/icon-phone.svg" alt="phone" class={styles.contactIcon} />
                    <a href="tel:+74957967222" class={styles.contactText}>
                      +7 (495) 796-72-22
                    </a>
                  </div>
                  <div class={styles.contactItem}>
                    <img src="/icons/icon-email.svg" alt="email" class={styles.contactIcon} />
                    <a href="mailto:terraliniti@mail.ru" class={styles.contactText}>
                      terraliniti@mail.ru
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
})
