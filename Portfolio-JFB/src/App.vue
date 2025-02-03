<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ImageWithLink from './components/ImageWithLink.vue'
</script>

<template>
  <header>
    <ImageWithLink obj_img_alt="Home" obj_link_target="_top" obj_link_href="/" obj_img_src="/src/assets/ArtDecoHome.webp" />
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/vuehome">VueHome</RouterLink>
        <RouterLink to="/vueabout">VueAbout</RouterLink>
      </nav>
    </div>
  </header>

  <!-- On laisse le router mettre sa part à cet endroit -->
  <!-- si racine alors HomeView.vue -->
  <!-- si about  alors AbourView.vue -->
  <RouterView />

  <!-- On va mettre un footer -->
  <footer> 
    <div style="flex-direction: column; align-self: center;">
        <div style="display:flex; flex-direction:row">
            <ImageWithLink obj_img_alt="Linkez-moi" obj_link_target="_blank" obj_link_href="https://www.linkedin.com/in/jean-fran%C3%A7ois-bocquet-88633430/" obj_img_src="/src/assets/linkedin.png" />
            <ImageWithLink obj_img_alt="Likez-moi" obj_link_target="_blank" obj_link_href="https://www.facebook.com/jeanfrancois.bocquet.18/" obj_img_src="/src/assets/facebook.png" />
            <ImageWithLink obj_img_alt="Gittez-moi" obj_link_target="_blank" obj_link_href="https://github.com/JeffBocq" obj_img_src="/src/assets/signe-github.png" />
        </div>
        <div>
            <p class="writeInWhite">Dernière mise à jour le <time datetime="2025-01-28">28/01/2025</time></p> 
        </div>
      </div>    
  </footer>

</template>

<style scoped>

footer{
  display: flex;
  flex-direction:column;
  background-color: #782221;
  color: white;
  padding: 15px;
}

.link2SocialNetwork:hover{
  opacity: 40%;
}

header {
  display: flex;
  flex-direction:row;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* background-color: #782221; */
  background-color: aquamarine;
  /* color: white; */
  padding: 15px;
  /* line-height: 1.5;
  max-height: 100vh; */
}

header_ancrage_fixe {
  /* récupéré de https://www.codeur.com/tuto/html/ancre-lien-header-fixe/ */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
