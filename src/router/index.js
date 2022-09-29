import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
    {
        path: "/",
        name: "frame",
        meta: {
            "name": "frame"
        },
        component: () => import('../views/frame/Frame.vue'),
        redirect: "dashboard",
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: () => import('../views/dashboard/Dashboard.vue'),
            },
            // {
            //     path: "metric-history",
            //     name: "metric-history",
            //     component: () => import('../views/dashboard/Dashboard.vue'),
            // },
            {
                path: "metrics",
                name: "metrics",
                component: () => import('../views/metrics/Metrics.vue'),
            },
            {
                path: "metric-history",
                name: "metric-history",
                component: () => import('../views/metrics/History.vue'),
            },
            {
                path: "subscribe",
                name: "subscribe",
                component: () => import('../views/subscribe/Subscribe.vue'),
            },
            {
                path: "alerts",
                name: "alerts",
                component: () => import('../views/alerts/Alerts.vue'),
            },
            {
                path: "subscribe-add",
                name: "subscribe-add",
                component: () => import('../views/subscribe/Add.vue'),
            },
            {
                path: "subscribe-update",
                name: "subscribe-update",
                component: () => import('../views/subscribe/Update.vue'),
            }
        ]
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
