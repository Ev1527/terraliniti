import { defineComponent, ref } from 'vue'
import { prop } from '../../../../types/prop-types'
import styles from './widgetInfo.module.css'

export interface TabContent {
  id: string
  title: string
  content: string
  images?: string[]
}

export default defineComponent({
  name: 'WidgetInfo',
  props: {
    title: prop<string>().required(),
    tabs: prop<TabContent[]>().required()
  },
  setup(props) {
    const activeTab = ref(props.tabs[1]?.id || '')

    const renderTabContent = () => {
      const activeTabData = props.tabs.find(tab => tab.id === activeTab.value)
      if (!activeTabData) return null

      if (activeTab.value === 'team' && activeTabData.images) {
        return (
          <div class={styles.teamContent}>
            <div class={styles.teamImages}>
              {activeTabData.images.map((image, index) => (
                <div key={index} class={styles.teamImageContainer}>
                  <img 
                    src={image} 
                    class={styles.teamImage}
                  />
                </div>
              ))}
            </div>
            <div class={styles.teamText}>
              {activeTabData.content}
            </div>
          </div>
        )
      }

      return (
        <div class={styles.textContent}>
          {activeTabData.content}
        </div>
      )
    }

    return () => (
      <div class={styles.widgetInfo}>
        <div class={styles.leftColumn}>
          <h2 class={styles.title}>{props.title}</h2>
  
          <div class={styles.tabsRow}>
            {props.tabs.map(tab => (
              <button
                key={tab.id}
                class={
                  activeTab.value === tab.id 
                    ? `${styles.tab} ${styles.active}`
                    : styles.tab
                }
                onClick={() => activeTab.value = tab.id}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        <div class={styles.rightColumn}>
          <div class={styles.tabContent}>
            {renderTabContent()}
          </div>
        </div>
      </div>
    )
  },
})