<template>
  <div id="app">
    <!-- <xr-test></xr-test> -->
    <div class="button-group">
      <x-button>默认按钮</x-button>
      <x-button type="primary">主要按钮</x-button>
      <x-button type="success">成功按钮</x-button>
      <x-button type="warning">警告按钮</x-button>
      <x-button type="danger">危险按钮</x-button>
    </div>
    <div class="button-group">
      <x-button round>圆角按钮</x-button>
      <x-button type="primary" round>主要按钮</x-button>
      <x-button type="success" round>成功按钮</x-button>
      <x-button type="warning" round>警告按钮</x-button>
      <x-button type="danger" round>危险按钮</x-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button-group {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}
</style>
