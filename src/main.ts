import { createApp } from 'vue'
import App from './App.vue'

// router
import router from '@/router/index'

// pinia
import { createPinia } from 'pinia'

//  global style
import './styles/index.scss'

// normalize.css
import 'normalize.css'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
