<template>
  <div>
    <img id="img" :src="projectImg" />
    <a :href="projectGit">
      <img id="git" src="https://image.flaticon.com/icons/svg/25/25231.svg" />
    </a>
    <div id="header">{{ projectHeader }}</div>
    <div id="technology">{{projectTechnology}}</div>
    <div id="description">{{ projectDescription}}</div>
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
  }
};
</script>

<style>
#img {
  max-width: 20%;
  height: auto;
  float: right;
  clear: right;
}
#header {
  text-align: left;
  font-size: 24px;
  font-weight: bold;
}
#description {
  text-align: left;
}
#technology {
  text-align: left;
  display: block;
  padding-bottom: 10px;
}
#git {
  float: left;
  height: 45px;
  width: 45px;
  padding-right: 10px;
}
</style>
