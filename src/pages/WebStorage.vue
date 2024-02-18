<template>
    <div>
      <input v-model="kasutajaNimi" placeholder="Sisesta oma nimi">
      <button @click="salvestaNimi">Salvesta Nimi</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        kasutajaNimi: '',
      };
    },
    methods: {
      salvestaNimi() {
        localStorage.setItem('nimi', this.kasutajaNimi);
        alert('Nimi salvestatud!');
      }
    },
    mounted() {
      if (localStorage.getItem('nimi')) {
        this.kasutajaNimi = localStorage.getItem('nimi');
      }
    },
  };
  </script>
  