import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router";
const routes_merchant = [

]

routes[1].children = routes[1].children.concat(routes_merchant)

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});


export function installRouter(app) {
    app.use(router);
}