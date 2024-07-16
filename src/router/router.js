import {createRouter, createWebHistory} from "vue-router";
import MainLayout from "@/layout/MainLayout.vue";
import HomePage from "@/pages/HomePage.vue";


const ROOT_URL = "/";
const routes = [

    // Dashboard Panel Layout
    {
        path: ROOT_URL, name: 'Layout', component: MainLayout,
        children: [
            {path:'', name: 'HomePage', component: HomePage},
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
