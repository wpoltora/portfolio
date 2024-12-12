<template>
    <div class="about-me">
      <h2>{{$t('strings.navAboutMe')}}</h2>
        <div class="side-by-side">
            <img :src="require(`@/assets/wojtek1.jpg`)">
            <p>{{ $t('strings.aboutMe') }}</p>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutMe',
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    h2{
        text-align: start;
        box-shadow: 10px 10px var(--primary);
        margin-bottom: 2em;
        padding-right: 7px;
        font-size: 2em;
    }
    .about-me{
        width: 100%;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        justify-self: center;
        align-items: start;
    }
    img{
        width: 400px;
        height: 400px;
    }

    img::before{
        position: absolute;
        content: '';
        width: 100px;
        background-color: red;
    }

    .side-by-side{
        display: flex;
        gap: 2em;
        flex-direction: row;
        align-items: center;
    }

    p{
        text-align: start;
        font-weight: bold;
        box-shadow: 15px 15px var(--secondary);
        background-color: var(--primary);
        padding: 15px;
    }

    @media screen and (max-width: 1000px) {
        .side-by-side{
            flex-direction: column;
        }   
    }
  </style>
  