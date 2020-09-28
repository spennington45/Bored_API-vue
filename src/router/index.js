import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ActivityParticipents from "../components/ActivityParticipents.vue"
import ActivityType from "../components/ActivityType.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/activity/:participants",
    name: "ActivityParticipents",
    component: ActivityParticipents
  },
  {
    path: "/activity/type/:type",
    name: "ActivityType",
    component: ActivityType
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
