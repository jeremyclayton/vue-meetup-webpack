import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue ({
    el: '#app',
    router,
    render: h => h(App)
});
// const app = new Vue ({
//     router,
//     render: h => h(App)
// }).$mount('#app')
