import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.11/dist/vue.esm.browser.js'

var app = new Vue({
  delimiters: ['[[', ']]'],
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
