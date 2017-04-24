import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)
Vue.use(axios)

import Movie from '../components/pages/movie.vue'

export default new VueRouter ({
    mode: 'history',
    routes: [{
        path: '/movie',
        component: Movie
    }]
})
