<template>
  <div id="app">
    <HeaderComp :headertext="msg" />
    <Bookform />
    <Book :title="book" />
  </div>
</template>

<script>
import Book from './components/Books';
import Bookform from './components/Bookform';
import bookData from './assets/books.json';
import HeaderComp from './components/Header';

export default {
  name: 'App',
  data () {
    return {
     book : bookData,
     msg: 'Demonstration of Directives and Data Bindings'
    }
  },
  components: {
    Bookform, 
    Book,
    HeaderComp
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
  /* text-align: center; */
  color: #2c3e50;  
  margin: 10px;
}
</style>
