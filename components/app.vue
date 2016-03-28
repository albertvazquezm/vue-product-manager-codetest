<template>
    <item-search-bar></item-search-bar>
    <item-list></item-list>
</template>

<script>
    import items from '../data/items.json';
    
    import ItemList from './item-list.vue';
    import ItemSearchBar from './item-list-search-bar.vue';
    
    export default {
        components: {
            itemList: ItemList,
            itemSearchBar: ItemSearchBar,
        }
    }
</script>