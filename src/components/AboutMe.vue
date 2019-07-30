<template>
  <div>
    <h1>About me</h1>
    <div class="outer-container">
      <div>
        <img :src="aboutme.img" class="profile-img" />
      </div>
      <div class="tst">
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
export default {
  name: "AboutMe",

  data() {
    return {
      aboutme: {}
    };
  },
  mounted() {
    this.loadAboutMe();
  },
  methods: {
    loadAboutMe: function() {
      var self = this;
      fetch(
        "https://webpage-backend.firebaseio.com/aboutme.json?auth=64KXsqvfRcKK2T5a3muOAfbLVVK7dMlEM93IVv0B"
      )
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
}
.profile-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border-width: 5px;
  border-color: #003459;
  border-style: solid;
}
.tst {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 25px;
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
