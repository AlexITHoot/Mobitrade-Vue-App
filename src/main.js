import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App);

library.add(fab,fas);

components.forEach(component => {
  app.component(component.name,component);
});

console.log(components);

app.component('font-awesome-icon',FontAwesomeIcon).use(store).use(router).mount('#app');
