<template>
    <div class="about-page">
      <h2>{{$t('strings.navAboutPage')}}</h2>
      <p>{{$t('strings.aboutPageDesc')}}</p>
      <ButtonLink href="https://github.com/wpoltora/portfolio">GitHub</ButtonLink>
    </div>
  </template>
  
  <script>
  import ButtonLink from './ButtonLink.vue';
  export default {
    name: 'AboutPage',
    components: {
    ButtonLink,
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

    .about-page{
        width: 100%;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        justify-self: center;
        align-items: start;
        margin-bottom: 16em;
    }
    h2{
        text-align: start;
        box-shadow: 10px 10px var(--primary);
        margin-bottom: 1em;
        padding-right: 7px;
        font-size: 2em;
    }

    p{
        text-align: start;
    }
  </style>
  