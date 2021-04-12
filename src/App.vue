<template>
  <v-app>
    <v-main>
      <HelloWorld/>
      <v-btn @click="onClickElDocumentCreateElement">el: document.createElement('div')</v-btn>
      <v-btn @click="onClickElString">el: 'div'</v-btn>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Vue from 'vue';

export default {
  components: {
    HelloWorld,
  },
   methods: {
    onClickElDocumentCreateElement: function() {
      new (Vue.extend(HelloWorld))({
        el: document.createElement('div')
      });
    },
    onClickElString: function() {
      new (Vue.extend(HelloWorld))({
        el: 'div'
      });
    }
  }
};
</script>
