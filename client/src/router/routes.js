const routes = [
  {
    path: "/",
    component: () => import("pages/Index.vue"),
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

  {
    path: "/authorpage/:id",
    name: "author-page",
    component: () => import("pages/author-page.vue"),
  },
  {
    path: "/searchpage/:keyword",
    name: "searchpage",
    component: () => import("pages/searchPage.vue"),
  },
  {
    path: "/category/:id",
    props: true,
    name: "category",
    component: () => import("pages/category.vue"),
  },
  {
    path: "/single/:id",
    name: "single",
    component: () => import("pages/detail-page.vue"),
  },
  {
    path: "/tags/:id",
    name: "tags",
    component: () => import("pages/tags.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
