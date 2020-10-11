import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: () => ({
    books: []
  }),
  mutations: {
    GET_BOOK(state, bookId = null) {
      let url = 'http://localhost:3001/books';
      if(bookId && bookId.bookid) {
        url = `${url}/${bookId.bookid}`;
      }
      console.log(url);
      axios.get(url).then((response) => {
        state.books = response.data;
      });
    },
    ADD_Book(state,data) {
      axios.post('http://localhost:3001/books', data).then( response => {
        console.log(response);
        if(response.status === 201) {
          state.books.push(data);
        }
      });
    }
  },
  actions: {
    getbook({commit}, data) {
      commit('GET_BOOK', data);
    },
    addbook({commit}, data) {
      commit('ADD_Book', data);
    }

  },
  modules: {
  }
})
