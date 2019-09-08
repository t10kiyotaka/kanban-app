<template>
  <div>
    <div
      v-if="error"
      class="error"
      >
      <p class="display">Unexpected error occured. Please report to the application owner.</p>
      <hr>
      <p class="message">Error message: {{ error.message }}</p>
      <p class="info">Error information: {{ info }}</p>
      <p class="snack">Error detail: {{ error.snack }}</p>
    </div>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script>
export default {
  name: 'ErrorBoundary',

  data() {
    return {
      error: null,
      info: null
    }
  },

  errorCaptured(err, vm, info) {
    this.error = err
    this.info = info
  }
}
</script>

<style scoped>
.error {
  color: red;
  text-align: left;
}
</style>