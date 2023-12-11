const { createApp } = Vue;

createApp({
  data() {
    return {
      images: [
        './assets/images/Kaisa_0.jpg',
        './assets/images/Irelia_0.jpg',
        './assets/images/Sylas_0.jpg',
        './assets/images/Renata_0.jpg',
      ],
      skins: [
        './assets/images/Kaisa_1.jpg',
        './assets/images/Irelia_1.jpg',
        './assets/images/Sylas_1.jpg',
        './assets/images/Renata_1.jpg',
      ],
      links: [
        'https://universe.leagueoflegends.com/en_US/story/champion/kaisa/',
        'https://universe.leagueoflegends.com/en_US/story/champion/irelia/',
        'https://universe.leagueoflegends.com/en_US/story/champion/sylas/',
        'https://universe.leagueoflegends.com/en_US/story/champion/renataglasc/',
      ],
      hoveredIndex: null,
    };
  },
  methods: {
    changeImage(index) {
      this.hoveredIndex = index;
    },
    resetImage() {
      this.hoveredIndex = null;
    },
    getImage(index) {
      return this.hoveredIndex === index ? this.skins[index] : this.images[index];
    },
    openLink(index) {
      window.open(this.links[index], '_blank');
    },
  },
}).mount('#app');
