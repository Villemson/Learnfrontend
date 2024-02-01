<script setup>
import { ref } from 'vue';
let count = ref(0);
let message = ref('Hello vue');
</script>

<template>
    <div class="container mt-3">
        <input class="input" v-bind:value="message">
        <button class="button" v-on:click="count++">{{ count }}</button>
    </div>
</template>