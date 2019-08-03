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

export default {
  name: "CollectionProjects",
  components: {
    Project
  },
  data() {
    return {
      projects: {
        "0": {
          img:
            "https://banner2.kisspng.com/20180418/ehq/kisspng-raspberry-pi-computer-icons-download-secure-digita-raspberry-5ad7474a10e466.5737075015240579300692.jpg",
          header: "Test project",
          description:
            "This is the test prject. There are meny like it, but this one is mine. This is the best test project that you can test with. If you dont like this test project, you should go rethink your life. No, seriously, go get your shit streight!",
          technology: "JS, Vue, HTML, Python",
          git: "https://github.com/ru9/RPi"
        },
        "1": {
          img:
            "data:image/png;base64,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",
          header: "Test project2",
          description:
            "This is the test prject. There are meny like it, but this one is mine. This is the best test project that you can test with. If you dont like this test project, you should go rethink your life. No, seriously, go get your shit streight!",
          technology: "JS, Vue, HTML, Python2",
          git: "https://github.com/ru9/RPi"
        }
      }
    };
  },
  mounted() {
    // this.loadProjects();
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

<style scope>
#container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
