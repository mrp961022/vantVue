import Vue from 'vue'
import App from './App.vue'
import {
  Button,
  Cell,
  CellGroup,
  Icon,
  Image,
  Row,
  Col,
  Loading
} from 'vant'; // 按需引入，如果使用babel按需引入，则不能引入整个vant
Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(Image)
Vue.use(Row)
Vue.use(Col)
Vue.use(Loading)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')