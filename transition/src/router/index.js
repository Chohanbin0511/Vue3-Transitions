import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'MainView',
			component: () => import('@/views/MainView.vue'),
		},
		{
			path: '/sample/transitionsView',
			name: 'TransitionsView',
			component: () => import('@/views/transitions/TransitionsView.vue'),
		},
		{
			path: '/sample/scrollPageView',
			name: 'ScrollPageView',
			component: () => import('@/views/transitions/ScrollView.vue'),
		},
	],
});

export default router;
