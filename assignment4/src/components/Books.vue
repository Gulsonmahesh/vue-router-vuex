/* eslint-disable no-unused-vars */
<template> 
  <div class="container-fluid m-0 p-0" id="booktable">
    <div class="d-flex flex-row justify-content-between align-items-center m-2 text-left">
      <h1 class="m-0 d-none d-md-block d-lg-block">Want to add a new book.</h1>
      <button @click.prevent="navigate" class="btn btn-primary mr-1">Add Book</button>
    </div>
    <div v-if="bookdata.length">
      <h2 class="text-left m-2" :style="{ color, fontSize }">Books List - Technology</h2>
      <div class="d-none d-md-block d-lg-block m-2">
          <table class="table">
              <caption>List of Books</caption>
              <thead class="thead-dark">
              <tr>
                  <th scope="col" width="10%">#</th>
                  <th scope="col" class="text-left">Title</th>
                  <th scope="col" width="18%">Publi. Year</th>
                  <th scope="col" width="10%">Price</th>
              </tr>
              </thead>
              <tbody class="">
              <tr v-for="(item) in bookdata" :key="item.id">
                  <td scope="row"><router-link class="nav-item nav-link active p-0"  :to="{ name: 'Viewbook', params: { bookid: item.id } }">{{item.id}}</router-link></td>
                  <td class="text-left">{{ item.bookname }}</td>
                  <td>{{ item.published }}</td>
                  <td>${{ item.price }}</td>
              </tr>
              </tbody>
          </table>
      </div>
      <div class="d-sm-block d-md-none d-lg-none">
        <div class="d-flex flex-column justify-content-between align-items-left m-1" v-for="(item) in bookdata" :key="item.index">
          <div class="card text-left">
            <div class="card-body">
                <h2 class="card-title"><router-link class="nav-item nav-link active p-0"  :to="{ name: 'Viewbook', params: { bookid: item.id } }">{{item.bookname}}</router-link></h2>
                <span class="card-text">{{`Publi.Date: ${item.published}`}}</span>
                <p class="card-text">{{`Price : ${item.price}`}}</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="nobook text-left p-2">
        No Books Available. Please add some Books
      </h2>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';

export default {
  name: "Book",
  setup() {
    let bookdata = ref([]);
    let color = "green";
    let fontSize = "1.5rem";
    const router = useRouter()

    let navigate = () => {
        router.push({ name: 'Addbook' })
    }

    function getBookData() {
      axios.get("http://localhost:3001/books").then((response) => {
        bookdata.value = response.data;
      });
    }
    
    onMounted(async () => {
      await getBookData();
    });

    return {
      bookdata,
      color,
      fontSize,
      navigate
    };
  },
};
</script>
<style scoped>
#booktable {
  text-align: center;
}
.nobook {
  font-size: 1.5em;
}
caption {
  caption-side: top;
}
table thead th {
  vertical-align: initial !important;
}
th {
  color: violet !important;
  font-size: 1.4em;
}
td {
  font-size: 1.4em;
  vertical-align: middle;
}
h1 {
    font-size: 1.5rem;
}
h2 {
    font-size: 1rem;
}
</style>