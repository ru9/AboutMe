<template>
  <div id="app">
    <StartImage />
    <AboutMe />
    <CollectionProjects class="projects" />
  </div>
</template>

<script>
import CollectionProjects from "./components/CollectionProjects";
import AboutMe from "./components/AboutMe";
import StartImage from "./components/StartImage";

export default {
  name: "app",
  components: {
    StartImage,
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
  height: 100%;
  width: 100%;
}
html body {
  height: 100%;
  margin: 0;
  padding: 0;
}
h1 {
  font-size: 42px;
  font-weight: bolder;
  margin-bottom: 40px;
  margin-top: 40px;
}
</style>
