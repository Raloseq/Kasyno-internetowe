<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat");
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}
</style>
