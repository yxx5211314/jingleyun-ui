
<template>
  <!-- // 采用flex布局方式 -->
  <div class="ly-flex"  :class="[justifyClass,alignClass,className!=''?className:'']" :style="{width:span!==''?span+'%':''}">
      <slot>
      </slot>
  </div>
</template>

<script>
export default {
  name: 'ly-flex',
  props:{
      span:{
        type:Number,
        default:''
      },
      justify:{
        type:String,
        default:'start'
      },
      align:{
        type:String,
        default:'top'
      },
      className:{
        type:String,
        default:''
      }
  },
  data () {
    return {
        justifyClass:undefined,
        alignClass:undefined
    }
  },
  watch: {
    justify: {
      immediate: true, // 很重要！！！
      handler (val) {
        this.justifyClass='ly-justify-'+val
      }
    },
    // top/middle/bottom
    align: {
      immediate: true, // 很重要！！！
      handler (val) {
        this.alignClass='ly-align-items-'+val
      }
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.ly-flex{
    width:100%;
    display:flex;
    box-sizing: border-box;
    border-radius: 4px;
    min-height: 36px;
    border:1px solid red;
}
.ly-justify-start{
  justify-content: start;
}
.ly-justify-end{
  justify-content: end;
}
.ly-justify-center{
  justify-content: center;
}
.ly-justify-space-around{
  justify-content: space-around;
}
.ly-justify-space-between{
  justify-content: space-between;
}
.ly-align-items-stretch{
  align-items:stretch
}
.ly-align-items-top{
  align-items:flex-start
}
.ly-align-items-middle{
  align-items:center
}
.ly-align-items-bottom{
  align-items:flex-end
}
</style>
