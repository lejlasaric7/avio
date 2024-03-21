import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tickets from '../views/Tickets.vue'
import Contact from '../views/Contact.vue'
import Passangers from '../views/Passangers.vue'
import Flights from '../views/Flights.vue'

const routes = [
  {
    path: '/',
    name: 'pocetna',
    component: HomeView
  },
  {
    path: '/karte',
    name: 'karte',
    component: Tickets
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: Contact
  },
  {
    path: '/putnici',
    name: 'putnici',
    component: Passangers
  },
  {
    path: '/letovi',
    name: 'letovi',
    component: Flights
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
