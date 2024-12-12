<template>
  <StylishHeader title="WOJCIECH PÓŁTORAK" subtitle="portfolio"/>
  <SideNav :active="activeSection" />
  <div id="projects" class="section">
    <h2 class="projects-heading">{{$t('strings.navProjects')}}</h2>
    <ProjectDisplay class="project-dp" option="siok"/>
    <ProjectDisplay class="project-dp" option="stella"/>
  </div>
  <div id="about-me" class="section">
    <AboutMe />
  </div>
  <div id="skillset" class="section">
    <SkillSet />
  </div>
  <div id="contact-me" class="section">
    <ContactMe />
  </div>
  <div id="about-page" class="section">
    <AboutPage />
  </div>
</template>


<script>
import StylishHeader from './components/StylishHeader.vue'
import ProjectDisplay from './components/ProjectDisplay.vue'
import AboutMe from './components/AboutMe.vue'
import SideNav from './components/SideNav.vue';
import SkillSet from './components/SkillSet.vue';
import AboutPage from './components/AboutPage.vue';
import ContactMe from './components/ContactMe.vue';

export default {
  name: 'App',
  components: {
    StylishHeader,
    ProjectDisplay,
    AboutMe,
    SideNav,
    SkillSet,
    AboutPage,
    ContactMe,
  },
  data() {
    return {
      activeSection: '',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll(); // Ensure correct section is active on load
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const sections = document.querySelectorAll('.section');
      let scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          this.activeSection = section.id;
        }
      });
    },
  },
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

body{
  background-color:black;
}

a {
  color: inherit;
  text-decoration: none;
  outline: none;
}

.project-dp{
  margin-top: 4em;
}

#projects{
  max-width: 1000px;
  justify-self: center;
  margin-top: 2em;
}

#skillset{
  margin-top: 5em;
}

#about-page{
  margin-top: 2em;
}

.projects-heading{
        width: fit-content;
        text-align: start;
        box-shadow: 10px 10px var(--primary);
        margin-bottom: 3em;
        margin-top: 3em;
        padding-right: 7px;
        font-size: 2em;
}

@media screen and (max-width: 1000px) {
  body{
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
