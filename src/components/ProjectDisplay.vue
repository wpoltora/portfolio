<template>
    <div class="project-display">
        <div class="desc-container">        
            <div class="desc">
                <h2>{{ title }}</h2>
                <p>{{ desc }}</p>
                <ButtonLink :href="link">LINK</ButtonLink>
                <div class="tech-stack">
                  <div v-for="tech in techStack" :key="tech.name" class="tech-item">
                    <i :class="['fa-brands', tech.icon]"></i> {{ tech.name }}
                  </div>
                </div>
            </div>
            <CustomCarousel class="custom-carousel" :photoList="option"/> 
        </div>
    </div>
</template>
  
  <script>
  import CustomCarousel from './CustomCarousel.vue'
  import ButtonLink from './ButtonLink.vue';
  
  export default {
    name: 'ProjectDisplay',
    props: {
      option: String,
    },
    components: {
        CustomCarousel,
        ButtonLink,
    },
    computed: {
    title() {
      switch (this.option) {
        case 'siok':
          return this.$t('strings.siokTitle');
        case 'stella':
          return this.$t('strings.stellaTitle');
        default:
          return 'Unknown Project';
      }
    },
    desc() {
      switch (this.option) {
        case 'siok':
          return this.$t('strings.siokDesc');
        case 'stella':
          return this.$t('strings.stellaDesc');
        default:
          return 'No description available.';
      }
    },
    link() {
      switch (this.option) {
        case 'siok':
          return `https://play.google.com/store/apps/details?id=com.wpoltora.siok&hl=pl`;
        case 'stella':
          return 'https://pracownia-stella.pl';
        default:
          return 'No description available.';
      }
    },
    techStack() {
      switch (this.option) {
        case 'siok':
          return [
            { name: 'Android', icon: 'fa-android' },
            { name: 'Java', icon: 'fa-java' }
          ];
        case 'stella':
          return [
            { name: 'HTML', icon: 'fa-html5' },
            { name: 'CSS', icon: 'fa-css3-alt' },
            { name: 'Sass', icon: 'fa-sass' },
            { name: 'JavaScript', icon: 'fa-js' },
            { name: 'PHP', icon: 'fa-php' }
          ];
        default:
          return [];
      }
    }
    }

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .project-display{
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        justify-self: center;
        align-items: start;
    }

    .desc{
        text-align: start;
        animation: fadeInUp 2s ease-in forwards;
    }

    .desc-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap:2em;
    }

    .project-display:nth-of-type(odd) .desc-container{
      flex-direction: row-reverse;
    }

    .desc-container > * {
        flex: 1;
    }

    h2{
        position: relative;
    }

    p{
        margin-bottom: 40px;
    }

    .custom-carousel{
        animation: fadeInLeft 2s ease-out forwards;
    }

    .tech-stack{
      display: flex;
      margin-top: 2em;
      gap: 1em;
    }

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInLeft {
        0% {
            opacity: 0;
            transform: translateX(60px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @media screen and (max-width: 1000px) {
      .desc-container{
        flex-direction: column-reverse;
      }

      .desc-container > * {
        flex: auto;
      }
      .project-display:nth-of-type(odd) .desc-container{
        flex-direction: column-reverse;
      }
    }
  </style>
  