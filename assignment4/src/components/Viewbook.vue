/* eslint-disable no-unused-vars */
<template> 
  <div class="container-fluid m-0 p-0" id="viewbook">
    <div class="jumbotron">
    <h1 class="display-3">{{bookdata.bookname}}</h1>
    <p v-if="bookdata.description" class="lead-small mb-2"><span class="mr-2 d-inline">Description :</span>{{bookdata.description}}</p>
    <p v-if="bookdata.subtitle" class="lead-small mb-2"><span class="mr-2 d-inline">Sub Title:</span>{{bookdata.subtitle}}</p>
    <p v-if="bookdata.author" class="lead-small mb-2"><span class="mr-2 d-inline">Author:</span>{{bookdata.author}}</p>
    <p v-if="bookdata.publisher" class="lead-small mb-2"><span class="mr-2 d-inline">Publisher:</span> {{bookdata.publisher}}</p>
    <p v-if="bookdata.published" class="lead-small mb-2"><span class="mr-2 d-inline">Published on:</span>{{bookdata.published}}</p>
    <p v-if="bookdata.published" class="lead-small mb-2"><span class="mr-2 d-inline">Price:</span>{{bookdata.price}}</p>
    <hr class="my-4">
    <p v-if="bookdata.website">{{bookdata.website}}</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button" @click.prevent="returntobooks">Go back</a>
    </p>
  </div>
  </div>
</template>
<script>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from 'vue-router';

export default {
  name: "Viewbook",
  setup() {
    let bookdata = ref([]);
    const router = useRouter()
    const route = useRoute();

    const bookId = computed( () => route.params.bookid);
    let navigate = () => {
        router.push({ name: 'Addbook' })
    }

    function getBookData() {
      axios.get(`http://localhost:3001/books/${bookId.value}`).then((response) => {
        bookdata.value = response.data;
      });
    }
    
    function returntobooks() {
      router.push({ name: 'Book' });
    }

    onMounted(async () => {
      await getBookData();
    });

    return {
      bookId,
      bookdata,
      navigate,
      returntobooks,
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
}
h1 {
    font-size: 1.5rem;
}
h2 {
    font-size: 1rem;
}
</style>