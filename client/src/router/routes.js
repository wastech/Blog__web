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

  {
    path: "/category",
    name: "category",
    component: () => import("pages/category.vue"),
  },
  {
    path: "/tags",
    name: "tags",
    component: () => import("pages/tags.vue"),
  },
  {
    path: "/author-page",
    name: "author-page",
    component: () => import("pages/author-page.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("pages/contact.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("pages/about.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
