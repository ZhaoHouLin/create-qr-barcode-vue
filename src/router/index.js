import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../components/CreateCode.vue'),
    meta: {
      title: 'CreateCode'
    }
  },{
    path: '/CreateCode',
    component: () => import('../components/CreateCode.vue'),
    meta: {
      title: 'CreateCode'
    }
  },
  {
    path: '/Scanner',
    component: () => import('../components/Scanner.vue'),
    meta: {
      title: 'Scanner'
    }
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes
})

const defaultTitle = 'create-QR-Barcode';
//路由動態更改網頁標題
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : defaultTitle;
  next();
});

export default router