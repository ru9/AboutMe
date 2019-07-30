<template>
  <div>
    <h1>About me</h1>
    <div>
      <div>{{ aboutme.Name }}</div>
      <div>
        <a v-for="links in aboutme.links" :key="links.link" :href="links.link">
          <img :src="links.img" class="link-icon" alt />
        </a>
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

<style>
.link-icon {
  width: 50px;
  height: auto;
  margin: 10px;
}
</style>
