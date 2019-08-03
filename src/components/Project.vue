<template>
  <div v-on:click="changeInitial" class="card">
    <div v-if="initial" class="project-intial">
      <div class="tst">
        <img :src="projectImg" class="img" />
      </div>
      <div class="header-content">
        <div class="header">{{ projectHeader }}</div>
        <div class="technology">{{ projectTechnology }}</div>
      </div>
    </div>
    <div v-else class="project-content">
      <div class="description">{{ projectDescription }}</div>
      <a :href="projectGit">
        <img class="git" src="https://image.flaticon.com/icons/svg/25/25231.svg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    projectImg: String,
    projectHeader: String,
    projectDescription: String,
    projectTechnology: String,
    projectGit: String
  },
  data() {
    return {
      initial: true
    };
  },
  methods: {
    changeInitial: function() {
      this.initial = !this.initial;
    }
  }
};
</script>

<style scope>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  max-width: 320px;
  height: 400px;
  padding: 10px;
  margin-bottom: 20px;
  border-width: 5px;
  border-color: #003459;
  border-style: solid;
  border-radius: 20px;
}
.header-content {
  margin: 0 20px;
}
.header {
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 10px;
}
.technology {
}
.img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}
.project-content {
  margin: 0 20px;
}
.description {
  margin-bottom: 50px;
  font-size: 20px;
}
.git {
  max-height: 50px;
  width: auto;
}
</style>
