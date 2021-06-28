import Vue from 'vue'
import Gravatar from 'vue-gravatar'
import { configure } from 'vee-validate'
import Notifications from 'vue-notification'
import Datatable from 'vue2-datatable-component'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/css/all.css'

import './vee-validate'
import App from './App.vue'
import './styles/main.scss'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import None from '@/views/Layouts/None'
import HomeNav from '@/views/Layouts/HomeNav'

Vue.component('none-layout', None)
Vue.component('v-gravatar', Gravatar)
Vue.component('home-nav-layout', HomeNav)

Vue.config.productionTip = false

Vue.use(Datatable)
Vue.use(Notifications)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
    dirty: ['is-dirty', 'is-dirty'] // multiple classes per flag!
    // ...
  }
})
