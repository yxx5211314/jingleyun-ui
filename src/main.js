import Vue from 'vue'
import App from './App.vue'
import Vuez from "./library";
Vue.use(Vuez);
new Vue({
  el: '#app',
  render: h => h(App)
})
