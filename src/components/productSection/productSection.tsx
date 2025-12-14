import { defineComponent } from 'vue'
import styles from './productSection.module.css'
import WidgetProduct from './widgetProduct/widgetProduct'
import { PRODUCTS } from './product.constant'

export default defineComponent({
  name: 'ProductsSection',
  setup() {
    return () => (
      <div class={styles.productsSection} id="products">
        <div class={styles.container}>
          <h1 class={styles.productTitle}>Наши продукты</h1>
          <div class={styles.productGrid}>
            {PRODUCTS.map((product, id) => (
              <WidgetProduct
                key={id}
                value={product.value}
                label={product.label}
                img={product.img}
              />
            ))}
          </div>
        </div>
      </div>
    )
  },
})
