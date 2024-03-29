import Vue from 'vue';
import Vuetify from './plugins/vuetify';
import App from './App.vue';
import './registerServiceWorker';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;

new Vue({
  vuetify: Vuetify,
  render: (h) => h(App),
}).$mount('#app');
