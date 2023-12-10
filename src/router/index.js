import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CategoriesView from '@/views/moderator/CategoriesView.vue';
import SpaView from '@/views/SpaView.vue';
import AddSpaWaterView from '@/views/AddSpaWaterView.vue';
import AddSpaEnergyView from '@/views/AddSpaEnergyView.vue';
import LuciferView from '@/views/rooms/LuciferView.vue';
import DiaboloView from '@/views/rooms/DiaboloView.vue';
import BeelzebubView from '@/views/rooms/BeelzebubView.vue';
import SatanView from '@/views/rooms/SatanView.vue';


const routes = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/mod/categories', name: 'CategoriesView', component: CategoriesView },
  { path: '/spa', name: 'SpaView', component: SpaView },
  { path: '/addspawater', name: 'AddSpaWaterView', component: AddSpaWaterView },
  { path: '/addspaenergy', name: 'AddSpaEnergyView', component: AddSpaEnergyView },
  { path: '/rooms/lucifer', name: 'LuciferView', component: LuciferView },
  { path: '/rooms/diabolo', name: 'DiaboloView', component: DiaboloView },
  { path: '/rooms/beelzebub', name: 'BeelzebubView', component: BeelzebubView },
  { path: '/rooms/satan', name: 'SatanView', component: SatanView }
]

const router = createRouter({
  history: createWebHistory(),
  routes

})

export default router;


/*const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mod/categories',
      name: 'categories',
      component: CategoriesView
    },
  ]
})

export default router*/
