<template>
    <div>
    <div class="container" id="booktable">
        <div class="row">
            <div class="column">
                <table class="table table-striped table-hover table-responsive">
                     <caption>List of Books</caption>
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Isbn</th>
                        <th scope="col">Published. Year</th>
                        </tr>
                    </thead>
                    <tbody class="">
                    <tr v-for="(item, index) in book" :key="item.isbn">
                    <th scope="row">{{++index}}</th>
                    <td>{{item.author}}</td>
                    <td>{{item.isbn}}</td>
                    <td>{{item.published}}</td>
                    </tr>
                    </tbody>
                </table>
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
caption {
    caption-side: top;
}
</style>