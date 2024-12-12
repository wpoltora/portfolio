<template>
    <div class="skillset">
      <h2>{{$t('strings.navSkillset')}}</h2>
        <div class="skills">
            <div>
                <i class="fa-brands fa-js"></i>
                <p>JavaScript</p>
            </div>
            <div>
                <i class="fa-brands fa-css"></i>
                <p>CSS</p>
            </div>
            <div>
                <i class="fa-brands fa-sass"></i>
                <p>Sass</p>
            </div>
            <div>
                <i class="fa-brands fa-html5"></i>
                <p>HTML5</p>
            </div>
            <div>
                <i class="fa-brands fa-vuejs"></i>
                <p>Vue.js</p>
            </div>
            <div>
                <i class="fa-brands fa-bootstrap"></i>
                <p>Bootstrap</p>
            </div>
            <div>
                <i class="fa-brands fa-php"></i>
                <p>PHP</p>
            </div>
            <div>
                <i class="fa-brands fa-java"></i>
                <p>Java</p>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkillSet',
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
    .skillset{
        width: 100%;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        justify-self: center;
        align-items: start;
    }

    i{
        font-size: 6em;
    }

    .skills{
        display: flex;
        flex-direction: row;
        gap: 2em;
        flex-wrap: wrap;
    }
   
  </style>
  