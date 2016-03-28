<template>
    <ul class="item-grid">
        <li v-for="item in items">
            {{item.title}}
        </li>
    </ul>
</template>

<script>
    import items from '../data/items.json';
    
    export default {
        data: () => {
            return {
                items: items.items
            }
        }
    }
</script>