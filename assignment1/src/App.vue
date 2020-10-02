<template>
  <div id="app">
    <Book :title="book" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Book from './components/Books';
import bookData from './assets/books.json';

// let books = [1,2,3,4,5]
export default {
  name: 'App',
  data () {
    return {
     book : bookData
    }
  },
  components: {
    // HelloWorld, 
    Book
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
