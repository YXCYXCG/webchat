<template>
  <router-view/>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

export default {
  name: 'APP'
}
</script>

<style>
body {
  background-image: url(@/assets/images/background.png);
  background-size: cover;
}
</style>
