
require('./bootstrap');

window.Vue = require('vue');

import vueResource from 'vue-resource'

Vue.use(vueResource) 

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('test', require('./components/Test.vue').default);
Vue.component('users', require('./components/Users.vue').default);

const app = new Vue({
    el: '#app'
});
