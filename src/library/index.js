import ButtonCom from './button'
import lyflexCom from './lyflex'
//组件存储
const components = [
  ButtonCom,
  lyflexCom
]
//全局引入
const install = (Vue)=>{
  components.map((component)=>{
    Vue.component(component.name,component)
  })
}
//检查是否为浏览器环境和vue实例是否存在
if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}

export default {
  install
}
