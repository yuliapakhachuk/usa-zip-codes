<script setup>
  import { ref, onMounted } from "vue";
  // import { RouterView } from "vue-router";
  import Header from "./components/Header.vue"

  let userIP = ref(null);
  let userAgent = ref(navigator.userAgent)

  onMounted(async () => {
    const response = await fetch('https://api.ipify.org?format=json');
    userIP.value = await response.json().then(data => data.ip)
  })

</script>

<template>
  <div>
    <Header :ip="userIP" :agent="userAgent" />

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

