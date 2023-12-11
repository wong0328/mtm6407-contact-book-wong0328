import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createRouter, createWebHashHistory } from "vue-router";

import List from "./views/List.vue";
import Detail from "./views/Detail.vue";
import Edit from "./views/Edit.vue";
import Add from "./views/Add.vue";

const routes = [
  { path: "/", component: List },
  { path: "/detail/:id", component: Detail, props: true },
  { path: "/add", component: Add },
  { path: "/edit/:id", component: Edit, props: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

createApp(App).use(router).mount("#app");
