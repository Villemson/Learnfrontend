<template>
  <div>
    <input v-model="tekst" placeholder="Sisesta tekst" />
    <select v-model="haal">
      <option v-for="haal in haaled" :key="haal.id" :value="haal.id">
        {{ haal.nimi }} ({{ haal.meetod }})
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
      haal: '458', // Vaikimisi hääle ID
      haaled: [
        { id: '50', nimi: "Eva", meetod: "foneemHMM (HTS)" },
        { id: '51', nimi: "Tõnu", meetod: "foneemHMM (HTS)" },
        // Siia saab veel lisada hääli
        { id: '458', nimi: "Lee (lapsehääl)", meetod: "foneemDNN (Merlin)" },
        { id: '485', nimi: "Vesta", meetod: "foneemDNN (VITS)" }
      ],
      audioSrc: null,
    };
  },
  methods: {
    async synteesiTekst() {
      if (!this.tekst.trim()) {
        alert('Palun sisesta tekst.');
        return;
      }

      const url = `https://teenus.eki.ee/synthub/?v=${this.haal}&t=${encodeURIComponent(this.tekst)}`;
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          this.audioSrc = data.mp3; 
        } else {
          console.error('Viga päringus:', response);
          alert('Tekkis viga päringus. Palun proovi hiljem uuesti.');
        }
      } catch (error) {
        console.error('Viga päringu tegemisel:', error);
        alert('Tekkis viga päringu tegemisel. Kontrolli oma internetiühendust.');
      }
    }
  }
};
</script>
