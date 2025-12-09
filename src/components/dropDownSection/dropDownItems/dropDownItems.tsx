// DropDownItems.vue
import { defineComponent, ref, watch, nextTick } from 'vue'
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
    const isOpen = ref(props.isOpen ?? false)
    const contentRef = ref<HTMLDivElement>()
    const height = ref('0px')

    const toggleDropdown = async () => {
      if (props.disabled) return

      isOpen.value = !isOpen.value

      await nextTick()

      if (isOpen.value && contentRef.value) {
        height.value = contentRef.value.scrollHeight + 'px'
      } else {
        height.value = '0px'
      }

      emit('toggle', isOpen.value)
    }

    watch(
      () => props.isOpen,
      async (v) => {
        if (v === undefined) return
        isOpen.value = v

        await nextTick()

        if (v && contentRef.value) {
          height.value = contentRef.value.scrollHeight + 'px'
        } else {
          height.value = '0px'
        }
      },
    )

    return () => (
      <div
        class={[
          styles.dropdown,
          props.disabled && styles.disabled,
          isOpen.value && styles.openState,
        ].join(' ')}
        style={{
          backgroundColor: isOpen.value ? '#3E5133' : (props.bgColor ?? '#222722'),
        }}
      >
        <div class={styles.header} onClick={toggleDropdown}>
          <h1 class={styles.title}>{props.title}</h1>
          <div class={[styles.arrow, isOpen.value && styles.arrowOpen].join(' ')}>
            <img src="/icons/icon-ExpandArrow.svg" width={32} height={32} />
          </div>
        </div>

        <div class={styles.content} ref={contentRef} style={{ maxHeight: height.value }}>
          {slots.default && <div class={styles.contentInner}>{slots.default()}</div>}
        </div>
      </div>
    )
  },
})
