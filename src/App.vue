<script setup>
import { ref, computed } from 'vue';
import ItemList from './ItemList.vue';
let message = ref('Hello vue');
let i = 0;
let items = ref([
    {id:i++, name: 'piim', isDone: true},
    {id:i++, name: 'viin', isDone: false},
    {id:i++, name: 'sai', isDone: true},
]);
function add(){
    if(message.value.trim() !== ''){
        items.value.push({id:i++, name: message.value.trim(), isDone: false});
    }
    message.value = '';
}
let doneItems = computed(() => {
    return items.value.filter(item => item.isDone);
});

let toDoItems = computed(() => {
    return items.value.filter(item => !item.isDone);
});
</script>

<template>
    <div class="container mt-3">
        <input class="input" v-model="message" @keydown.enter="add">
        <button class="button" @click="add">Add</button>
        <div class="content">
           <ItemList title="All Items" :items="items"></ItemList>
           <ItemList title="Done Items" :items="doneItems"></ItemList>
           <ItemList title="ToDo Items" :items="toDoItems"></ItemList>
        </div>
    </div>
</template>