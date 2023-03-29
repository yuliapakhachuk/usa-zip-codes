import HomePage from "./components/HomePage.vue";
import InfoPage from "./components/InfoPage.vue";
import ErrorPage from "./components/ErrorPage.vue"
import * as VueRouter from 'vue-router';


const routes = [
    { 
        path: '/', 
        component: HomePage,
        name: "homepage"
    },
    { 
        path: '/info/:code', 
        component: InfoPage,
        name: "info"
    },
    { 
        path: "/:catchAll(.*)", 
        component: ErrorPage,
    },

]

const router = VueRouter.createRouter({ 
    history: VueRouter.createWebHistory(),
    routes 
});

export default router;
// routes: [
//     {
//       path: "/",
//       children: [
//         {
//           path: "",
//           name: "home",
//           component: () => import("@/views/HomeView.vue"),
//         },
//         {
//           path: "contact",
//           name: "contact",
//           // route level code-splitting
//           // this generates a separate chunk (About.[hash].js) for this route
//           // which is lazy-loaded when the route is visited.
//           component: () => import("@/views/ContactView.vue"),
//         },
//         {
//           path: "details/:id",
//           name: "details",
//           component: () => import("@/views/DetailsView.vue"),
//         },
//       ],