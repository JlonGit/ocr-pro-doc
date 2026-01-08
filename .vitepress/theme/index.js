// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import ServiceCard from './components/ServiceCard.vue'
import ServiceGrid from './components/ServiceGrid.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义组件
    app.component('ServiceCard', ServiceCard)
    app.component('ServiceGrid', ServiceGrid)
  }
}
