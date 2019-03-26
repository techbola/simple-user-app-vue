
require('./bootstrap');

window.Vue = require('vue');

import Users from './components/Users.vue'
import Test from './components/Test.vue'

import VueRouter from 'vue-router'
import vueResource from 'vue-resource'

Vue.use(VueRouter) 
Vue.use(vueResource) 

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			component: Users
		},
		{
			path: '/test',
			component: Test
		}
	]
});

new Vue({
	router,
    template: `
		<div id="app">
			<ul>
				<li><router-link to="/">Users</router-link></li>
				<li><router-link to="/test">Test</router-link></li>
			</ul>
			<router-view></router-view>
		</div>
    `
}).$mount('#app');
