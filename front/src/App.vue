<template>
  <v-app>
    <VueHeader/>
    <v-main>
      <router-view/>
    </v-main>
    <VueFooter/>
  </v-app>
</template>

<script setup>
import VueHeader from './components/VueHeader.vue';
import VueFooter from './components/VueFooter.vue';
</script>
<style scoped>
.v-application {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.v-main {
  flex: 1 0 auto;
}
</style>