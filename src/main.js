import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import FontAwesomePlugin from './plugins/FontAwesome'
import './index.pcss'

import AppButton from './components/AppButton.vue'
import AppCountInput from './components/AppCountInput.vue'
import AppModalOverlay from './components/AppModalOverlay.vue'

const app = createApp(App)

app
.use(createPinia())
.use(router)
.use(FontAwesomePlugin)
.component('AppButton', AppButton)
.component('AppCountInput', AppCountInput)
.component('appModalOverlay', AppModalOverlay)
.mount('#app')
