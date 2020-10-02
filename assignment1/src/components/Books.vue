<template>
    <div class="container mt-2" id="booktable">
        <div class="row">
            <div class="column">
                <div v-if="book.length" class="table-responsive">
                    <table class="table table-striped table-hover">
                    <caption>List of Books</caption>
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Published. Year</th>
                        </tr>
                    </thead>
                    <tbody class="">
                    <tr v-for="(item, index) in book" :key="item.isbn">
                    <th scope="row">{{++index}}</th>
                    <td>{{item.bookname}}</td>
                    <td>{{item.published}}</td>
                    </tr>
                    </tbody>
                    </table>
                </div>
                <div v-else>
                    <h2 class="nobook text-left p-2">No Books Available. Please add some Books</h2>
                </div>
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
    }}    
}
</script>
<style scoped>
#booktable {
    display: flex;
}
.nobook {
    font-size: 1.5em;
}
caption {
    caption-side: top;
}
</style>