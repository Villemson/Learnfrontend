<script setup>
defineProps(['title', 'items']);
</script>

<template>
    <h1>All Items</h1>
    <ul>
        <li v-for="item in items" :key="item.id">
            {{ item.name }}
            <input type="checkbox" v-model="item.isDone">
        </li>
    </ul>
</template>