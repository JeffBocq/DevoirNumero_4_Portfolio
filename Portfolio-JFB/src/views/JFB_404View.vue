<template>
  <div class="nothinghere">
    <h1>This is a 404 page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .nothinghere {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.nothinghere { /** correction locale du CSS  */
  background-image: url('src/assets/Fond_404.png');
  background-repeat: no-repeat;
  background-size: cover;
  /*
  background-position: right;
  background-color: lightgray; */
  min-height: 700px;
}

.nothinghere h1 {
  font-size:50px;
}


</style>
