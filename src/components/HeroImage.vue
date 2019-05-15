<template>
  <div class="app-hero-image">
    <h1 class="app-hero-image__heading">Kasyno internetowe</h1>
    <router-link to="/Login" class="app-hero-image__link">Zagraj teraz !</router-link>
  </div>
</template>

<script>
export default {
  name: "HeroImage"
};
</script>

<style lang="scss" scoped>
.app-hero-image {
  height: 100vh;
  background: url("../assets/hero-image.jpg") no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .app-hero-image__heading {
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    width: 100%;
    text-align: center;
    padding: 20px;
  }
  .app-hero-image__link {
    border: 2px solid white;
    border-radius: 8px;
    padding: 10px;
    margin: 30px;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    font-size: 20px;
    text-decoration: none;
    transition: 0.3s ease;
    &:hover {
      background-color: white;
      color: black;
    }
  }
}
</style>

