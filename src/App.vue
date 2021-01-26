<template>
  <div id="app">
    <div>
      <ly-button >默认按钮</ly-button>
      <ly-button type="primary">主要按钮</ly-button>
      <ly-button type="success">成功按钮</ly-button>
      <ly-button type="info">信息按钮</ly-button>
      <ly-button type="warning">警告按钮</ly-button>
      <ly-button type="danger">危险按钮</ly-button>
    </div>
    <div style="margin-top:20px">
      <ly-button plain>朴素按钮</ly-button>
      <ly-button type="primary" plain>主要按钮</ly-button>
      <ly-button type="success" plain>成功按钮</ly-button>
      <ly-button type="info" plain>信息按钮</ly-button>
      <ly-button type="warning" plain>警告按钮</ly-button>
      <ly-button type="danger" plain>危险按钮</ly-button>
    </div>
    <div style="margin-top:20px">
      <ly-button radius="20">圆角按钮</ly-button>
      <ly-button type="primary" radius="20">主要按钮</ly-button>
      <ly-button type="success" radius="20">成功按钮</ly-button>
      <ly-button type="info" radius="20">信息按钮</ly-button>
      <ly-button type="warning" radius="20">警告按钮</ly-button>
      <ly-button type="danger" radius="20">危险按钮</ly-button>
    </div>
    <div style="margin-top:20px">
      <ly-button >默认按钮</ly-button>
      <ly-button size="medium">中等按钮</ly-button>
      <ly-button size="small">小型按钮</ly-button>
      <ly-button size="mini">超小按钮</ly-button>
    </div>
    <div style="margin-top:20px">
      <ly-button radius="20">默认按钮</ly-button>
      <ly-button size="medium" radius="20">中等按钮</ly-button>
      <ly-button size="small" radius="20">小型按钮</ly-button>
      <ly-button size="mini" radius="20">超小按钮</ly-button>
    </div>

    <div style="margin-top:50px">
      <ly-button radius="20" disabled>圆角按钮</ly-button>
      <ly-button type="primary" radius="20" disabled>主要按钮</ly-button>
      <ly-button type="success" radius="20" disabled>成功按钮</ly-button>
      <ly-button type="info" radius="20" disabled>信息按钮</ly-button>
      <ly-button type="warning" radius="20" disabled>警告按钮</ly-button>
      <ly-button type="danger" radius="20" disabled>危险按钮</ly-button>
    </div>

    <div style="margin-top:50px">
      <ly-button radius="20" type="text" disabled>圆角按钮</ly-button>
      <ly-button radius="20" type="text">主要按钮</ly-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    ss(){console.log("222")
    }
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
