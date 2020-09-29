<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-2">
                {{title}}
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'Book',
    props : {
        title : Array
    }
}
</script>
<style scoped>
.container {
    display: flex;
}
</style>