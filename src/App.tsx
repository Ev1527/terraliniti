import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <a href="https://vuejs.org/" target="_blank">
            <img src="/vue.svg" class="logo vue" alt="Vue logo" />
          </a>
        </div>
        <HelloWorld msg="Vite + Vue" />
      </>
    )
  },
})
