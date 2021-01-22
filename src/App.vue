<template>
  <div id="app">
    <div>
      <ly-button>默认按钮</ly-button>
      <ly-button type="primary">主要按钮</ly-button>
      <ly-button type="success">成功按钮</ly-button>
      <ly-button type="info">信息按钮</ly-button>
      <ly-button type="warning">警告按钮</ly-button>
      <ly-button type="danger">危险按钮</ly-button>
    </div>
    <div style="margin-top:20px">
      <ly-button plain>默认按钮</ly-button>
      <ly-button type="primary" plain>主要按钮</ly-button>
      <ly-button type="success" plain>成功按钮</ly-button>
      <ly-button type="info" plain>信息按钮</ly-button>
      <ly-button type="warning">警告按钮</ly-button>
      <ly-button type="danger">危险按钮</ly-button>
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
