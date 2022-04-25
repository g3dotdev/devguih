import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag"
import {
  BIconEnvelope,
  BIconGithub,
  BIconTwitter,
  BIconInstagram,
  BIconLinkedin,
  BIconTwitch
} from 'bootstrap-icons-vue'
import router from './router'

const app = createApp(App)

if (!import.meta.env.DEV) {
  app.use(VueGtag, {
    config: {
      id: 'G-B8WV9CVYZW'
    }
  }, router)
}

app.component('BIconEnvelope', BIconEnvelope)
app.component('BIconGithub', BIconGithub)
app.component('BIconTwitter', BIconTwitter)
app.component('BIconInstagram', BIconInstagram)
app.component('BIconLinkedin', BIconLinkedin)
app.component('BIconTwitch', BIconTwitch)

app.use(router);

app.mount('#app')