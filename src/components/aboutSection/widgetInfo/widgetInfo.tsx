import { defineComponent, ref } from 'vue'
import { prop } from '../../../../types/prop-types'
import styles from './widgetInfo.module.css'

export interface TextPart {
  text: string
  weight?: '500' | '800' | '600'
}

export interface TabContent {
  id: string
  title: string
  description: string
  content: TextPart[]
  images?: string[]
}

export default defineComponent({
  name: 'WidgetInfo',
  props: {
    title: prop<string>().required(),
    tabs: prop<TabContent[]>().required(),
  },
  setup(props) {
    const activeTab = ref(props.tabs[1]?.id || '')

    const renderTextContent = (content: TextPart[]) => (
      <p class={styles.textContent}>
        {content.map((part, index) => {
          let weightClass = styles.medium

          if (part.weight === '800') {
            weightClass = styles.extraBold
          } else if (part.weight === '600') {
            weightClass = styles.semiBold
          }

          return (
            <span key={index} class={weightClass}>
              {part.text}
            </span>
          )
        })}
      </p>
    )

    const renderTabContent = () => {
      const activeTabData = props.tabs.find((tab) => tab.id === activeTab.value)
      if (!activeTabData) return null

      if (activeTabData.description === 'team' && activeTabData.images) {
        const [img1, img2, img3, img4] = activeTabData.images

        return (
          <div class={styles.teamContent}>
            <div class={styles.teamImages}>
              <div class={styles.teamColumn}>
                <div class={`${styles.teamImageContainer} ${styles.small}`}>
                  <img src={img1} class={styles.teamImage} alt="Команда 1" />
                </div>
                <div class={`${styles.teamImageContainer} ${styles.large}`}>
                  <img src={img3} class={styles.teamImage} alt="Команда 3" />
                </div>
              </div>
              <div class={styles.teamColumn}>
                <div class={`${styles.teamImageContainer} ${styles.large}`}>
                  <img src={img2} class={styles.teamImage} alt="Команда 2" />
                </div>
                <div class={`${styles.teamImageContainer} ${styles.small}`}>
                  <img src={img4} class={styles.teamImage} alt="Команда 4" />
                </div>
              </div>
            </div>

            {/* 🔥 ВАЖНО */}
            {renderTextContent(activeTabData.content)}
          </div>
        )
      }

      /* 🔥 и здесь */
      return renderTextContent(activeTabData.content)
    }

    return () => (
      <div class={styles.widgetInfo}>
        <div class={styles.leftColumn}>
          <h2 class={styles.title}>{props.title}</h2>
          <div class={styles.tabsRow}>
            {props.tabs.map((tab) => (
              <button
                key={tab.id}
                class={activeTab.value === tab.id ? `${styles.tab} ${styles.active}` : styles.tab}
                onClick={() => (activeTab.value = tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
        <div class={styles.rightColumn}>
          <div class={styles.tabContent}>{renderTabContent()}</div>
        </div>
      </div>
    )
  },
})
