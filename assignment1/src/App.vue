<template>
  <div id="app">
    <HeaderComp :headertext="msg" />
    <Bookform @addbook="addbook"/>
    <Book :title="book" />
  </div>
</template>

<script>
import Book from './components/Books';
import Bookform from './components/Bookform';
import HeaderComp from './components/Header';

export default {
  name: 'App',
  data () {
    return {
     book : {"books": []},
     msg: 'Demonstration of Directives and Data Bindings',
    }
  },
  components: {
    Bookform, 
    Book,
    HeaderComp
  },
  methods: {
    addbook(data) {
      let alreadyExist = this.book.books.filter(book => {
        return book.bookname === data[0] && book.published === data[1];
      });
      if (this.book.books.length && alreadyExist.length) {
        alert('Book already Exit');
        return false;
      } else {
        let newBook = {
          "bookname": data[0],
          "published": data[1]
        }
        this.book.books.push(newBook);
        alreadyExist = false;
      }
    }
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
  text-align: left;
  color: #2c3e50;  
  margin: 10px;
}
</style>
