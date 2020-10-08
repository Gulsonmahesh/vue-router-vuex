<template>
  <div class="container-fluid m-5 p-0">
    <div class="row">
      <div class="column column-12">
        <form class="form">
            <div class="form-group d-block">
                <label for="booktitle" class="mr-5">Enter Book Title</label>
                <input autocomplete="false" v-model.trim="formData.bookname" type="text" class="form-control" id="booktitle" placeholder="Enter Book Title">
            </div>
            <div class="form-group d-block">
                <label for="bookyear" class="mr-1">Enter Publication Year</label>
                <input autocomplete="false" v-model.trim="formData.bookyear" type="number" min="2000" max="9999" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(formData.value.length==4) return false;" class="form-control" id="bookyear" placeholder="Published Year" />
            </div>
            <div class="form-group d-block">
                <label for="price" class="mr-1">Enter Price</label>
                <input autocomplete="false" v-model.trim="formData.price" type="number" min="1" max="9999" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(formData.value.length==4) return false;" class="form-control" id="price" placeholder="Price" />
            </div>
            <button @click.prevent="addbook" class="btn btn-primary">Add Book</button>
        </form>        
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, watch } from 'vue';

export default {
  name: "Bookform",
  setup(emit) {
    let formData = reactive({
      bookname: null,
      bookyear : 2000,
      price: 1
    })
    function addbook() {
      if(formData.bookname === null || formData.bookyear === null || formData.price === null) {
        alert('Please Enter all the details');
        return false;
      } else {
        watch(() => {
          emit('addbook', [formData.bookname, formData.bookyear, formData.price]);
        formData.bookname = formData.bookyear = formData.price = '';
        })
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
</style>>