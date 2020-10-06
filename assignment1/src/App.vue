<template>
  <div id="app">
    <HeaderComp :includeClass= "true" :headertext="msg" />
    <hr class="border">
    <Newbook :bookdata="newbookinfo" v-if="newbookstatus" />
    <Bookform @addbook="addbook"/>
    <Book :title="book" />
  </div>
</template>

<script>
import Book from './components/Books';
import Bookform from './components/Bookform';
import HeaderComp from './components/Header';
import Newbook from './components/Newbook';
import axios from 'axios';

export default {
  name: 'App',
  data () {
    return {
     book : [],
     msg: 'Demonstration of Passing data between components, style demo',
     newbookinfo: null,
     newbookstatus: false
    }
  },
  components: {
    Bookform, 
    Book,
    HeaderComp,
    Newbook
  },
  mounted() {
    this.getBookData();
  },
  methods: {
    getBookData() {
      axios.get('http://localhost:3001/books').then(bookdata => {
        this.book = bookdata.data;
      });
    },
    addbook(data) {
      let alreadyExist = this.book.filter(book => {
        return book.bookname === data[0] && book.published === data[1];
      });
      if (this.book.length && alreadyExist.length) {
        alert('Book already Exit');
        return false;
      } else {
        let newBook = {
          "bookname": data[0],
          "published": data[1],
          "price": data[2],
        }
        axios.post('http://localhost:3001/books', newBook).then (Response => {
          console.log(Response);
          if(Response.status === 201) {
            this.newbookinfo = newBook;
            console.log(this.newbookinfo);
            this.newbookstatus = true;
            this.book.unshift(newBook);
          } else {
            alert('Unable to Add New Book');
          }
        })
                
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
