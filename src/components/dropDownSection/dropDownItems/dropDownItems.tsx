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
      <div
        class={[styles.dropdown, props.disabled && styles.disabled].join(' ')}
        style={{
          backgroundColor: isOpen.value ? '#3E5133' : props.bgColor || '#222722',
          border: isOpen.value ? '#3E5133' : props.bgColor || '#222722',
        }}
      >
        <div
          class={styles.header}
          onClick={toggleDropdown}
          style={{
            backgroundColor: isOpen.value ? '#3E5133' : props.bgColor || '#222722',
          }}
        >
          <span
            class={styles.title}
            style={{
              color: isOpen.value ? '#FBFBFB' : '#E0E0E0',
              transition: 'color 0.3s ease',
            }}
          >
            {props.title}
          </span>
          <span class={[styles.arrow, isOpen.value && styles.arrowOpen].join(' ')}>
            <img
              src="/icons/icon-ExpandArrow.svg"
              alt="Expand"
              style={{
                width: '32px',
                height: '32px',
                transition: 'transform 0.3s ease',
                transform: isOpen.value ? 'rotate(180deg)' : 'rotate(180deg)',
              }}
            />
          </span>
        </div>

        <div
          class={[styles.content, isOpen.value && styles.contentOpen].join(' ')}
          style={{
            backgroundColor: isOpen.value ? '#3E5133' : props.bgColor || '#222722',
          }}
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
