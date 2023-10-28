import Vue from 'vue'
import Router  from 'vue-router'
import Dashboard from '@/pages/dashboard.vue'
import Login from './pages/index.vue'
import Admin from '@/pages/admin.vue'

Vue.use(Router)

const routes = () => {
    const route = [
        {path: '/login', name: 'login', component: Login},
        {path: '/dashboard', name: 'dashboard', component: Dashboard},
        {path: '/admin', name: 'name', component: Admin}
    ]
    return route
}

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: routes()
    })
}


