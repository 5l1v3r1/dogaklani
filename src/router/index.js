import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import ViewProfile from '../views/profile/ViewProfile.vue'
import firebase from 'firebase'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/profile/:id',
            name: 'ViewProfile',
            component: ViewProfile,
            meta: {
                requiresAuth: true
            }
        }
    ]
})



router.beforeEach((to, from, next) => {
    //check to see if route requires auth
    if (to.matched.some(rec => rec.meta.requiresAuth)) {
        //check auth state of user
        let user = firebase.auth().currentUser
        if (user) {
            // user signed in , proceed to route
            next()
        } else {
            // no user signed in , redirect to login
            next({ name: 'Login' })
        }
    } else {
        next()
    }
})
export default router