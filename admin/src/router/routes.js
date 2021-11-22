const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "posts", component: () => import("pages/posts.vue") },
      { path: "create-post", component: () => import("pages/create-post.vue") },
    ],
  },

  { path: "/login", name: "login", component: () => import("pages/login.vue") },
  {
    path: "/register",
    name: "register",
    component: () => import("pages/register.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
