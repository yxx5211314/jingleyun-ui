import ButtonCom from './button'
//组件存储
const components = [
  ButtonCom
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
