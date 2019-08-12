<template>
  <div>
    <h1>Projects</h1>
    <div id="container">
      <a v-for="project in projects" :key="project.name">
        <Project
          :projectImg="project.img"
          :projectHeader="project.header"
          :projectDescription="project.description"
          :projectTechnology="project.technology"
          :projectGit="project.git"
        />
      </a>
    </div>
  </div>
</template>

<script>
import Project from "./Project";
import { getProjects } from "../backendService";

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
      getProjects()
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          self.projects = data;
          window.console.log(JSON.stringify(data));
        });
    }
  }
};
</script>

<style scope>
#container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
