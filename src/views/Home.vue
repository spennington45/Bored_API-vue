<template>
  <div class="home">
    <div class="container">
      <h1>Bored?</h1>
    </div>
    <ReuestInfo />
  </div>
</template>

<script>
import ReuestInfo from "../components/RequestInfo";

export default {
  name: "Home",
  components: {
    ReuestInfo,
  },
};
</script>
<style>
form {
  display: flex;
  justify-content: center;
  background-color: floralwhite;
}
@media screen and (max-width: 1024px) {
  .container {
    width: 100%;
    margin: 0%;
  }
}
</style>