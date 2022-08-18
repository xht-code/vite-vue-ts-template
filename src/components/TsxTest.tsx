import { defineComponent } from 'vue'

export default defineComponent({
  render(props: Record<string, any>) {
    return <div {...props}>TSX Test</div>
  }
})
