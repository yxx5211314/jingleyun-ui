<template>
  <div class="ly-button">
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
        default:"按钮"
      }
  },
  data () {
    return {

    }
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
    background:rgba(87,163,243,0.1);
    box-shadow: 0 0 5px 0 rgba(232,237,250,.5),0 2px 4px 0 rgba(232,237,250,.5);
    border-color: #57a3f3;
  }
</style>
