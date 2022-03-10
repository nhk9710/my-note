import List from 'src/components/List'
import Create from 'src/components/Create'
import Update from 'src/components/Update'
import Main from 'src/components/Main'
import Detail from 'src/components/Detail'

import CountryList from 'components/CountryList'
import CountryNotice from 'src/components/CountryNotice'
import CountryCreate from 'src/components/CountryCreate'
import CountryMain from 'src/components/CountryMain'
import CountryDetail from 'src/components/CountryDetail'
import CountryWorld from 'src/components/CountryWorld'


const routes = [
  /*1번째*/
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
    path: '/detail/:contentId',
    name: 'Detail',
    component: Detail
  },

  {
    path: '/save/create/:contentId?',
    name: 'Create',
    component: Create
  },
  {
    path: '/save/update:contentId',
    name: 'Update',
    component: Update
  },

  /* 2번째  */
  {
    path: '/country-main',
    name: 'CountryMain',
    component: CountryMain
  },
  {
    path: '/country-notice',
    name: 'CountryNotice',
    component: CountryNotice
  },
  {
    path: '/country-list',
    name: 'CountryList',
    component: CountryList
  },
  {
    path: '/country-detail/:contentId',
    name: 'CountryDetail',
    component: CountryDetail
  },

  {
    path: '/save/country-create/:contentId?',
    name: 'CountryCreate',
    component: CountryCreate
  },
  {
    path: '/world',
    name: 'CountryWorld',
    component: import('layouts/MainMainLayout.vue'),
    children: [
      {
        path: '',
        component: CountryWorld,
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
