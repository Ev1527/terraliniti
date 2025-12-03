import { defineComponent } from 'vue'
import styles from './aboutSection.module.css'
import WidgetStats from './widgetStats/widgetStats'
import WidgetInfo, { type TabContent } from './widgetInfo/widgetInfo'

export default defineComponent({
  name: 'AboutSection',
  components: {
    WidgetStats,
    WidgetInfo,
  },
  setup() {
    const widgets = [
      { value: '5+', label: 'лет на рынке' },
      { value: '32+', label: 'региона-участника' },
      { value: '118+', label: 'довольных клиентов' },
      { value: '1318+', label: 'клиентов клиентов' },
    ]

    const tabs: TabContent[] = [
      {
        id: 'about',
        title: 'О компании',
        content:
          'Предлагаем высококачественные торфяные субстраты для профессионального сегмента и хобби-рынка. Субстраты для выращивания рассады цветочных, овощных и декоративных культур, для лесных питомников и саженцев.',
      },
      {
        id: 'team',
        title: 'Наша команда',
        content:
          'Высококлассные специалисты с опытом работы более 20 лет. В нашей команде больше 20 агрономов, техников и рабочих рабочих.',
        images: [
          '../../../public/team/3.png',
          '../../../public/team/4.png',
          '../../../public/team/2.png',
          '../../../public/team/1.png',
        ],
      },
      {
        id: 'regions',
        title: 'Присутствие в регионах',
        content:
          'Предлагаем высококачественные торфяные субстраты для профессионального сегмента и хобби-рынка. Субстраты для выращивания рассады цветочных, овощных и декоративных культур, для лесных питомников и саженцев.',
      },
    ]

    return () => (
      <div class={styles.aboutSection}>
        <div class={styles.container}>
          <div class={styles.statsContainer}>
            <div class={styles.statsGrid}>
              {widgets.map((widget, index) => (
                <WidgetStats key={index} value={widget.value} label={widget.label} />
              ))}
            </div>
          </div>
          <div class={styles.infoContainer}>
            <WidgetInfo title="Главное о нас" tabs={tabs} />
          </div>
        </div>
      </div>
    )
  },
})