<template>
    <div class="nav">
        <ul>
            <li>
                <a href="#projects" :class="{ active: active === 'projects' }">{{$t('strings.navProjects').toUpperCase()}}</a>
            </li>
            <li>
                <a href="#about-me" :class="{ active: active === 'about-me' }">{{$t('strings.navAboutMe').toUpperCase()}}</a>
            </li>
            <li>
                <a href="#skillset" :class="{ active: active === 'skillset' }">{{$t('strings.navSkillset').toUpperCase()}}</a>
            </li>
            <li>
                <a href="#contact-me" :class="{ active: active === 'contact-me' }">{{$t('strings.navContactMe').toUpperCase()}}</a>
            </li>
            <li>
                <a href="#about-page" :class="{ active: active === 'about-page' }">{{$t('strings.navAboutPage').toUpperCase()}}</a>
            </li>
        </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SideNav',
    props: {
    active: {
      type: String,
      default: '', // Defaults to no active section
      },
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .nav{
        position: fixed;
        z-index: 1000;
        position: fixed;
        top: 50%;
        left: calc(50% - 750px);
        transform: translateY(-50%);
    }

    ul{
      list-style: none;
      font-weight: 500;
    }

    li{
      margin-bottom: 1em;
    }

    a{
      display: block;
      padding: 1em;
      border-radius: 5px;
      transition: 0.2s;
    }

    a.active {
      background-color: var(--primary);
      font-weight: bold;
      transition: 0.2s;
    }

    @media screen and (max-width: 1400px) {
      .nav{
        display: none;
      }
    }
  </style>
  