import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'amfe-flexible'

createApp(App).use(router).mount('#app')
