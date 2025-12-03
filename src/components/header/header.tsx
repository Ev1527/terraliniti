import { defineComponent } from 'vue'
import { prop } from '../../../types/prop-types'
import styles from './header.module.css'
import MasterButton from '../masterButton/masterButton'

export default defineComponent({
  name: 'Header',
  props: {
    onNavigate: prop<(id: string) => void>().required(),
  },

  setup(props) {
    const menuItems = [
      { label: 'О нас', id: 'about' },
      { label: 'Продукты', id: 'products' },
      { label: 'Услуги', id: 'services' },
      { label: 'Преимущества', id: 'advantages' },
    ]

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
            <MasterButton
              text="Связаться"
              width="176px"
              icon={'../../../public/icons/icon-arrow.svg'}
              onClick={() => props.onNavigate('video')}
            />
          </div>
        </div>
      </header>
    )
  },
})