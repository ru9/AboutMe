<template>
  <div>
    <h1>Projects</h1>
    <div v-for="project in projects" :key="project.name" id="container">
      <Project
        :projectImg="project.img"
        :projectHeader="project.header"
        :projectDescription="project.description"
        :projectTechnology="project.technology"
        :projectGit="project.git"
      />
    </div>
  </div>
</template>

<script>
import Project from "./Project";

export default {
  name: "CollectionProjects",
  components: {
    Project
  },
  data() {
    return {
      projects: null
    };
  },
  mounted() {
    this.loadProjects();
  },
  methods: {
    loadProjects: function() {
      var self = this;
      fetch(
        "https://webpage-backend.firebaseio.com/projects.json?auth=64KXsqvfRcKK2T5a3muOAfbLVVK7dMlEM93IVv0B"
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(myProjects) {
          self.projects = myProjects;
          window.console.log(JSON.stringify(myProjects));
        });
    }
  }
};
</script>

<style>
#container {
  font-family: verdana;
  overflow: auto;
  padding: 20px;
}
</style>
