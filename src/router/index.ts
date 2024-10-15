import {
    createRouter,
    createWebHistory,
    // type  NavigationGuardNext,
    type RouteLocationNormalized,
    type RouteRecordRaw
} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Login from '@/views/LoginView.vue'

import middlewareRegistry from '../../src/router/middleware/core/middlewareRegistry'
import {middlewarePipeline, parseMiddleware} from '@/router/middleware/core/middlewarePipeline';


const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        name: 'home',
        meta: {
            __name: 'home',
            __auth: false
        },
        component: HomeView,
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            __name: 'login',
            __auth: false
        },
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        meta: {
            __name: 'register',
            __auth: false
        },
        component: () => import('@/views/RegisterView.vue')
    }
    // {
    //     path: '/dashboard',
    //     name: 'dashboard',
    //     meta: {
    //         __name: 'dashboard',
    //         __auth: true
    //     },
    //     redirect: {name: 'monitor'},
    //     component: () => import('@/views/DashboardView.vue'),
    //     children: [
    //     ]
    // },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next) => {
    // If no middleware is specified, proceed to the route
    if (!to.meta.middleware) {
        return next();
    }

    // Parse and prepare middleware functions
    const middleware = (to.meta.middleware as string[]).map((middlewareWithParams) => {
        const {name, parsedParams} = parseMiddleware(middlewareWithParams);
        const middlewareFunction = middlewareRegistry[name];

        if (!middlewareFunction) {
            // Fallback middleware that simply calls `next`
            return (context: any) => context.next();
        }
        // Return middleware function wrapped with context
        return (context: any) => middlewareFunction({...context, params: parsedParams});
    });

    const context = {
        to,
        next: () => Promise.resolve(), // Ensure next is a Promise-returning function
        from,
        router
    };

    // Execute middleware pipeline
    return middlewarePipeline(context, middleware, 0)
        .then(() => next()) // Continue navigation if all middleware passed
        .catch(() => next(false)); // Abort navigation if any middleware fails
});
export default router
