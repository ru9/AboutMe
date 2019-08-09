<template>
  <div class="outer-container">
    <img alt="startimage" src="../assets/computerhacking.jpg" class="start-image" />
    <div class="writing-container">
      <div class="name">Runar Sunde</div>
      <q class="quote">
        Just do
        <a>something</a>
      </q>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.outer-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.start-image {
  object-fit: cover;
  height: 100vh;
  width: 100vw;
}
.writing-container {
  position: absolute;
}
.name {
  font-size: 4rem;
  color: white;
  padding: 10px;
}
.quote {
  font-size: 1.5rem;
  color: white;
  font-family: cursive;
  font-style: italic;
}
.quote > a {
  font-weight: 900;
}
@media (max-width: 767px) {
  .name {
    font-size: 2rem;
  }
  .quote {
    font-size: 0.9rem;
  }
}
</style>
