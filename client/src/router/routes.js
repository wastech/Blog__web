const routes = [
  {
    path: "/",
    component: () => import("pages/Index.vue"),
  },

  {
    path: "/single",
    name: "single",
    component: () => import("pages/detail-page.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
