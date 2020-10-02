<template>
    <div class="container mx-auto">
        <div class="row">
            <div class="column">
                <h1 class="text-left">{{headerMessage}}</h1>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
    name: 'HeaderComp',
    props: {
        headertext: String
    },
    data () {
        return {
            headerMessage: this.headertext
        }
    }
}
</script>
<style scoped>
h1 {
    font-size: 2rem;
}
</style>