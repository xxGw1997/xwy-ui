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
    <div class="button-group">
      <x-button icon="icon-delete">图标按钮</x-button>
      <x-button type="primary" icon="icon-delete" iconRight>图标靠右</x-button>
      <x-button type="success" icon="icon-loading" loading>加载按钮</x-button>
      <x-button type="success" :icon="icon" :loading="loading1" @click.native="toggleLoading()">点击加载</x-button>
      <x-button type="danger" disabled>失效按钮</x-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      loading1: false,
      icon: 'icon-delete'
    }
  },
  methods: {
    toggleLoading() {
      this.loading1 ? (this.icon = 'icon-delete') : (this.icon = 'icon-loading')
      this.loading1 = !this.loading1
    }
  }
}
</script>

<style lang="scss">
@import '//at.alicdn.com/t/font_1500928_oo5tbmvusf.css';

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
