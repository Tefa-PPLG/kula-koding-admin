import { createRouter, createWebHistory } from "vue-router";

const Index = () => import("@/views/Index.vue");
const IndexUser = () => import("@/views/user/Index.vue");
const IndexTools = () => import("@/views/tools/Index.vue");
const DetailTools = () => import("@/views/tools/detail.vue");
const Login = () => import("@/views/auth/Login.vue");
const IndexVerifikasi = () => import("@/views/verifikasi/Index.vue");
const IndexProject = () => import("@/views/project/Index.vue");
const DetailProject = () => import("@/views/project/Detail.vue");
const Dashboard = () => import("@/views/Dashboard.vue");
const UploadTools = () => import("@/views/tools/Upload.vue");
const BlogIndex = () => import("@/views/blog/Index.vue");
const UploadBlog = () => import("@/views/blog/Upload.vue");
const UpdateBlog = () => import("@/views/blog/Update.vue");
const PengaturanIndex = () => import("@/views/pengaturan/Index.vue");
const UploadPengaturan = () => import("@/views/pengaturan/Upload.vue");
const UpdatePengaturan = () => import("@/views/pengaturan/Update.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        guestRequired: true,
      },
    },
    {
      path: "/",
      name: "home",
      component: Index,
      meta: {
        authRequired: true,
      },
      children: [
        {
          path: "/user",
          name: "user",
          component: IndexUser,
        },
        {
          path: "/tool",
          name: "tools",
          component: IndexTools,
        },
        {
          path: "/add-tool",
          name: "tools.add",
          component: UploadTools,
        },
        {
          path: "/tool/:id",
          name: "tools.detail",
          component: DetailTools,
        },
        {
          path: "/verifikasi",
          name: "verifikasi",
          component: IndexVerifikasi,
        },
        {
          path: "/project",
          name: "project",
          component: IndexProject,
        },
        {
          path: "/project/:id",
          name: "project.detail",
          component: DetailProject,
        },
        {
          path: "/dashboard",
          name: "dashboard",
          component: Dashboard,
        },
        {
          path: "/blog",
          name: "blog",
          component: BlogIndex,
        },
        {
          path: "/blog/:id",
          name: "blog.detail",
          component: UpdateBlog,
        },
        {
          path: "/add-blog",
          name: "blog.add",
          component: UploadBlog,
        },
        {
          path: "/pengaturan",
          name: "pengaturan",
          component: PengaturanIndex,
        },
        {
          path: "/pengaturan-add",
          name: "pengaturan.add",
          component: UploadPengaturan,
        },
        {
          path: "/pengaturan/:id",
          name: "pengaturan.detail",
          component: UpdatePengaturan,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("access_token");
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (!isLoggedIn) {
      next("/login");
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guestRequired)) {
    if (!isLoggedIn) {
      next();
    } else {
      next("/dashboard");
    }
  } else {
    next();
  }
});

export default router;
