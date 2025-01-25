<script setup>
defineProps({
  obj_img_alt: { // Message au passage du pointeur sur l'image
    type: String,
    required: true,
  },
  obj_img_src: { // chemin vers image du lien
    type: String,
    required: true,
  },
  obj_link_href: { // Lien à suivre au clic
    type: String,
    required: true,
  },
  obj_link_target: { // action au clic sur le lien
    type: String,
    required: true,
  },
})
</script>

<template>
  <div style="padding-left: 1em; padding-right: 1em;">
    <a class="classofimagewithlink" v-bind:target="obj_link_target" v-bind:href="obj_link_href">
      <img v-bind:src="obj_img_src" v-bind:alt="obj_img_alt" width="50">
    </a>
  </DIV>

  <!--
  <div style="padding-left: 1em; padding-right: 1em;">
    <a class="classofimagewithlink" target="_blank" href={{ linktogo }}>
      <img src={{ imagetoshow }} alt={{ msg2 }} width="50">
  </div>
  -->
</template>

<style scoped>
.classofimagewithlink:hover{
  opacity: 40%;
}
</style>
