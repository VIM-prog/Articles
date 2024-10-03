<template>
  <v-app>
    <v-main>
      <VueHeader/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import VueHeader from './components/VueHeader.vue';
</script>