<template>
<div class="container-fluid m-0 p-0" id="booktable">
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Vue Router & Vuex</router-link>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ml-auto">
            <router-link class="nav-item nav-link active" to="/">Home</router-link>
            <router-link class="nav-item nav-link" to="/book">Books</router-link>
        </div>
    </div>
  </nav>
</div>
</template>
<script>
export default {
  name: 'Navigaion'
}
</script>
<style scoped>
  .navbar {
    padding: 0.5rem;
  }
</style>