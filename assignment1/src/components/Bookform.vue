<template>
  <div class="container">
    <div class="row">
      <div class="column column-12">
        <form class="form">
            <div class="form-group mb-2">
                <label for="booktitle" class="mr-5">Enter Book Title</label>
                <input type="text" class="form-control" id="booktitle" placeholder="Enter Book Title">
            </div>
            <div class="form-group mb-2">
                <label for="bookyear" class="mr-1">Enter Publication Year</label>
                <input type="number" min="1000" max="9999" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==4) return false;" class="form-control" id="bookyear" placeholder="Published Year" />
            </div>            
        </form>
        <button @click="addbook" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Bookform",
  methods: {
      addbook() {
          alert('test');
      }
  }
};
</script>
<style scoped>
</style>>