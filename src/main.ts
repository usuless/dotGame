import './style.css'
import App from './App.vue'
import { createApp } from 'vue';
import VueCountdown from '@chenfengyuan/vue-countdown';

const app = createApp({});

app.component(VueCountdown.name, VueCountdown);
createApp(App).mount('#app')
