import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeMainPage from './pages/HomeMainPage.vue'
import ArticleListPage from './pages/ArticleListPage.vue'
import './index.css'

const routes = [
  { path: '/', component: HomeMainPage },
  { path: '/article/list', component: ArticleListPage }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

createApp(App).use(router).mount('#app')
