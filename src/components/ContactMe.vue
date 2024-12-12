<template>
    <div class="contact-me">
      <h2>{{$t('strings.navContactMe')}}</h2>
      <div class="contacts">
        <div>
            <i class="fa-solid fa-phone"></i>
            <p>+48 662 542 871</p>
        </div>
        <div>
            <i class="fa-solid fa-envelope"></i>
            <p>poltorak.wojciech@gmail.com</p>
        </div>
        <div>
            <i class="fa-brands fa-linkedin"></i>
            <p><a href="https://www.linkedin.com/in/wojciech-poltorak">https://www.linkedin.com/in/wojciech-poltorak</a></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactMe',
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

    .contact-me{
        width: 100%;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        justify-self: center;
        align-items: start;
    }
    h2{
        text-align: start;
        box-shadow: 10px 10px var(--primary);
        margin-bottom: 2em;
        padding-right: 7px;
        font-size: 2em;
    }

    i{
        font-size: 2em;
        margin-bottom: 0.3em;
    }

    .contacts{
        display: flex;
        flex-direction: row;
        gap: 2em;
        flex-wrap: wrap;
    }

    .contacts >* {
        background-color: var(--primary);
        padding: 1.5em;
        border-radius: 5px;
    }

    p{
        font-size: 0.8em;
    }

    @media screen and (max-width: 1000px) {
         
    }
  </style>
  