import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: { type: String, required: true },
  },
  setup(props) {
    const count = ref(0)

    return () => (
      <>
        <h1>{props.msg}</h1>

        <div class="card">
          <button type="button" onClick={() => (count.value += 1)}>
            count is {count.value}
          </button>
          <p>
            Edit <code>components/HelloWorld.tsx</code> to test HMR
          </p>
        </div>

        <p>
          Check out{' '}
          <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">
            create-vue
          </a>
          , the official Vue + Vite starter
        </p>
        <p>
          Learn more about IDE Support for Vue in the{' '}
          <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">
            Vue Docs Scaling up Guide
          </a>
          .
        </p>
        <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
      </>
    )
  },
})
