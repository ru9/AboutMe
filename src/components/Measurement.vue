<template>
  <div>
    <div>{{ valueMeasurement }}</div>
    <div id="props">{{ nameMeasurement }}</div>
  </div>
</template>

<script>
export default {
  name: "Measurement",
  props: {
    nameMeasurement: String,
    valueMeasurement: String
  }
};
</script>

<style scope>
#props {
  margin-top: 5px;
  font-size: 10px;
}
</style>
