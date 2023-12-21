import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router";

const routes_merchant = [
    {
        path: "a/text",
        name: "text",
        component: () => import("../views/Text.vue"),
    },
]

routes[1].children = routes[1].children.concat(routes_merchant)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});


export default  router