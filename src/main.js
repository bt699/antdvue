import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.less'
import vcolorpicker from 'vcolorpicker'
import less from 'less'


Vue.config.productionTip = false
Vue.use(vcolorpicker)
Vue.use(Antd)
Vue.use(less)

new Vue({
  render: h => h(App),
}).$mount('#app')
