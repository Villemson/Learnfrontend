<template>
    <div>
      <input v-model="tekst" placeholder="Sisesta tekst">
      <select v-model="haal">
        <option v-for="haal in haaled" :key="haal.id" :value="haal.id">
          {{ haal.nimi }}
        </option>
      </select>
      <button @click="synteesiTekst">Kõnesüntees</button>
      <audio v-if="audioSrc" :src="audioSrc" controls></audio>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tekst: '',
        haal: '', // hääle ID
        haaled: [
          // Siia hääled
        ],
        audioSrc: null,
      };
    },
    methods: {
      async synteesiTekst() {
        const url = `https://teenus.eki.ee/synthub/?v=${this.haal}&t=${encodeURIComponent(this.tekst)}`;
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
                       this.audioSrc = data.mp3; 
          } else {
            console.error('Viga päringus:', response);
          }
        } catch (error) {
          console.error('Viga päringu tegemisel:', error);
        }
      }
    }
  };
  </script>
  