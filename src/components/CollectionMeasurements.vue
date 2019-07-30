<template>
  <div id="bottombar">
    <div v-for="measurement in measurements" :key="measurement.value" id="instances">
      <Measurement
        :nameMeasurement="measurement.name"
        :valueMeasurement="measurement.value"
        id="measurements"
      />
    </div>
  </div>
</template>

<script>
import Measurement from "./Measurement";
import { setInterval } from "timers";

export default {
  name: "CollectionMeasurements",
  components: {
    Measurement
  },
  data() {
    return {
      measurements: null,
      interval: null
    };
  },
  mounted() {
    this.loadData();

    this.interval = setInterval(
      function() {
        this.loadData();
      }.bind(this),
      15000
    );
  },
  methods: {
    loadData: function() {
      var self = this;
      fetch(
        "https://webpage-backend.firebaseio.com/measurements.json?auth=64KXsqvfRcKK2T5a3muOAfbLVVK7dMlEM93IVv0B"
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(myData) {
          self.measurements = myData;
          window.console.log(JSON.stringify(myData));
        });
    }
  },
  created() {},
  beforeDestroy: function() {
    clearInterval(this.interval), clearInterval(this.interval2);
  }
};
</script>

<style scope>
#measurements {
  color: white;
  text-align: center;
  padding: 14px 16px;
  font-family: verdana;
  font-weight: bold;
}
#bottombar {
  background-color: #333;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
#instances {
  float: left;
}
</style>
