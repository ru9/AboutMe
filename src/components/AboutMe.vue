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
          <div class="info">{{ aboutme.Name }}</div>
        </div>
        <div class="aboutme-containers">
          <div class="lable">Email:</div>
          <div class="info">{{ aboutme.Email }}</div>
        </div>
        <div class="aboutme-containers">
          <div class="lable">Location:</div>
          <div class="info">{{ aboutme.Location }}</div>
        </div>
        <div class="icon-container">
          <a v-for="links in aboutme.links" :key="links.link" :href="links.link">
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
      aboutme: {
        img:
          "https://firebasestorage.googleapis.com/v0/b/webpage-backend.appspot.com/o/projectimages%2Fprofilepic.jpg?alt=media&token=abc36568-26cd-4c53-bcdd-d761123f2e32",
        Name: "Runar Sunde",
        Email: "runisunde@gmail.com",
        Location: "Stavanger, Norway",
        links: {
          git: {
            link: "https://github.com/ru9",
            img:
              "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
          },
          linkedin: {
            link: "https://www.linkedin.com/in/runar-sunde-47538686/",
            img:
              "https://www.drupal.org/files/project-images/linkedin_circle_logo.png"
          }
        }
      }
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
        .then(function(aboutMe) {
          self.aboutme = aboutMe;
          window.console.log(JSON.stringify(aboutMe));
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
