<template>
  <div>
    <h1>About me</h1>
    <div class="outer-container">
      <div>
        <img :src="aboutme.img" class="profile-img" />
      </div>
      <div class="outer-aboutme-container">
        <div class="aboutme-containers">
          <div class="lable">Name:</div>
          <div class="info">{{ aboutme.name }}</div>
        </div>
        <div class="aboutme-containers">
          <div class="lable">Email:</div>
          <div class="info">{{ aboutme.email }}</div>
        </div>
        <div class="aboutme-containers">
          <div class="lable">Location:</div>
          <div class="info">{{ aboutme.location }}</div>
        </div>
        <div class="icon-container">
          <a
            v-for="links in aboutme.links"
            :key="links.link"
            :href="links.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="links.img" class="link-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAboutMe } from "../backendService";

export default {
  name: "AboutMe",

  data() {
    return {
      aboutme: null
    };
  },
  mounted() {
    this.loadAboutMe();
  },
  methods: {
    loadAboutMe: function() {
      var self = this;
      getAboutMe()
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          self.aboutme = data;
          window.console.log(JSON.stringify(data));
        });
    }
  }
};
</script>

<style scope>
.outer-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.profile-img {
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  object-fit: cover;
  border-radius: 50%;
  border-width: 5px;
  border-color: #003459;
  border-style: solid;
}
.outer-aboutme-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 25px;
  min-height: 214px;
  margin-bottom: 20px;
}
.aboutme-containers > div {
  display: flex;
  justify-items: flex-start;
}
.lable {
  font-weight: lighter;
}
.info {
  font-weight: bold;
  font-size: 24px;
}
.icon-container {
  display: flex;
  align-items: flex-start;
}
.link-icon {
  width: 40px;
  height: auto;
  margin-left: 10px;
}
</style>
