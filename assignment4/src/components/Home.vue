<template>
  <div id="headercontainer" class="container-fluid mb-3">
    <div class="row">
      <div class="column column-12 mt-3">
        <h1>{{pageContent}}</h1>
      </div>
    </div>
    <div class="row">
      <div class="column column-12 mt-3 text-left">
        <h2><span class="my-4">For UI design I used Bootstrap included from CDN</span></h2>
      </div>
    </div>
    <div class="row">
      <div class="column column-12 mt-3 text-left">
        <h3><span class="my-4">Apart from first 3 assignment I implemented the below concepts for Assignment 4</span></h3>
        <ol class="mt-3">
          <li><h3>Vue Version 3</h3></li>
          <li><h3>Vue 3 Composition Api</h3></li>
          <li><h3>Vue Router</h3></li>
          <li><h3>Vue Ex for State Management</h3></li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  name: "Home",
  setup() {
    let pageContent = ref('Welcome to 4th Assignment');
    return {
      pageContent
    }
  }
}
</script>