<template>
  <div id="headercontainer" class="container mb-3">
    <div class="row">
      <div class="column column-12">
        {{pageContent}}
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