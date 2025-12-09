import { defineComponent } from 'vue'
import styles from './footer.module.css'

export default defineComponent({
  name: 'Footer',
  setup() {
    return () => (
      <footer class={styles.footer}>
        <div class={styles.wrapperRight}>
          <div class={styles.copyright}>
            <img src="/icons/icon-copyright.svg" alt="Copyright" class={styles.iconCopyright} />
            <span class={styles.company}>2025, ООО «Терралинити»</span>
          </div>
          <div class={styles.rightContent}>
            <div>
              <img src="/icons/icon-PhoneFooter.svg" alt="Phone" class={styles.iconPhone} />
              <span class={styles.contact}>+7 (495) 796-72-22</span>
            </div>
            <div>
              <img src="/icons/icon-mail.svg" alt="Email" class={styles.iconMail} />
              <span class={styles.contact}>terraliniti@mail.ru</span>
            </div>
          </div>
        </div>
        <div class={styles.leftContent}>
          <div class={styles.info}>
            <span>Политика конфиденциальности</span>
            <span>Согласие на обработку персональных данных</span>
          </div>
          <div class={styles.developerInfo}>
            <span>
              Все права защищены. Сайт разработан командой программирования и дизайна ЯстребовTeam
              специально для ООО «Терралинити».
            </span>
          </div>
        </div>
      </footer>
    )
  },
})
