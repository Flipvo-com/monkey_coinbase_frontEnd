import {
    createRouter,
    createWebHistory,
    // type  NavigationGuardNext,
    type RouteLocationNormalized,
    type RouteRecordRaw,
    type Router
} from 'vue-router'
import Login from '@/views/LoginView.vue'

import middlewareRegistry from '@/plugins/middlewares/core/middlewareRegistry'
import {middlewarePipeline, parseMiddleware} from '@/plugins/middlewares/core/middlewarePipeline';

// Define custom meta properties
export interface CustomRouteMeta {
	name?: string;
}
export interface MiddlewareContext {
    to: RouteLocationNormalized;
    from: RouteLocationNormalized;
    next: () => Promise<void>; // Ensure next is a Promise-returning function
    router: Router;
    params?: string[];
}

// Create a custom type for routes with custom meta
export  type CustomRouteRecordRaw = RouteRecordRaw & {
	meta?: CustomRouteMeta;
};

const routes: CustomRouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		meta: {
			name: 'home',
			__auth: false
		},
		redirect: {name: 'login'},
		// component: HomeView,
		// children:undefined
	},
	{
		path: '/login',
		name: 'login',
		meta: {
			name: 'login',
			__auth: false
		},
		component: () => import('@/views/LoginView.vue')
	},
	{
		path: '/register',
		name: 'register',
		meta: {
			name: 'register',
			__auth: false
		},
		// redirect: {name: 'login'},
		component: () => import('@/views/RegisterView.vue')
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		meta: {
			name: 'dashboard',
			middleware: ['auth']
		},
		redirect: {name: 'dashboardIndex'},
		component: () => import('@/views/DashboardView.vue'),
		children: [
			{
				path: 'index',
				name: 'dashboardIndex',
				meta: {
					name: 'Home',
					icon: 'fa-duotone fa-home',
					__auth: true
				},
				components: {
					dashboard: () => import('@/views/Dashboard/DashboardIndex.vue')
				}
			},
			{
				path: 'analyse',
				name: 'analyse',
				meta: {
					name: 'Analyse',
					icon: 'fa-duotone fa-chart-line',
					__auth: true
				},
				components: {
					dashboard: () => import('@/views/Dashboard/AnalyseData.vue')
				}
			},
			{
				path: 'investors',
				name: 'investors',
				meta: {
					name: 'Investors',
					icon: 'fa-duotone fa-user-tie',
					__auth: true
				},
				components: {
					dashboard: () => import('@/views/Dashboard/InvestorsView.vue')
				}
			},
			{
				path: 'settings',
				name: 'userSettings',
				meta: {
					name: 'Settings',
					icon: 'fa-duotone fa-cog',
					__auth: true
				},
				components: {
					dashboard: () => import('@/views/Dashboard/UserSettings.vue')
				}
			},


			// todo - old, has all the copy/paste info from terminal
			// {
			// 	path: 'dashboard-settings',
			// 	name: 'dashboardSettings',
			// 	meta: {
			// 		name: 'Dashboard',
			// 		icon: 'fa-duotone fa-tachometer-alt',
			// 		__auth: true
			// 	},
			// 	components: {
			// 		dashboard: () => import('@/views/Dashboard/DashboardSettings.vue')
			// 	}
			// },

			// {
			// 	path: 'insights',
			// 	name: 'insights',
			// 	meta: {
			// 		name: 'Insights',
			// 		icon: 'fa-duotone fa-lightbulb',
			// 		__auth: true
			// 	},
			// 	components: {
			// 		dashboard: () => import('@/views/Dashboard/InsightsView.vue')
			// 	}
			// },

		]
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next) => {
	// If no middleware is specified, proceed to the route
	// console.log('to', to)
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
