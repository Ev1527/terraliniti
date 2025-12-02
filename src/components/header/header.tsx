import { defineComponent } from 'vue'
import { prop } from '../../../types/prop-types'
import styles from './header.module.css'

export default defineComponent({
  name: 'Header',
  props: {
    onNavigate: prop<(id: string) => void>().required(),
  },

  setup(props) {
    const menuItems = [
      { label: 'О нас', id: 'about' },
      { label: 'Услуги', id: 'services' },
      { label: 'Преимущества', id: 'advantages' },
    ]

    const handleContactClick = () => {
      props.onNavigate('contact')
    }

    return () => (
      <header class={styles.header}>
        <div class={styles.container}>
          <div class={styles.leftSection}>
            <div
              class={styles.logoSection}
              onClick={() => props.onNavigate('home')}
              style="cursor: pointer;"
            >
              <img src="/icons/icon-earth.svg" alt="Терралинити" class={styles.logoIcon} />
              <div class={styles.logoText}>
                <h1 class={styles.logoTitle}>Терралинити</h1>
              </div>
            </div>

            <div class={styles.contactsSection}>
              <div class={styles.contactItem}>
                <a href="tel:+74957967222" class={styles.contactText}>
                  +7 (495) 796-72-22
                </a>
              </div>
              <div class={styles.contactItem}>
                <a href="mailto:terraliniti@mail.ru" class={styles.contactText}>
                  terraliniti@mail.ru
                </a>
              </div>
            </div>
          </div>

          <div class={styles.rightSection}>
            {menuItems.map((item, index) => (
              <button key={index} class={styles.navLink} onClick={() => props.onNavigate(item.id)}>
                {item.label}
              </button>
            ))}
            <button class={styles.contactButton} onClick={handleContactClick}>
              Связаться
              <img class={styles.arrow} src="/icons/icon-arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </header>
    )
  },
})
