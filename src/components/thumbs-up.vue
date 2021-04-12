<template>
  <div class="thumbs-up__element">
    <v-icon>fas fa-thumbs-up</v-icon>
  </div>
</template>

<script>
  export default {
    mounted: function() {
      const element = document.getElementById('thumbs-up__container')
      if (element !== null)
        element.insertAdjacentElement('afterbegin', this.$el);
    }
  }
</script>
