import Vue from "vue";
import VueRouter from "vue-router";
import home from "./views/home";
import portfolio from "./views/portfolio";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path:"/", component: home},
        {path:"/home", component: home},
        {path:"/portfolio", component: portfolio}
    ]
})

export default router;