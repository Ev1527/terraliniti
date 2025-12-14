import { defineComponent } from 'vue'
import styles from './dropDownSection.module.css'
import DropDownItems from './dropDownItems/dropDownItems'
import { DROP_DOWN_ITEMS } from './drop.constant'

export default defineComponent({
  name: 'DropDownSection',
  setup() {
    return () => (
      <div class={styles.dropDownSection}>
        <div class={styles.container}>
          <div class={styles.content}>
            <h1 class={styles.title}>Дополнительные услуги</h1>
          </div>

          <div class={styles.dropdownsContainer}>
            {DROP_DOWN_ITEMS.map((item) => (
              <DropDownItems key={item.id} title={item.title} class={styles.customDropdown}>
                <div class={styles.dropdownContent}>
                  <p>{item.content}</p>
                </div>
              </DropDownItems>
            ))}
          </div>
        </div>
      </div>
    )
  },
})
