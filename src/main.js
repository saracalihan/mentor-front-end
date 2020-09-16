import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Datatable from 'vue2-datatable-component'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import './styles/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './vee-validate'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios'
import Notifications from 'vue-notification'

var myMixin = {
  created () {
    if (localStorage.getItem('X-AccessToken') !== null) {
      console.log('Token not Null')
      axios
        .get(
          '/authentications/me/',
          {
            headers: {
              'X-AccessToken': localStorage.getItem('X-AccessToken')
            }
          }
        )
        .then(response => {
          if (response.status === 200) {
            console.log('Token is Valid')
            this.$router.push('/home')
            this.$notify({
              group: 'foo',
              type: 'success',
              title: 'Successfully Logged In'
            })
          }
        }).catch(err => {
          if (err.response.status === 401) {
            this.$router.push('login')
            console.log('Token Validation Failed')
          }
        })
    } else {
      console.log('Token Null')
      this.$router.push('login')
    }
  }
}

Vue.config.productionTip = false

Vue.use(Notifications)
Vue.use(Datatable) // done!
new Vue({
  router,
  vuetify,
  mixins: [myMixin],
  render: h => h(App)
}).$mount('#app')
