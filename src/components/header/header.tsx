import { defineComponent } from 'vue'
import { prop } from '../../../types/prop-types'
import styles from './header.module.css'
import MasterButton from '../masterButton/masterButton'
import ModalForm from '../modal/modal'
import { useModal } from '../modal/useModal'
import { MENU_ITEMS } from './header.constant'

export default defineComponent({
  name: 'Header',
  props: {
    onNavigate: prop<(id: string) => void>().required(),
  },

  setup(props) {
    const modal = useModal()

    const handleContactClick = () => {
      modal.open()
    }

    const handleFormSubmit = (data: any) => {
      console.log('Форма отправлена из Header:', data)
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
            {MENU_ITEMS.map((item, id) => (
              <button key={id} class={styles.navLink} onClick={() => props.onNavigate(item.page)}>
                {item.label}
              </button>
            ))}
            <MasterButton
              text="Связаться"
              width="192px"
              height="46px"
              font="20px"
              gap="8px"
              icon="/icons/icon-arrow.svg"
              onClick={handleContactClick}
            />
          </div>
        </div>

        <ModalForm show={modal.isOpen.value} onSubmit={handleFormSubmit} onClose={modal.close} />
      </header>
    )
  },
})
