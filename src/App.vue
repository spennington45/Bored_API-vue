<template>
  <div id="app">
    <div id="nav"><router-link to="/">Home</router-link> |</div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body, html {
  height: 100%;
}
html {
  widows: auto;
  height: 100%;
  background-image: url(https://freestocks.org/fs/wp-content/uploads/2017/05/sky_at_sunrise-1000x667.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #073f26;
}
</style>
