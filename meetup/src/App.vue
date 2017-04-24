<template>
  <div id="app">
      <div class="container">
          <form>
        <label for="search">Search OMDB</label>
        <input type="text" name="search" value="" v-model="movie">
        <button type="button" name="searchButton" v-on:click="search(movie)">Search</button>

        <router-link to="movie">Go To Next Page</router-link>
        <div v-for="movie in movieResult">
            <router-link to="movie"><h2 v-on:click="titleClick(movie)">{{movie.Title}}</h2></router-link>

            <img :src="movie.Poster" alt="">

        </div>
        <router-view></router-view>
      </form>

      </div>
  </div>
</template>

<script>
// console.log('something');
import axios from 'axios'
import store from './store.js'
export default {
    data (){
        return {
            movie: '',
            movieResult: []
        }
    },
    // created (){
    //     axios.get(`http://www.omdbapi.com/?s=Star+Wars`).then(response => {
    //         console.log(response.data);
    //         // this.movies = response.data
    //     })
    // }
    methods: {
        search: function (movie) {
            axios.get(`http://www.omdbapi.com/?s=${this.movie}`).then(response => {
                // console.log(response.data);
                this.movieResult = response.data.Search;
            })
        },
        titleClick(movie){
            store.selectedMovie = this.movie;
        }
    }
}
</script>

<style lang="scss">

</style>
