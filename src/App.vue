<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <AboutMe />
    <CollectionProjects class="projects" />
    <CollectionMeasurements />
  </div>
</template>

<script>
import CollectionMeasurements from "./components/CollectionMeasurements";
import CollectionProjects from "./components/CollectionProjects";
import AboutMe from "./components/AboutMe";

export default {
  name: "app",
  components: {
    CollectionMeasurements,
    CollectionProjects,
    AboutMe
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 65px !important;
  margin: -10px;
  max-width: 960px;
  margin: 0 auto;
}
h1 {
  font-size: 42px;
  font-weight: bolder;
  margin-bottom: 40px;
  margin-top: 40px;
}
</style>
