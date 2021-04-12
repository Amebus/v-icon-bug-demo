<template>
  <v-app>
    <v-main>
      <v-btn @click="onClickElDocumentCreateElement">el: document.createElement('div')</v-btn>
      
      <v-btn @click="onClickElString">el: '#thumbs-up__container'</v-btn>

      <div id="thumbs-up__container"></div>
    </v-main>
  </v-app>
</template>

<script>
import ThumbsUp from './components/thumbs-up';
import Vue from 'vue';

export default {
  components: {
    ThumbsUp,
  },
   methods: {
    onClickElDocumentCreateElement: function() {
      new (Vue.extend(ThumbsUp))({
        el: document.createElement('div')
      });
    },
    onClickElString: function() {
      new (Vue.extend(ThumbsUp))({
        el: '#thumbs-up__container'
      });
    }
  }
};
</script>

<style>
#thumbs-up__container {
  border: 2px solid black;
  height: 100px;
  width: 100px;
}
</style>