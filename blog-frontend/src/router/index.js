import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomePage'
import EditComponent from '@/components/post/EditPost';
import CreateComponent from '@/components/post/CreatePost';
import PostComponent from '@/components/post/PostView';

const routes = [
  { 
    path: '/', 
    redirect: { name: 'home' } 
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { 
    path: '/create', 
    name: 'Create', 
    component: CreateComponent 
  },
  {
    path: '/edit/:id',
    name: 'Edit', 
    component: EditComponent 
  },
  {
    path: '/post/:id', 
    name: 'Post',
    component: PostComponent 
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router