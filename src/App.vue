<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>