import {createRouter, createWebHistory} from "vue-router";
import Login from "@/views/Login.vue";
import Layout from "@/views/Layout.vue";
import ArticleCategory from "@/views/article/ArticleCategory.vue";
import ArticleManage from "@/views/article/ArticleManage.vue";
import UserInfo from "@/views/user/UserInfo.vue";
import UserAvatar from "@/views/user/UserAvatar.vue";
import UserResetPassword from "@/views/user/UserResetPassword.vue";
import ArticlePreview from "@/views/article/ArticlePreview.vue";
import PublicArticle from "@/views/article/PublicArticle.vue";

const routes = [
  {path: '/login', component: Login},
  {
    path: '/',
    redirect: '/article/manage',
    component: Layout,
    children: [
      {path: '/article/category', component: ArticleCategory},
      {path: '/article/manage', name: 'ArticleManage', component: ArticleManage},
      {path: '/user/info', component: UserInfo},
      {path: '/user/avatar', component: UserAvatar},
      {path: '/user/resetPassword', component: UserResetPassword},
      {path: '/article/preview/:id', name: 'ArticlePreview', component: ArticlePreview, props: true }, // 新增文章预览路由
      {path: '/article/public', name: 'PublicArticle', component: PublicArticle}
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router