import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CategoriesView from '@/views/moderator/CategoriesView.vue'
import SpaView from '@/views/SpaView.vue';

const routes = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/mod/categories', name: 'CategoriesView', component: CategoriesView },
  { path: '/spa', name: 'SpaView', component: SpaView }
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
