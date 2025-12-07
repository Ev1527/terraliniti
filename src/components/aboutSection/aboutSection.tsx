import { defineComponent } from 'vue'
import styles from './aboutSection.module.css'
import WidgetStats from './widgetStats/widgetStats'
import { TABS, WIDGETS } from './about.constant'
import WidgetInfo from './widgetInfo/widgetInfo'

export default defineComponent({
  name: 'AboutSection',
  components: {
    WidgetStats,
  },
  setup() {
    return () => (
      <div class={styles.aboutSection}>
        <div class={styles.container}>
          <div class={styles.statsContainer}>
            <div class={styles.statsGrid}>
              {WIDGETS.map((widget, id) => (
                <WidgetStats key={id} value={widget.value} label={widget.label} />
              ))}
            </div>
          </div>
          <div class={styles.infoContainer}>
            <WidgetInfo title="Главное о нас" tabs={TABS} />
          </div>
        </div>
      </div>
    )
  },
})
