import { defineComponent, ref } from 'vue'
import { prop } from '../../../../types/prop-types'
import styles from './dropDownItems.module.css'

export default defineComponent({
  name: 'DropDownItems',
  props: {
    title: prop<string>().required(),
    isOpen: prop<boolean>().optional(),
    disabled: prop<boolean>().optional(),
    bgColor: prop<string>().optional(),
  },
  
  emits: ['toggle'],

  setup(props, { emit, slots }) {
    const isOpen = ref(props.isOpen)

    const toggleDropdown = () => {
      if (!props.disabled) {
        isOpen.value = !isOpen.value
        emit('toggle', isOpen.value)
      }
    }

    return () => (
      <div class={[styles.dropdown, props.disabled && styles.disabled].join(' ')}>
        <div 
          class={styles.header}
          onClick={toggleDropdown}
        >
          <span class={styles.title}>{props.title}</span>
          <span class={[
            styles.arrow,
            isOpen.value && styles.arrowOpen
          ].join(' ')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
        
        <div 
          class={[
            styles.content,
            isOpen.value && styles.contentOpen
          ].join(' ')}
        >
          {slots.default && (
            <div class={styles.contentInner}>
              {slots.default()}
            </div>
          )}
        </div>
      </div>
    )
  },
})