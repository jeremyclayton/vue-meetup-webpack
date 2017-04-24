<template>
<div id="app">
    <h1>Anything</h1>
    <router-link to="/">Home</router-link>
    <div v-for="movie in oneMovie">
        <p>{{movie.Title}}</p>
    </div>
</div>
</template>

<script>
import store from '../../store.js'
import axios from 'axios'
export default {
    data (){
        return {
            movie: store.selectedMovie,
            oneMovie: []
        }
    },
    created (){
        axios.get(`http://www.omdbapi.com/?s=${this.movie}`).then(response => {
            console.log(response.data);
            this.oneMovie= response.data
        })
    }
}
</script>

<style lang="css">
</style>
