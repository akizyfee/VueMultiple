import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router";
const routes_admin = [

]

routes[1].children = routes[1].children.concat(routes_admin)

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});


export function installRouter(app) {
    app.use(router);
}