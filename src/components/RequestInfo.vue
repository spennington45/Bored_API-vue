<template>
  <div class="container">
    <form>
      <label for="people">How many people</label>
      <select name="people" id="people" v-model="participants">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input class="submit" type="button" value="Submit" v-on:click.prevent="getActivity">
    </form>
    <h4>OR</h4>
    <form>
      <label for="type">What type of activity</label>
      <select name="type" id="type" v-model="type">
        <option value="education">Education</option>
        <option value="recreational">Recreational</option>
        <option value="social">Social</option>
        <option value="diy">DIY</option>
        <option value="charity">Charity</option>
        <option value="cooking">Cooking</option>
        <option value="relaxation">Relaxation</option>
        <option value="music">Music</option>
        <option value="busywork">Busywork</option>
      </select>
      <input class="submit" type="button" value="Submit" v-on:click.prevent="getActivityType">
    </form>
  </div>
</template>

<script>
export default {
  name: "request-info",
  data() {
    return {
      participants: 1,
      type: ""
    };
  },
  methods: {
    getActivity() {
      this.$router.push(`/activity/${this.participants}`)
    },
    getActivityType() {
      this.$router.push(`/activity/type/${this.type}`)
    }
  },
};
</script>

<style>
form {
  color: black;
  padding: 20px;
}
.submit:hover {
  cursor: pointer;
}
select {
  margin-left: 10px;
  margin-right: 10px;
}
</style>