<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.centered-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 25%;
  margin-right: 25%;
}

.text-right {
  text-align: right;
  padding-right: 25px;
}
</style>
