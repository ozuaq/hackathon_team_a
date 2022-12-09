import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.11/dist/vue.esm.browser.js'

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

new Vue({ el: '#components-demo' })
