<template>
  <div class="ly-button" :class="plain&&type===''?'ly-button-plain':plain&&type==='primary'?'ly-button-primary-plain':plain&&type==='success'?'ly-button-success-plain':plain&&type==='info'?'ly-button-info-plain':type==='primary'?'ly-button-primary':type==='success'?'ly-button-success':
       type==='info'?'ly-button-info':type==='warning'?'ly-button-warning':type==='danger'?'ly-button-danger':''" :style="{'background':(background_color?background_color:'')}"
       @click="ColorClick">
    <span>
      <slot>
      </slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ly-button',
  props:{
      type:{
        type:String,
        default:''
      },
      plain:{
        type:Boolean,
        default:false
      }
  },
  data () {
    return {
      //点击背景色
      background_color:null,
      //点击border颜色
      borderColor:null,
      Colors:null,
    }
  },
  methods:{
    //点击背景颜色闪烁事件
    ColorClick(){
      if(this.type === ''){
        let timer,timer2
        timer=setTimeout(()=>{
          this.background_color='rgba(64,158,255,0.2)'
          clearTimeout(timer)
        },10)
        timer2=setTimeout(()=>{
          this.background_color=null
          clearTimeout(timer2)
        },100)
      }else if(this.type === 'primary'){
        let timer,timer2
        timer=setTimeout(()=>{
          this.background_color='rgba(64,158,255,1)'
          clearTimeout(timer)
        },10)
        timer2=setTimeout(()=>{
          this.background_color=null
          clearTimeout(timer2)
        },100)
      }else if(this.type === 'success'){
        let timer,timer2
        timer=setTimeout(()=>{
          this.background_color='rgba(103,194,58,1)'
          clearTimeout(timer)
        },10)
        timer2=setTimeout(()=>{
          this.background_color=null
          clearTimeout(timer2)
        },100)
      }else if(this.type === 'info'){
        let timer,timer2
        timer=setTimeout(()=>{
          this.background_color='rgba(144,147,153,1)'
          clearTimeout(timer)
        },10)
        timer2=setTimeout(()=>{
          this.background_color=null
          clearTimeout(timer2)
        },100)
      }else if(this.type === 'warning'){
        let timer,timer2
        timer=setTimeout(()=>{
          this.background_color='rgba(230,162,60,1)'
          clearTimeout(timer)
        },10)
        timer2=setTimeout(()=>{
          this.background_color=null
          clearTimeout(timer2)
        },100)
      }else if(this.type === 'danger'){
        let timer,timer2
        timer=setTimeout(()=>{
          this.background_color='rgba(245,108,108,1)'
          clearTimeout(timer)
        },10)
        timer2=setTimeout(()=>{
          this.background_color=null
          clearTimeout(timer2)
        },100)
      }
    },
  }
}
</script>

<style scoped>
  .ly-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  .ly-button:hover {
    color: #57a3f3;
    background:rgba(64,158,255,0.1);
    box-shadow: 0 0 5px 0 rgba(232,237,250,.5),0 2px 4px 0 rgba(232,237,250,.5);
    border-color: #409EFF;
  }
  .ly-button-plain:hover{
    color:#409EFF;
    background:#fff;
    border-color:#409EFF;
  }
  .ly-button-primary-plain{
    background:rgba(64,158,255,0.1);
    box-shadow: 0 0 5px 0 rgba(232,237,250,.5),0 2px 4px 0 rgba(232,237,250,.5);
    color:#409EFF;
    border-color: #b3d8ff;
  }
  .ly-button-success-plain{
    background:rgba(103,194,58,0.1);
    box-shadow: 0 0 5px 0 rgba(232,237,250,.5),0 2px 4px 0 rgba(232,237,250,.5);
    color:#67C23A;
    border-color: #67C23A;
  }
  .ly-button-info-plain{
    background:rgba(144,147,153,0.1);
    box-shadow: 0 0 5px 0 rgba(232,237,250,.5),0 2px 4px 0 rgba(232,237,250,.5);
    color:#909399;
    border-color: #909399;
  }
  .ly-button-primary{
    background:#409EFF;
    color:#fff;
  }

  .ly-button-success{
    background:#67C23A;
    color:#fff;
  }
  .ly-button-info{
    background:#909399;
    color:#fff;
  }
  .ly-button-warning{
   background:#E6A23C;
   color:#fff;
  }
  .ly-button-danger{
    background:#F56C6C;
    color:#fff;
  }
  .ly-button-primary-plain:hover{
    background:rgba(64,158,255,0.8);
    color:#fff;
  }
  .ly-button-success-plain:hover{
    background:rgba(103,194,58,0.8);
    border-color:#67C23A;
    color:#fff;
  }
  .ly-button-info-plain:hover{
    background:rgba(144,147,153,0.8);
    border-color:#67C23A;
    color:#fff;
  }
  .ly-button-primary:hover{
    background:rgba(64,158,255,0.8);
    box-shadow: 0 0 5px 0 rgba(232,237,250,.5),0 2px 4px 0 rgba(232,237,250,.5);
    color:#fff;
  }
  .ly-button-success:hover{
    background:rgba(103,194,58,0.8);
    box-shadow: 0 0 5px 0 rgba(232,237,250,.5),0 2px 4px 0 rgba(232,237,250,.5);
    color:#fff;
    border-color:#67C23A
  }
  .ly-button-info:hover{
    background:rgba(144,147,153,0.8);
    box-shadow: 0 0 5px 0 rgba(232,237,250,.5),0 2px 4px 0 rgba(232,237,250,.5);
    color:#fff;
    border-color:#909399
  }
  .ly-button-warning:hover{
    background:rgba(230,162,60,0.8);
    box-shadow: 0 0 5px 0 rgba(232,237,250,.5),0 2px 4px 0 rgba(232,237,250,.5);
    color:#fff;
    border-color:#E6A23C
  }
  .ly-button-danger:hover{
    background:rgba(245,108,108,0.8);
    box-shadow: 0 0 5px 0 rgba(232,237,250,.5),0 2px 4px 0 rgba(232,237,250,.5);
    color:#fff;
    border-color:#F56C6C
  }

</style>
