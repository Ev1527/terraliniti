import { defineComponent } from 'vue'
import styles from './productSection.module.css'
import WidgetProduct from '../aboutSection/widgetProduct/widgetProduct'

export default defineComponent({
  name: 'ProductsSection',
  setup() {
    const products = [
      {
        value:
          'В своём стремлении улучшить пользовательский опыт мы упускаем, что явные признаки победы могут быть',
        label: 'Торфяные субстраты',
        img: '../../../public/product/product.png',
        bgColor: '#3e5133',
      },
      {
        value:
          'В своём стремлении улучшить пользовательский опыт мы упускаем, что явные признаки победы могут быть',
        label: 'Минеральные удобрения',
        img: '../../../public/product/product3.png',
        bgColor: '#C2CC9A',
      },
      {
        value:
          'В своём стремлении улучшить пользовательский опыт мы упускаем, что явные признаки победы могут быть',
        label: 'Средства защиты растений',
        img: '../../../public/product/product2.png',
        bgColor: '#3e5133',
      },
    ]

    return () => (
      <div class={styles.productsSection} id="products">
        <div class={styles.container}>
          <h1 class={styles.productTitle}>Наши продукты</h1>
          <div class={styles.productGrid}>
            {products.map((product, index) => (
              <WidgetProduct
                key={index}
                value={product.value}
                label={product.label}
                img={product.img}
                bgColor={product.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    )
  },
})