import { defineComponent, ref } from 'vue'
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
    const videoSrc = '/video/test.mp4'

    const startVideo = () => {
      if (!videoRef.value) return

      videoRef.value.src = videoSrc
      videoRef.value.load()
      videoRef.value.play().then(() => {
        showPoster.value = false
        videoRef.value!.controls = true
      })
    }

    const handleVideoEnded = () => {
      showPoster.value = true
      if (videoRef.value) {
        videoRef.value.controls = false
        videoRef.value.currentTime = 0
      }
    }

    const handleContactClick = () => modal.open()
    const handleFormSubmit = (data: any) => console.log('Форма отправлена из VideoSection:', data)

    return () => (
      <div class={styles.videoSection}>
        <div class={styles.content}>
          <h1 class={styles.title}>Больше о Терралинити</h1>
          <MasterButton
            text="Связаться с компанией"
            width="381px"
            height="66px"
            fontSize="24px"
            iconWidth="46px"
            iconHeight="46px"
            fontWeight='600'
            gap='16px'
            padding='10px 10px 10px 32px'
            icon="/icons/icon-rightArrow.svg"
            onClick={handleContactClick}
          />
        </div>

        <div class={styles.video}>
          <div class={styles.videoContainer}>
            <video
              ref={videoRef}
              class={styles.videoPlayer}
              playsinline
              webkit-playsinline
              muted={false}
              preload="none"
              onEnded={handleVideoEnded}
            >
              Ваш браузер не поддерживает видео.
            </video>

            {showPoster.value && (
              <>
                <img
                  src="/video/poster.png"
                  alt="Терралинити видео"
                  class={styles.videoPoster}
                  loading="lazy"
                />
                <div class={styles.playButtonOverlay} onClick={startVideo}>
                  <img
                    src="/icons/icon-Play.svg"
                    alt="Воспроизвести видео"
                    class={styles.playButtonIcon}
                    loading="lazy"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <ModalForm show={modal.isOpen.value} onSubmit={handleFormSubmit} onClose={modal.close} />
      </div>
    )
  },
})
