import { defineComponent } from 'vue'
import { prop } from '../../../types/prop-types'
import styles from './homeSection.module.css'
import MasterButton from '../masterButton/masterButton'
import Header from '../header/header'
import ModalForm from '../modal/modal'
import { useModal } from '../modal/useModal'

export default defineComponent({
  name: 'HomeSection',
  props: {
    onLearnMore: prop<() => void>().optional(),
    showHeader: prop<boolean>().optional(true),
    onNavigate: prop<(id: string) => void>().required(),
  },
  setup(props) {
  
    const modal = useModal()

    const handleLearnMore = () => {
      modal.open()
      
      if (props.onLearnMore) {
        props.onLearnMore()
      }
    }

    const handleFormSubmit = (data: any) => {
      console.log('Форма отправлена из HomeSection:', data)
    }

    return () => (
      <div class={styles.homeSection}>
        {props.showHeader && <Header onNavigate={props.onNavigate} />}
        
        <div class={styles.content}>
          <div class={styles.titleContainer}>
            <h1 class={styles.title}>
              КОМПЛЕКСНЫЕ РЕШЕНИЯ
              <br />
              ДЛЯ СЕЛЬСКОГО ХОЗЯЙСТВА
            </h1>
          </div>

          <div class={styles.descriptionContainer}>
            <p class={styles.description}>
              В своём стремлении улучшить пользовательский опыт мы
              <br />
              упускаем, что явные признаки победы могут быть
            </p>
          </div>

          <div class={styles.buttonContainer}>
            <MasterButton
              text="Узнать больше"
              width="284px"
              height="66px"
              font="24px"
              icon="/icons/icon-rightArrow.svg"
              iconWidth="46px"
              iconHeight="46px"
              onClick={handleLearnMore}
            />
          </div>
        </div>
        <ModalForm
          show={modal.isOpen.value}
          onSubmit={handleFormSubmit}
          onClose={modal.close}
        />
      </div>
    )
  },
})