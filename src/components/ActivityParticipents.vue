<template>
  <div class="container">
    <h1>Activity</h1>
    <div class="activity-table">
      <table>
        <tr>
          <td>Activity {{ activity.activity }}</td>
          <br />
        </tr>
        <tr>
          <td>Type {{ activity.type }}</td>
          <br />
        </tr>
        <tr>
          <td>Participants {{ activity.participants }}</td>
          <br />
        </tr>
        <tr>
          <td>Price {{ activity.price }}</td>
          <br />
        </tr>
        <tr>
          <td>Link {{ activity.link }}</td>
          <br />
        </tr>
        <tr>
          <td>Accessibility {{ activity.accessibility }}</td>
          <br />
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import boredRequest from "../services/BoredRequest";
export default {
  name: "desplay-activity",
  data() {
    return {
      activity: {},
    };
  },
  created() {
      boredRequest.getParticipants(this.$route.params.participants).then((request) => {
          this.activity = request.data;
    });
  },
};
</script>

<style>
.container {
    width: 30%;
    background-color: floralwhite;
    color: black;
    justify-content: center;
    margin-left: 35%;
    margin-right: 35%;
}
table {
    text-align: left;
    padding: 20px;
}
.activity-table {
    display: flex;
    justify-content: center;
}
h1 {
    padding-top: 20px;
}

@media screen and (max-width: 1024px) {
    .container{
        width: 100%;
        margin: 0%;
    }
}
</style>