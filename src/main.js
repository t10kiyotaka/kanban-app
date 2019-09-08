// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'es6-promise/auto' // Polifil Promise
import App from './App'
import ErrorBoundary from './ErrorBoudanry.vue' // Component for capturing errors.
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Install ErrorBoundary component
Vue.component(ErrorBoundary.name, ErrorBoundary)

Vue.config.errorHandler = (err, vm, info) => {
  console.error('errorHandler err: ', err)
  console.error('errorHandler vm: ', vm)
  console.error('errorHandler info: ', info)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
