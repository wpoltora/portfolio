<template>
    <div class="nav">
      <i class="fa-solid fa-bars" @click="toggleMenu"></i>
        <div class="languages">
          <img :src="require(`@/assets/poland.png`)" @click="changeLanguage('pl')" :class="{ active: $i18n.locale === 'pl' }">
          <img :src="require(`@/assets/england.png`)" @click="changeLanguage('en')" :class="{ active: $i18n.locale === 'en' }">
        </div>
        <ul v-if="shouldShowMenu">
            <li>
                <a href="#projects" :class="{ active: active === 'projects' }" @click="hideMenu()">{{$t('strings.navProjects').toUpperCase()}}</a>
            </li>
            <li>
                <a href="#about-me" :class="{ active: active === 'about-me' }" @click="hideMenu()">{{$t('strings.navAboutMe').toUpperCase()}}</a>
            </li>
            <li>
                <a href="#skillset" :class="{ active: active === 'skillset' }" @click="hideMenu()">{{$t('strings.navSkillset').toUpperCase()}}</a>
            </li>
            <li>
                <a href="#contact-me" :class="{ active: active === 'contact-me' }" @click="hideMenu()">{{$t('strings.navContactMe').toUpperCase()}}</a>
            </li>
            <li>
                <a href="#about-page" :class="{ active: active === 'about-page' }" @click="hideMenu()">{{$t('strings.navAboutPage').toUpperCase()}}</a>
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
    computed: {
      shouldShowMenu() {
        // Show menu if it's visible or if we're on a large screen
        return this.isMenuVisible || !this.isMobile;
      },
    },
    mounted() {
      this.isMobile = window.innerWidth <= 1400; // Check if it's a small screen
      window.addEventListener('resize', () => {
        this.isMobile = window.innerWidth <= 1400; // Update on window resize
      });
    },
    methods: {
      changeLanguage(lang) {
        this.$i18n.locale = lang; 
      },
      toggleMenu() {
        this.isMenuVisible = !this.isMenuVisible;  // Toggle menu visibility
      },
      hideMenu(){
        this.isMenuVisible = false;
      }
    },
    data() {
      return {
        isMenuVisible: false,  // This will control the visibility of the menu
        isMobile: false,  
      };
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
        left: calc(50% - 720px);
        transform: translateY(-50%);
    }

    ul{
      list-style: none;
      font-weight: 500;
      padding: 0;
      margin: 0
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

    .languages{
      display: flex;
      justify-content: center;
      gap: 1em;
      margin-bottom: 2em;
    }

    .languages img{
      width: 35px;
      padding: 8px;
      border-radius: 5px;
      cursor: pointer;
    }

    .languages img:hover{
      background-color: var(--secondary);
      transition: 0.3s;
    }

    .languages img.active{
      background-color: var(--primary);
      transition: 0.3s;
    }

    .fa-solid{
      font-size: 2em;
      margin-left: 1em;
      display: none;
      cursor: pointer;
    }

    @media screen and (max-width: 1400px) {
      .nav{
        display: flex;
        align-items: center;
        position: fixed; 
        top: 0; 
        left: 0; 
        right: 0; 
        flex-direction: row;
        z-index: 1000;
        transform: none;
        width: 100%;
        background-color: black;
        border-bottom: 3px solid var(--primary);
      }
      
      .fa-solid{
        display: block;
      }

      ul{
        position: absolute;
        top: 58px;
        background-color: black;
        height: 100vh;
        padding-top: 2em;
        width: 100%;
      }

      .languages{
        margin-top: 1em;
        margin-bottom: 1em;
        margin-left: auto;
        margin-right: 1em;
      }

      .languages img{
        width: 28px;
      }
    }
  </style>
  