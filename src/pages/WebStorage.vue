<template>
  <div>
    <input v-model="kasutajaNimi" placeholder="Sisesta oma nimi">
    <button @click="saveName">Salvesta Nimi</button>
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
    saveName() {
      let names = JSON.parse(localStorage.getItem('names')) || [];
      names.push(this.kasutajaNimi);
      localStorage.setItem('names', JSON.stringify(names));
      alert('Nimi salvestatud!');
      this.kasutajaNimi = '';
    }
  },
  mounted() {
    let names = JSON.parse(localStorage.getItem('names')) || [];
    if (names.length > 0) {
      this.kasutajaNimi = names[names.length - 1];
    }
  },
};
</script>
