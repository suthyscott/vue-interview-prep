import Landing from "./components/Landing.vue"
import Home from "./components/Home.vue"
import { createMemoryHistory, createRouter } from "vue-router"

const routes = [
    { path: "/", component: Landing },
    { path: "/home", component: Home }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router
