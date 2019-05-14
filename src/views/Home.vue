<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="width:100px;height:100px;margin-top:20%;" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
