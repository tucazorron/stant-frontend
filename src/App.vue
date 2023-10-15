<template>
  <div id="app" class="dark-theme">
    <ListTalks />
  </div>
</template>

<script>
import ListTalks from "@/screens/Talk/ListTalks.vue";
export default {
  name: "App",
  components: {
    ListTalks,
  },
};
</script>
