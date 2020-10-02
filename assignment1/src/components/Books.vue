<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <table class="table table-striped table-hover table-responsive">
                     <caption>List of Books</caption>
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Isbn</th>
                        <th scope="col">Publi. Year</th>
                        </tr>
                    </thead>
                    <tbody class="">
                    <tr v-for="(item) in book" :key="item.isbn">
                    <th scope="row">1</th>
                    <td>{{item.author}}</td>
                    <td>{{item.isbn}}</td>
                    <td>{{item.published}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Book',
    props : {
        title : Object
    },
    data () {
    return {
     book : this.title.books
    }
  }
}
</script>
<style scoped>
.container {
    display: flex;
}
caption {
    caption-side: top;
}
</style>