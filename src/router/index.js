import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: '/index',
    name: "index",
    component: () => import('../views/index.vue')
  },
  // {
  // path: "/cs",
  // name: "cs",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  // import(/* webpackChunkName: "about" */ "../views/cs.vue"),
  // },
  {
    path: "/login",
    name: "login",
    component: () => import('../views/login.vue'),
  },
  {
    path: "/register",
    name: "register",
    component: () => import('../views/register.vue'),
  },
  {
    path: "/carts",
    name: "carts",
    component: () => import('../views/carts.vue')
  },
  {
    path: "/callback",
    name: "callback",
    component: () => import('../views/callback.vue')
  },
  {
    path: "/active",
    name: "active",
    component: () => import('../views/active.vue')
  },
  {
    path: "/findPass",
    name: "findPass",
    component: () => import('../views/findPass.vue')
  },
  {
    path: "/myOrder",
    name: "myOrder",
    component: () => import('../views/myOrder.vue'),
    children: [
      {
        path: "/cp",
        name: "cp",
        component: () => import('../views/changePassword.vue')
      },
      {
        path: "/address",
        name: "address",
        component: () => import('../views/address.vue')
      }
    ]
  },
  {
    path: "/pay",
    name: "pay",
    component: () => import('../views/pay.vue'),
    children: [
      {
        path: "/al",
        name: "al",
        component: () => import("../views/alpay.vue")
      },
      {
        path: "/suc",
        name: "suc",
        component: () => import("../views/success.vue")
      },
      {
        path: "/order",
        name: "order",
        component: () => import("../views/order.vue")
      }
    ]
  },
  {
    path: "/详情页1",
    name: "详情页1",
    component: () => import('../views/详情页1.vue')
  },
  {
    path: "/详情页2",
    name: "详情页2",
    component: () => import('../views/详情页2.vue')
  },
  {
    path: "/详情页3",
    name: "详情页3",
    component: () => import('../views/详情页3.vue')
  },
];

const router = new VueRouter({
  routes,
});

export default router;
