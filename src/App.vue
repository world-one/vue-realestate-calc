<template>
  <div id="app">
    <header-component />
    <div class="wrap__view">
      <router-view/>
    </div>
    <footer-component />
  </div>
</template>

<script>
  import headerComponent from '@/components/layout/headerComponent'
  import footerComponent from '@/components/layout/footerComponent'
  export default {
    name: 'app',
    components :{
        headerComponent,
        footerComponent
    }
  }
</script>
<style lang="scss">
  @import '@/scss/app';
</style>
