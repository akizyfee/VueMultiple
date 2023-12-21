

const routes =[
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard.vue'),
      children: [
        {
          path: "",
          name: "index",
          component: () => import("@/views/dashboard/index.vue"),
        }
      ]
    }
  ]


export default routes
