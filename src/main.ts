import { createApp } from 'vue'
import App from './App.vue'
import {
  BIconEnvelope,
  BIconGithub,
  BIconTwitter,
  BIconInstagram,
  BIconLinkedin,
  BIconTwitch
} from 'bootstrap-icons-vue';

const app = createApp(App)

app.component('BIconEnvelope', BIconEnvelope)
app.component('BIconGithub', BIconGithub)
app.component('BIconTwitter', BIconTwitter)
app.component('BIconInstagram', BIconInstagram)
app.component('BIconLinkedin', BIconLinkedin)
app.component('BIconTwitch', BIconTwitch)

app.mount('#app')