<template>
  <div style="height: 100%;">
    <router-view></router-view>
    <FootGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide.vue'
  export default {

    components:{
      FootGuide
    }
  }
</script>

<style>

</style>
