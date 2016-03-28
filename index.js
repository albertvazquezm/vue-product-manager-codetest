// main.js
var Vue = require('vue');

var App = require('./components/app.vue');
var ItemList = require('./components/item-list.vue');
var ItemInList = require('./components/item-in-list.vue');

new Vue({
    el: 'body',
    components: {
        app: App
    }
});