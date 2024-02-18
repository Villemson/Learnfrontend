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
      // Read existing names
      let names = JSON.parse(localStorage.getItem('names')) || [];
      // Check if the array already has 10 items
      if (names.length >= 10) {
        // Remove the oldest item
        names.shift();
      }
      // Add the new name
      names.push(this.kasutajaNimi);
      // Save the updated array
      localStorage.setItem('names', JSON.stringify(names));
      alert('Nimi salvestatud!');
      // Optionally clear the input
      this.kasutajaNimi = '';
    }
  },
  mounted() {
    // Optionally load names on component mount
    // This example just loads the last saved name, but you can adjust as needed
    let names = JSON.parse(localStorage.getItem('names')) || [];
    if (names.length > 0) {
      this.kasutajaNimi = names[names.length - 1];
    }
  },
};
</script>
