import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/css/tailwind.css'
import router from './router'
import store from './store'

// 導入fontawesome library, icon庫, 並註冊全域組件
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// 註冊客製化的directive
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
