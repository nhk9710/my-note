import List from 'src/components/List'
import Create from 'src/components/Create'
import Update from 'src/components/Update'
import Main from 'src/components/Main'
import Detail from 'src/components/Detail'


const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },

  {
    path: '/save/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/save/update',
    name: 'Update',
    component: Update
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
