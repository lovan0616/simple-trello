<template>
  <div id="app" class="w-screen h-screen flex flex-col-reverse  lg:flex-row">
    <Nav />
    <router-view class="flex-1 bg-gray-50"/>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
