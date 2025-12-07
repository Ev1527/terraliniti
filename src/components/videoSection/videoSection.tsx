import { defineComponent, ref, onMounted } from 'vue'
import styles from './videoSection.module.css'
import MasterButton from '../masterButton/masterButton'
import ModalForm from '../modal/modal'
import { useModal } from '../modal/useModal'

export default defineComponent({
  name: 'VideoSection',
  setup() {
    const videoRef = ref<HTMLVideoElement>()
    const showPoster = ref(true)

    const modal = useModal()

    onMounted(() => {
      const video = videoRef.value
      if (!video) return

      video.muted = false
      video.volume = 0.3
      video.loop = true
    })

    const startVideo = () => {
      if (!videoRef.value) return

      videoRef.value
        .play()
        .then(() => {
          showPoster.value = false
        })
        .catch((error) => {
          console.error('Ошибка запуска видео:', error)
          videoRef.value!.muted = true
          videoRef.value!.play().then(() => {
            showPoster.value = false
          })
        })
    }

    const toggleVideoPlayback = () => {
      if (!videoRef.value) return

      if (videoRef.value.paused) {
        videoRef.value.play()
      } else {
        videoRef.value.pause()
      }
    }

    const handleContactClick = () => {
      modal.open()
    }

    const handleFormSubmit = (data: any) => {
      console.log('Форма отправлена из VideoSection:', data)
    }

    return () => (
      <div class={styles.videoSection}>
        <div class={styles.content}>
          <h1 class={styles.title}>Больше о Терралинити</h1>
          <MasterButton
            text="Связаться с компанией"
            width="381px"
            height="66px"
            font='24px'
            iconWidth="46px"
            iconHeight="46px"
            icon="/icons/icon-rightArrow.svg"
            onClick={handleContactClick}
          />
        </div>

        <div class={styles.video}>
          <div class={styles.videoContainer}>
            <video
              ref={videoRef}
              class={styles.videoPlayer}
              src="/video/Joji.mp4"
              preload="metadata"
              playsinline
              webkit-playsinline
              loop
              onClick={toggleVideoPlayback}
            >
              <source src="/video/Joji.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>

            <img
              src="/video/poster.png"
              alt="Терралинити видео"
              class={`${styles.videoPoster} ${!showPoster.value ? styles.hidden : ''}`}
            />

            {showPoster.value && (
              <div class={styles.playButtonOverlay} onClick={startVideo}>
                <img
                  src="/icons/icon-Play.svg"
                  alt="Воспроизвести видео"
                  class={styles.playButtonIcon}
                />
              </div>
            )}
          </div>
        </div>
        <ModalForm show={modal.isOpen.value} onSubmit={handleFormSubmit} onClose={modal.close} />
      </div>
    )
  },
})
