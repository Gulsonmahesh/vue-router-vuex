<template>
  <div class="container-fluid m-0 p-0">
    <form class="form m-2">
        <div class="form-group d-block">
            <label for="booktitle" class="mr-5">Enter Book Title</label>
            <input autocomplete="false" v-model.trim="formData.bookname" type="text" class="form-control" id="booktitle" placeholder="Enter Book Title">
        </div>
        <div class="form-group d-block">
            <label for="bookyear" class="mr-1">Enter Publication Year</label>
            <input autocomplete="false" v-model.trim="formData.published" type="number" min="2000" max="9999" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(formData.value.length==4) return false;" class="form-control" id="bookyear" placeholder="Published Year" />
        </div>
        <div class="form-group d-block">
            <label for="price" class="mr-1">Enter Price</label>
            <input autocomplete="false" v-model.trim="formData.price" type="number" min="100" max="9999" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(formData.value.length==4) return false;" class="form-control" id="price" placeholder="Price" />
        </div>
        <button @click.prevent="addbook" class="btn btn-primary">Add Book</button>
    </form>
  </div>
</template>
<script>
import { reactive } from 'vue';
import { onBeforeRouteLeave, useRouter } from 'vue-router';
import axios from 'axios';

export default {
  name: "Bookform",
  setup() {
    let formData = reactive({
      bookname: null,
      published : '',
      price: ''
    });

    const innerRouter = useRouter();

    onBeforeRouteLeave((to, from, next) => {
      if(formData.bookname === null && formData.published === '' && formData.price === '') {
        next();
      } else {
        if (window.confirm('Do you want to skip adding the book')) {
         next();
        }
      }
    })

    function addbook() {
      console.log(formData);
      if(formData.bookname === null || formData.published === '' || formData.price === '') {
        alert('Please Enter all the details');
        return false;
      } else {
        axios.post('http://localhost:3001/books', formData).then( response => {
          console.log(response);
          if(response.status === 201) {
            formData.bookname = null; formData.published = '';formData.price = '';
            innerRouter.push({ name: 'Book' });
          } else {
            alert('Unable to Insert Data');
            return false;
          }
        });
      }
    }
    
    return {
      formData,
      addbook
    }
  }
};
</script>
<style scoped>
label {
  color: red;
}
form {
  width: 50%;
}
</style>>