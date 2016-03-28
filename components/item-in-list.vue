<template>
  <article class="item-in-list">
    <title>{{item.title}}</title>
    <p class="description">{{item.description}}</title>
    <span class="price">{{item.price}}</span>
    <span class="email">{{item.email}}</span>
  </article>
</template>

<script>
    export default {
        props: [
            'item'
        ]
    }
</script>