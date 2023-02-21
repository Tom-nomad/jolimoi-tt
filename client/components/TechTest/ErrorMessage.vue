<template>
  <div class="d-flex justify-center my-3">
    <p class="error-message">{{error}}</p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      default: () => "Sorry! An error occured, please try again later !"
    }
  }
}
</script>

<style>
.error-message {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  color: #FF0000;
}
</style>
