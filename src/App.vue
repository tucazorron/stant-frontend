<template>
  <div id="app" class="dark-theme">
    <DarkModeScreen />
  </div>
</template>

<script>
import DarkModeScreen from "@/components/DarkModeScreen.vue";

export default {
  name: "App",
  components: {
    DarkModeScreen,
  },
};
</script>

<style>
.dark-theme {
  background-color: #222;
}
</style>